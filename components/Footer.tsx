"use client";
import Link from "next/link";

export default function Footer() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#method", label: "Method" },
    { href: "/#cases", label: "Case Studies" },
    { href: "/discovery", label: "Discovery Journey" },
    { href: "/team", label: "Our Expertise" },
    { href: "/privacy", label: "Privacy Policy" },
  ];

  return (
    <footer className="bg-gray-100 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <nav className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              {label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-gray-500">© Corevolve, All Rights Reserved.</p>
      </div>
    </footer>
  );
}
