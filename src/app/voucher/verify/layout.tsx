import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata(
  'Verify Wi-Fi Voucher Payment',
  'View your Zantex Wi-Fi voucher after payment verification.',
  '/voucher/verify',
  { index: false, follow: false },
);

export default function VoucherVerifyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
