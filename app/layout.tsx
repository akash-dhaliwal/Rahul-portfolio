import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const EMAIL = "prakashkatariya996@gmail.com";

// ✅ ADD THIS NEW CODE HERE
export const metadata: Metadata = {
  title: "Rahul's Portfolio",
  description: "Personal portfolio website",
  // You can add more metadata here like:
  // keywords: "portfolio, developer, projects",
  // authors: [{ name: "Rahul" }],
};

export const viewport = {
  themeColor: "#000000", // Change this color to match your theme
};
// ✅ END OF NEW CODE

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <SplashScreen />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
