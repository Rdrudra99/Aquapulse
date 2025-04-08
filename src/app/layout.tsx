import { Analytics } from "@vercel/analytics/react";
import classNames from "classnames";
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import InitialLoadingProvider from "@/components/ui/InitialLoadingProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: "600"
});
export const metadata: Metadata = {
  title: 'Aquapulse - Sustainable Aquaculture Solutions',
  description: 'Pioneering aquaculture with sustainable innovations to revolutionize the seafood industry.',
  openGraph: {
    title: 'Aquapulse - Sustainable Aquaculture Solutions',
    description: 'Leveraging advanced technologies to enhance sustainability and efficiency in aquaculture.',
    url: 'https://www.aquapulse.co.in/',
    siteName: 'Aquapulse',
    images: [
      {
        url: 'https://www.aquapulse.co.in/og-image.png', // Replace with the actual image URL
        width: 800,
        height: 600,
        alt: 'Aquapulse - Sustainable Aquaculture Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aquapulse - Sustainable Aquaculture Solutions',
    description: 'Innovative solutions for a thriving blue food economy.',
    site: '@aquapulse', // Replace with the actual Twitter handle
    creator: '@aquapulse', // Replace with the actual Twitter handle
    images: ['https://www.aquapulse.co.in/twitter-image.png'], // Replace with the actual image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* //! If you don't want 'screen size' visible at the left bottom of the browser window, You can remove `debug-screens` class */}
      <body
        className={classNames(`${inter.className} antialiased`, {
          "debug-screens": process.env.NODE_ENV === "development",
        })}
      >
        {/* <InitialLoadingProvider> */}
        {children}
        {/* </InitialLoadingProvider> */}
        <Analytics />
      </body>
    </html>
  );
}
