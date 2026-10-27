import type { Metadata } from "next";
import { Lato } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zantex.ng"),
  title: {
    default: "Zantex Digital and Electronics | Engineering and Technology",
    template: "%s | Zantex",
  },
  description: "Zantex delivers electrical engineering, solar installations, network infrastructure, connectivity, digital development and electronics solutions in Nigeria.",
  openGraph: {
    type: "website",
    siteName: "Zantex Digital and Electronics",
    title: "Zantex Digital and Electronics | Engineering and Technology",
    description: "Electrical engineering, solar power, networking, internet connectivity, digital development and electronics solutions in Nigeria.",
    url: "https://zantex.ng",
    images: ["/images/hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zantex Digital and Electronics",
    description: "Engineering, connectivity, digital development and intelligent electronics in Nigeria.",
    images: ["/images/hero.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zantex Digital and Electronics",
  url: "https://zantex.ng",
  logo: "https://zantex.ng/zantext%20logo.png",
  description:
    "Nigerian multidisciplinary engineering and technology company working across electrical infrastructure, solar energy, connectivity, digital development and electronics.",
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+2349068702472", contactType: "WhatsApp" },
    { "@type": "ContactPoint", telephone: "+2347067217503", contactType: "WhatsApp" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lato.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
