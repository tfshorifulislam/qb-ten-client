import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/shared/AsideBard";
import { FloatingTrigger } from "@/components/shared/FloatingTrigger";
import Ad from "@/components/shared/Ad";

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
        <div>
          <SidebarProvider className="flex gap-5 max-w-7xl mx-auto">

            <AppSidebar />
            <FloatingTrigger />

            <main className="">
              {children}
            </main>

            {/* <div className="hidden lg:block">
              <Ad />
            </div> */}

          </SidebarProvider>
        </div>
      </body>
    </html>
  );
}