import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";

import Ad from "@/components/shared/Ad";
import SmoothScroll from "@/components/shared/SmoothScroll";
import { AppSidebar } from "@/components/shared/AsideBard";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "QBten",
    template: "%s | QBten",
  },
  description:
    "QBten is a modern social media platform to connect, share ideas, and build communities.",
  keywords: [
    "QBten",
    "Social Media",
    "Community",
    "Posts",
    "Discussion",
    "Social Network",
  ],
  applicationName: "QBten",
  authors: [{ name: "QBten Team with Tf Shoriful Islam" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", inter.variable, "font-sans", geist.variable,)}>
      <body>
        <Navbar />
        <div className="flex max-w-360 mx-auto gap-5">
          <div className="hidden md:block">
            <AppSidebar />
          </div>
          <main className="flex-1 min-h-screen max-w-full">
            <SmoothScroll>{children}</SmoothScroll>
          </main>

          <div className="hidden lg:block">
            <Ad />
          </div>
        </div>
      </body>
    </html>
  );
}