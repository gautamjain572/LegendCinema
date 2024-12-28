import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "@/components/Navbar/Footer";
import Navbar2 from "@/components/Navbar/Navbar2";

export const metadata: Metadata = {
  title: "Legend Cinemas",
  description: "Book your Movie Ticket",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar2 />
        {children}
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
