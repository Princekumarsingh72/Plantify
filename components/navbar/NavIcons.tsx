"use client";

import { Search, ShoppingBag, Menu } from "lucide-react";

export default function NavIcons() {
  return (
    <div className="flex items-center gap-4 text-white">
      <Search
        size={18}
        className="cursor-pointer hover:text-green-400 transition"
      />

      <ShoppingBag
        size={18}
        className="cursor-pointer hover:text-green-400 transition"
      />

      <Menu
        size={20}
        className="cursor-pointer hover:text-green-400 transition"
      />
    </div>
  );
}