"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function FloatingTrigger() {
  const { state } = useSidebar();

  return (
    <div
      className={cn(
        "fixed top-20 z-50 transition-all duration-300",
        state === "expanded"
          ? "left-64 -translate-x-1/2"
          : "left-9 translate-x-0"
      )}
    >
      <SidebarTrigger />
    </div>
  );
}