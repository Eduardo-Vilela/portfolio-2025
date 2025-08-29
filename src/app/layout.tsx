'use client';

import "./globals.css";
import { metadata } from '@/types/metadata';
import { Outfit } from 'next/font/google';


// Importing the Bootstrap CSS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

// Configurar Outfit de Google Fonts
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <html lang="es">
      <head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </head>
      <body className={`${outfit.variable} w-100`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
