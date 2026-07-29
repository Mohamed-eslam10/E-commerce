import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import HeaderNavbar from "./components/HeaderNavbar/HeaderNavbar";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-commerce",
  description: "shop now !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <HeaderNavbar />
        {children}
        <ToastContainer 
        autoClose={2500}/>

        <Footer />
      </body>
    </html>
  );
}
