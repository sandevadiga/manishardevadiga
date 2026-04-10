"use client";

import { useEffect, useRef } from "react";

const contacts = [
  {
    label: "Email",
    value: "manishardevadiga@gmail.com",
    href: "mailto:manishardevadiga@gmail.com",
    accent: "rose",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 9606427763",
    href: "tel:9606427763",
    accent: "teal",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.73h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "maneesha devadiga",
    href: "https://linkedin.com/in/maneesha-devadiga",
    accent: "gold",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
];

const accentColor: Record<string, string> = {
  rose: "#f0a090",
  teal: "#6dd5ca",
  gold: "#d4956a",
};
const accentBg: Record<string, string> = {
  rose: "rgba(240,160,144,0.1)",
  teal: "rgba(109,213,202,0.1)",
  gold: "rgba(212,149,106,0.1)",
};
const accentBorder: Record<string, string> = {
  rose: "rgba(240,160,144,0.2)",
  teal: "rgba(109,213,202,0.2)",
  gold: "rgba(212,149,106,0.2)",
};

export default function Contact() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none" style={{ width: 700, height: 700, background: "radial-gradient(circle, rgba(240,160,144,0.04), transparent 65%)" }} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-3"><span className="section-label">Contact</span></div>
        <h2 className="reveal text-5xl md:text-6xl leading-tight mb-5" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}>
          Let&apos;s <em className="grad-rose" style={{ fontWeight: 400 }}>connect</em>
        </h2>
        <p className="reveal text-[#7a7577] text-lg max-w-xl leading-relaxed mb-14 delay-1" style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}>
          I&apos;m actively looking for exciting opportunities. Whether you have a position to offer,
          a project to collaborate on, or just want to say hello — I&apos;d love to hear from you.
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {contacts.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`reveal glass rounded-2xl p-6 card-hover block delay-${i + 1}`}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: accentBg[c.accent], border: `1px solid ${accentBorder[c.accent]}`, color: accentColor[c.accent] }}
              >
                {c.icon}
              </div>
              <p className="text-[#7a7577] text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-outfit)" }}>{c.label}</p>
              <p className="text-[#ede8e3] text-sm" style={{ fontFamily: "var(--font-outfit)" }}>{c.value}</p>
            </a>
          ))}
        </div>

        {/* CTA banner */}
        <div className="reveal glass rounded-2xl p-10 text-center relative overflow-hidden delay-4" style={{ border: "1px solid rgba(240,160,144,0.12)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at center, rgba(240,160,144,0.04), transparent 60%)" }} />
          <div className="relative z-10">
            <p className="text-[#7a7577] text-xs uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-outfit)" }}>Available for Work</p>
            <h3 className="text-[#ede8e3] text-3xl md:text-4xl mb-7" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}>
              Ready to bring your{" "}
              <em className="grad-rose" style={{ fontWeight: 400 }}>vision to life</em>
            </h3>
            <a href="mailto:manishardevadiga@gmail.com" className="btn-primary">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Send me an Email
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#7a7577] text-xs" style={{ fontFamily: "var(--font-outfit)" }}>© 2025 Maneesha Devadiga. All rights reserved.</p>
          <p className="text-[#7a7577] text-xs" style={{ fontFamily: "var(--font-outfit)" }}>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
}
