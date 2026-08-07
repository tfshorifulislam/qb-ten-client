import Navbar from "@/components/shared/Navbar";

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-3xl pt-20">
        {children}
      </main>
    </>
  );
}