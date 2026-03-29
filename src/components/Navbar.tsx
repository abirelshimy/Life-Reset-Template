"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group transition-transform duration-300 hover:scale-105 relative z-[70]"
          >
            <Image
              src="/logo.png"
              alt="Life Reset"
              width={300}
              height={93}
              className={`h-20 w-auto transition-all duration-300 ${
                scrolled || mobileOpen ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide uppercase transition-colors duration-300 hover:text-gold ${
                  scrolled ? "text-charcoal" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-6 py-2.5 bg-gold text-white text-sm uppercase tracking-wider rounded-full transition-all duration-300 hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden flex flex-col gap-1.5 p-2 relative z-[70]"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 origin-center ${
                mobileOpen
                  ? "rotate-45 translate-y-[4px] bg-navy"
                  : scrolled
                  ? "bg-navy"
                  : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                mobileOpen
                  ? "opacity-0 scale-0"
                  : scrolled
                  ? "bg-navy"
                  : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 origin-center ${
                mobileOpen
                  ? "-rotate-45 -translate-y-[4px] bg-navy"
                  : scrolled
                  ? "bg-navy"
                  : "bg-white"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-warm-white z-[60] flex flex-col items-center justify-center md:hidden">
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-navy font-[var(--font-heading)] text-2xl tracking-wide hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-8 py-3 bg-gold text-white uppercase tracking-wider rounded-full hover:bg-gold-dark transition-all duration-300"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
