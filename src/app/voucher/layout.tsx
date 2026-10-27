import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata(
  'Buy a Zantex Wi-Fi Voucher',
  'Choose a Zantex campus Wi-Fi voucher plan and hostel location, then complete payment securely through Paystack.',
  '/voucher',
);

export default function VoucherLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
