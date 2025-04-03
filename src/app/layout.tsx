import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GifSpace",
  description:
    "GifSpace is the go-to platform for people to upload, share, and discover GIFs. Whether you're looking for funny memes, educational animations, or creative visuals, GifSpace has a wide collection of GIFs to suit everyone. With a simple sign-up and sign-in process, users can easily upload their own GIFs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}  antialiased  `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
