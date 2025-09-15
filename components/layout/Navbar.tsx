"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full bg-transparent text-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 pb-2 pt-2">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo2.png"
            alt="ExereCorp"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Nav Links */}
        <div className="flex gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const isContact = link.label === "Contact";

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition ${
                  isContact
                    ? `border-2 border-sky-500 bg-sky-500/20 text-white px-4 py-1 rounded-md hover:bg-sky-500/30`
                    : isActive
                    ? "text-sky-500 font-semibold underline underline-offset-4"
                    : "hover:underline underline-offset-4 hover:text-slate-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
