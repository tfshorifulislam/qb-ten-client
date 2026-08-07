import Navbar from "@/components/shared/Navbar";
import { AppSidebar } from "@/components/shared/AsideBard";
import Ad from "@/components/shared/Ad";
import SmoothScroll from "@/components/shared/SmoothScroll";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <div className="mx-auto flex max-w-360 gap-5 px-4">
        <aside className="hidden md:block">
          <AppSidebar />
        </aside>

        <main className="min-h-screen flex-1">
          <SmoothScroll>{children}</SmoothScroll>
        </main>

        <aside className="hidden lg:block">
          <Ad />
        </aside>
      </div>
    </>
  );
}