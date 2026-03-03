import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Laredo Lifeline EMS | Emergency & Medical Transport Services",
    template: "%s | Laredo Lifeline EMS",
  },
  description:
    "Laredo Lifeline EMS provides 24/7 emergency ambulance response, non-emergency medical transport, inter-facility transfers, and event standby EMS services in the Laredo area.",
  keywords: [
    "ambulance",
    "EMS",
    "emergency medical services",
    "medical transport",
    "Laredo",
    "non-emergency transport",
    "paramedic",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Laredo Lifeline EMS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
