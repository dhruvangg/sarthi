import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingCTA } from "@/components/FloatingCTA";
import Script from "next/script";

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
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M5R368KX');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-M5R368KX"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TMTW5N1DHQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TMTW5N1DHQ');
          `}
        </Script>
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
