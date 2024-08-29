import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="conteiner">
          <div className="max-w-7xl mx-auto px-20 xl:max-w-5xl lg:max-w-3xl lg:px-10 md:max-w-2xl sm:max-w-md">
            <Navbar />
              {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
