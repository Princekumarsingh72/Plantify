"use client";
import Image from "next/image";

import { Search, ShoppingBag, Menu } from "lucide-react";
import Link from "next/link";

import NavLinks from "@/components/navbar/NavLink";
import NavIcons from "@/components/navbar/NavIcons";
import Logo from "@/components/navbar/Logo";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-black/400 backdrop-blur-md border ">
      <Logo/>
      <NavLinks/>
      <NavIcons/>
     
    </nav>
  );
}