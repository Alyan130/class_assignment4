"use client";

import localFont from "next/font/local";
import "./globals.css";
import Header from "./component/header";
import Footer from "./component/footer";

// Import AOS and its CSS
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Initialize AOS on the client side
  useEffect(() => {
    AOS.init({
      duration: 1000,        
      easing: 'ease-in-out', 
      once: true,          
    });
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
