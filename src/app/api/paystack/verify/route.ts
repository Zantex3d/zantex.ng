import { NextResponse } from 'next/server';
import pool from '@/lib/db';

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
const TERMII_API_KEY = process.env.TERMII_API_KEY;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const reference = searchParams.get('reference');

  if (!reference) {
    return NextResponse.json({ error: 'Missing transaction reference.' }, { status: 400 });
  }

  try {
    // 1. Verify payment with Paystack
    const verifyRes = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
      },
    });

    const paystackResponse = await verifyRes.json();
    if (!paystackResponse.status || paystackResponse.data.status !== 'success') {
      return NextResponse.json({ error: 'Payment verification failed.' }, { status: 400 });
    }

    const { amount, metadata, customer } = paystackResponse.data;
    const { full_name, phone, hostel, plan } = metadata.custom_fields.reduce((acc: any, field: any) => {
      acc[field.variable_name] = field.value;
      return acc;
    }, {});
    const email = customer.email;

    // 2. Check if already processed
    let existing: any[] = [];
    try {
      const [rows] = await pool.execute(
        'SELECT voucher_id FROM purchase_history WHERE transaction_reference = ?',
        [reference]
      );
      existing = rows as any[];
    } catch (dbError: any) {
      console.error("Database connection error:", dbError);
      return NextResponse.json({ error: `Database connection failed: ${dbError.message}. Please check your .env settings and Remote MySQL whitelist.` }, { status: 500 });
    }

    if (existing.length > 0) {
      const voucher_code = existing[0].voucher_id;
      return NextResponse.json({ 
        success: true, 
        voucher_code,
        fullname: full_name,
        email,
        phone,
        hostel,
        plan
      });
    }

    // 3. Fetch available voucher
    let voucher_code = '';
    const connection = await pool.getConnection();
    try {
      const [vouchers] = await connection.execute(
        'SELECT voucher_id FROM vouchers WHERE is_redeemed = 0 AND hostel = ? AND plan = ? LIMIT 1',
        [hostel, plan]
      );

      if ((vouchers as any[]).length === 0) {
        connection.release();
        return NextResponse.json({ error: 'Sorry, no available voucher at the moment. Please contact support.' }, { status: 404 });
      }

      voucher_code = (vouchers as any[])[0].voucher_id;

      // 4. Record transaction and Update voucher
      await connection.beginTransaction();

      // Record transaction
      await connection.execute(
        'INSERT INTO purchase_history (email, phone, full_name, hostel, plan, voucher_id, price, transaction_reference) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [email, phone, full_name, hostel, plan, voucher_code, amount / 100, reference]
      );

      // Mark voucher as redeemed
      await connection.execute(
        'UPDATE vouchers SET is_redeemed = 1 WHERE voucher_id = ?',
        [voucher_code]
      );

      await connection.commit();
    } catch (e: any) {
      await connection.rollback();
      console.error("Transaction failed:", e);
      return NextResponse.json({ error: `Transaction failed: ${e.message}` }, { status: 500 });
    } finally {
      connection.release();
    }

    // 5. Send Termii SMS
    const message = `✅ Zantex Voucher\nVoucher: ${voucher_code}\nPlan: ${plan}\nHostel: ${hostel}\nPrice: ₦${amount / 100}\nRef: ${reference}\nZantex WiFi`;
    
    try {
      await fetch("https://api.ng.termii.com/api/sms/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: phone,
          from: 'ZANTEX',
          sms: message,
          type: 'plain',
          channel: 'generic',
          api_key: TERMII_API_KEY
        }),
      });
    } catch (smsError) {
      console.error("SMS sending failed:", smsError);
      // Don't fail the whole request if SMS fails
    }

    return NextResponse.json({ 
      success: true, 
      voucher_code,
      fullname: full_name,
      email,
      phone,
      hostel,
      plan
    });

  } catch (error: any) {
    console.error("Verification error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
