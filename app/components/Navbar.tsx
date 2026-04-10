"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-white/5 py-3" : "py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#home">
          <span
            className="text-2xl shimmer"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontStyle: "italic" }}
          >
            MD
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#7a7577] hover:text-[#f0a090] transition-colors text-sm tracking-wide"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {l.label}
            </a>
          ))}
          <a href="mailto:manishardevadiga@gmail.com" className="btn-primary py-2.5 px-5 text-xs">
            Hire Me
          </a>
        </div>

        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setOpen(!open)}>
          <span className={`block w-5 h-0.5 bg-[#ede8e3] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#ede8e3] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#ede8e3] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[#7a7577] hover:text-[#f0a090] transition-colors py-1"
                style={{ fontFamily: "var(--font-outfit)" }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="mailto:manishardevadiga@gmail.com" className="btn-primary w-fit mt-2">
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
