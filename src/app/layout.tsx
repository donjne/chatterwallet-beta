import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <div className="relative w-full min-h-screen">
          {/* Main background */}
          <div 
            className="absolute inset-0 bg-[#1A1A1A] mix-blend-soft-light opacity-30"
            style={{
              width: '1440px',
              height: '1024px',
              left: 'calc(50% - 1440px/2)',
            }}
          />
          {children}
        </div>
      </body>
    </html>
  );
}