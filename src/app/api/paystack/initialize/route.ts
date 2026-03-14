import { NextResponse } from 'next/server';

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

export async function POST(req: Request) {
  try {
    const { fullname, email, phone, hostel: rawHostel, plan } = await req.json();

    if (!fullname || !email || !phone || !rawHostel || !plan) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Normalize hostel name for DB enum ('umth', 'girls')
    const hostel = rawHostel === 'unimaid-girls' ? 'girls' : rawHostel;

    // Determine amount based on hostel and plan
    let amount = 0;
    if (hostel === 'girls' || hostel === 'unimaid-girls') {
      switch (plan) {
        case 'weekly': amount = 1500; break;
        case 'monthly': amount = 5000; break;
        default: amount = 0;
      }
    } else {
      switch (plan) {
        case 'daily': amount = 500; break;
        case 'weekly': amount = 3000; break;
        case 'monthly': amount = 5000; break;
        default: amount = 0;
      }
    }

    if (amount <= 0) {
      return NextResponse.json({ error: 'Invalid plan or hostel selection.' }, { status: 400 });
    }

    const callback_url = `${new URL(req.url).origin}/voucher/verify`;

    const fields = {
      email,
      amount: amount * 100,
      callback_url,
      metadata: {
        custom_fields: [
          { display_name: "Full Name", variable_name: "full_name", value: fullname },
          { display_name: "Phone", variable_name: "phone", value: phone },
          { display_name: "Hostel", variable_name: "hostel", value: hostel },
          { display_name: "Plan", variable_name: "plan", value: plan },
        ]
      }
    };

    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    });

    const result = await response.json();

    if (!result.status) {
      return NextResponse.json({ error: result.message }, { status: 400 });
    }

    return NextResponse.json({ url: result.data.authorization_url, reference: result.data.reference });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
