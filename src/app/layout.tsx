import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/shared/AsideBard";
import { FloatingTrigger } from "@/components/shared/FloatingTrigger";

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
    <html lang="en" className={cn("h-full", "antialiased", inter.variable, "font-sans", geist.variable)}>
      <body>
        <Navbar />
        <SidebarProvider >
          <div className="md:relative">
            <AppSidebar />
          </div>
          <FloatingTrigger />
          <main className="ml-10 flex-1 flex-col">
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}