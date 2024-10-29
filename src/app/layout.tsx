import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import "./globals.css";
import ClientWrapper from "../components/ClientWrapper";

const gabarito = localFont({
  src: "./fonts/Gabarito-Regular.ttf",
  variable: "--font-gabarito",
});

export const metadata: Metadata = {
  title: "franki3.me",
  description: "Personal website of Frankie McMorrow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gabarito.variable} antialiased`}>
        <ClientWrapper>{children}</ClientWrapper>
        <Analytics />
      </body>
    </html>
  );
}
