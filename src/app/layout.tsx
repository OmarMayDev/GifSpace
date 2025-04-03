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
    "GifSpace is the go-to platform for developers to upload, share, and discover programming-related GIFs. Whether you're looking for funny coding memes, educational animations, or creative programming visuals, GifSpace has a wide collection of GIFs to suit every developer's needs. With a simple sign-up and sign-in process, users can easily upload their own GIFs, explore community-generated content, and engage with other developers. Featuring a clean design, a user-friendly upload page, and a Community GIFs section, GifSpace brings a unique twist to the developer community by making programming fun and interactive. Perfect for anyone looking to add some humor or visual clarity to their coding journey. Join the GifSpace community today and explore the best programming GIFs on the internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}  antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
