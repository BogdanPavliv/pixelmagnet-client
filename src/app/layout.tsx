import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import './globalStyles/normalize.css'
import "./globalStyles/globals.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import StoreProvider from "./components/provirer/Provider"

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixelmagnet",
  description: "Pixelmagnet specializes in Branding, UX/UI Design, App Development, Web Development, and Digital Transformation, delivering innovative solutions to help businesses thrive in the digital age",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <div className="wrapper">
          <StoreProvider>  
            <Header/>
            {children} 
            <Footer/>
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
