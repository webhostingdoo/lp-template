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
import config from '@/data/site-config.json';

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
  title: config.meta.defaultTitle,
  description: config.meta.defaultDescription,
  openGraph: {
    type: "website",
    title: config.meta.defaultTitle,
    description: config.meta.defaultDescription,
    images: [`/images/hero/${config.hero.imageDesktop}`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${montserrat.variable}`}>
        <Suspense fallback={null}>
          <GclidCapture />
        </Suspense>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <Script src={config.tracking.ctmScriptUrl} strategy="afterInteractive" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${config.tracking.googleAdsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${config.tracking.googleAdsId}');
          `}
        </Script>
      </body>
    </html>
  );
}
