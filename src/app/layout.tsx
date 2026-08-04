import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body>
        <main className="min-h-full flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}