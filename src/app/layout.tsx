import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

// Load Iquost font locally
const iquost = localFont({
  src: '/Iquost-Regular.woff2', // Make sure to add your font file here
  variable: '--font-iquost',
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
      <head>
        <style jsx global>{`
          :root {
            --font-iquost: ${iquost.style.fontFamily};
          }
        `}</style>
      </head>
      <body className="font-iquost">
        <div className="relative w-full min-h-screen bg-[#070410]">
          {children}
        </div>
      </body>
    </html>
  );
}