"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Star,
  Users,
  Bookmark,
  User,
  Settings,
  Plus,
} from "lucide-react";

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
    title: "Start a Community",
    url: "/createCommunity",
    icon: Plus,
  },
  {
    title: "Communities",
    url: "/communities",
    icon: Users,
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
    <aside className="sticky top-16 h-screen w-72 shrink-0 border-r  bg-[#fcfcfd] px-5 py-6">
      
      {/* Menu */}
      <nav className="space-y-2">
        {items.map((item) => {
          const active = pathname === item.url;
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.url}
              className={`group relative flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-300 ${
                active
                  ? "bg-white "
                  : "hover:bg-white "
              }`}
            >
              
              {/* Icon */}
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all ${
                  active
                    ? "bg-blue-600 text-white"
                    : "bg-[#F3F1FF] text-gray-600 group-hover:bg-[#EAE6FF]"
                }`}
              >
                <Icon size={20} strokeWidth={2.2} />
              </div>

              {/* Text */}
              <span
                className={`font-medium transition-colors ${
                  active
                    ? "text-gray-900"
                    : "text-gray-600 group-hover:text-gray-900"
                }`}
              >
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}