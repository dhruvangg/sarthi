import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sssarthifinancial.com"),
  title: {
    default: "SS Sarthi Financial Services | Mutual Funds & Investment Advisory",
    template: "%s | SS Sarthi Financial Services"
  },
  description: "Expert advisory in Mutual Funds, Fixed Deposits, Bonds, LIC, Taxation, General Insurance & Property Valuation in India.",
  keywords: ["Financial Services", "Mutual Funds", "SIP Calculator", "Investment Advisory", "Tax Planning", "Property Valuation", "Insurance Planning"],
  openGraph: {
    title: "SS Sarthi Financial Services",
    description: "Your Trusted Partner in Mutual Funds, Insurance, Tax & Property Advisory",
    url: "https://sssarthifinancial.com",
    siteName: "SS Sarthi",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
