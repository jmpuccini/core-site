"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname() || "/";

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#method", label: "Method" },
    { href: "/#cases", label: "Case Studies" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Corevolve Logo"
            width={160}
            height={0}
            style={{ height: "auto", width: "160px" }}
            priority
          />
        </Link>
        <nav className="flex items-center space-x-8">
          {menuItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`text-base font-medium transition-colors ${
                path === href
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              {label}
            </a>
          ))}
          <Link
            href="/login"
            className="ml-4 px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
