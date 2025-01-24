import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

// Load Iquost font locally
const iquost = localFont({
  src: './fonts/Iquost-Regular.woff2',
  variable: '--font-iquost',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ChatterWallet",
  description: "Pay utility bills with crypto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={iquost.variable}>
      <body className={`font-iquost ${iquost.className}`}>
        <div className="relative w-full min-h-screen bg-[#070410]">
          {children}
        </div>
      </body>
    </html>
  );
}