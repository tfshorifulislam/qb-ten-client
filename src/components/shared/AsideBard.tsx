"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  Star,
  Users,
  TrendingUp,
  Bookmark,
  User,
  Settings
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Popular",
    url: "/popular",
    icon: Star,
  },
  {
    title: "Communities",
    url: "/communities",
    icon: Users,
  },
  {
    title: "Trending",
    url: "/trending",
    icon: TrendingUp,
  },
  {
    title: "Saved",
    url: "/saved",
    icon: Bookmark,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="top-15">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  isActive={pathname === item.url}
                  className=" h-12 rounded-xl px-4 transition-all duration-200 hover:bg-primary/10 hover:text-primary data-[active=true]:bg-blue-600 data-[active=true]:text-primary-foreground data-[active=true]:shadow-sm"
                >
                  <Link
                    href={item.url}
                    className="flex w-full items-center gap-3"
                  >
                    <item.icon />
                    <span className="font-medium">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}