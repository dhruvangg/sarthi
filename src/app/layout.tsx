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
  metadataBase: new URL("https://sarthisip.com"),
  title: {
    default: "Sarthi SIP | Mutual Funds & Investment Advisory",
    template: "%s | Sarthi SIP"
  },
  description: "Expert advisory in Mutual Funds, Fixed Deposits, Bonds, LIC, Taxation, General Insurance & Property Valuation in India.",
  keywords: ["Financial Services", "Mutual Funds", "SIP Calculator", "Investment Advisory", "Tax Planning", "Property Valuation", "Insurance Planning", "Sarthi SIP"],
  openGraph: {
    title: "Sarthi SIP",
    description: "Your Trusted Partner in Mutual Funds, Insurance, Tax & Property Advisory",
    url: "https://sarthisip.com",
    siteName: "Sarthi SIP",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Sarthi SIP Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarthi SIP",
    description: "Your Trusted Partner in Mutual Funds, Insurance, Tax & Property Advisory",
    images: ["/logo.png"],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
