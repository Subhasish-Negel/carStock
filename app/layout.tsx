import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Rent My Car",
  description: "Rent Cars in less than 2 minutes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
