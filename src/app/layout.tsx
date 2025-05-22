import type { Metadata } from "next";
import PagesLayout from './components/layouts/PagesLayout';
import './globalStyles/normalize.css'
import "./globalStyles/globals.scss";

export const metadata: Metadata = {
  title: "Pixelmagnet | Digital Agency",
  description: "Pixelmagnet specializes in Branding, UX/UI Design, App Development, Web Development, and Digital Transformation, delivering innovative solutions to help businesses thrive in the digital age",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PagesLayout>{children}</PagesLayout>
}
