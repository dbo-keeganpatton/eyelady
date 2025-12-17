import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import background from '../public/background.svg'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eyelady Skateboards",
  description: "All others are dissolved",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* BACKGROUND */}
        <div className="fixed inset-0 -z-10">
          <Image
            src={background}
            alt="background"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              opacity: 0.5,
            }}
          />
        </div>

        {/* APP CONTENT */}
        {children}
      </body>
    </html>
  );
}

