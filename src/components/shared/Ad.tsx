import React from "react";
import Image from "next/image";
import Link from "next/link";

const Ad = () => {
  return (
    <aside className="sticky top-24 space-y-4 w-72">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="relative h-44 w-full">
          <Image
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800"
            alt="Advertisement"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-3 p-4">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
            Sponsored
          </span>

          <h3 className="text-lg font-bold text-gray-900">
            Grow Your Business 🚀
          </h3>

          <p className="text-sm text-gray-600">
            Reach thousands of active users on QBten with targeted advertising.
          </p>

          <Link
            href="/advertise"
            className="flex w-full items-center justify-center rounded-xl bg-orange-500 py-2.5 font-medium text-white transition hover:bg-orange-600"
          >
            Advertise Now
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Ad;