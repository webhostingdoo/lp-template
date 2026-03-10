import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Script from 'next/script';
import { Suspense } from 'react';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GclidCapture from '@/components/GclidCapture';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Drug & Alcohol Detox and Rehab Treatment Centers | Tru Dallas Detox",
  description:
    "Tru Dallas Detox is committed to improving the lives of individuals who are struggling with mental health and Addiction.",
  openGraph: {
    type: "website",
    title: "Drug & Alcohol Detox and Rehab Treatment Centers",
    description:
      "Tru Dallas Detox is committed to improving the lives of individuals who are struggling with mental health and addiction.",
    images: ["/images/hero/tdd-hero-desktop.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="//305685.tctm.co/t.js" strategy="afterInteractive" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17709217731"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17709217731');
          `}
        </Script>
      </head>
      <body className={`${cormorant.variable} ${montserrat.variable}`}>
        <Suspense fallback={null}>
          <GclidCapture />
        </Suspense>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
