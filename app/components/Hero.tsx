"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const t = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute rounded-full pointer-events-none" style={{ width: 620, height: 620, background: "radial-gradient(circle, rgba(240,160,144,0.12) 0%, transparent 65%)", top: -120, left: -160, animation: "orb1 14s ease-in-out infinite" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ width: 460, height: 460, background: "radial-gradient(circle, rgba(109,213,202,0.09) 0%, transparent 65%)", top: "30%", right: -90, animation: "orb2 17s ease-in-out infinite" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ width: 360, height: 360, background: "radial-gradient(circle, rgba(212,149,106,0.08) 0%, transparent 65%)", bottom: "8%", left: "22%", animation: "orb3 20s ease-in-out infinite" }} />

      {/* Decorative large letter */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "38vw",
          fontWeight: 700,
          fontStyle: "italic",
          color: "transparent",
          WebkitTextStroke: "1px rgba(240,160,144,0.035)",
          lineHeight: 1,
          right: "-4vw",
          userSelect: "none",
        }}
      >
        M
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-10"
            style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.8s ease 0.1s" }}
          >
            <span className="pulse-dot w-2 h-2 rounded-full bg-[#6dd5ca]" />
            <span className="text-[#6dd5ca] text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-outfit)" }}>
              Open to Opportunities
            </span>
          </div>

          {/* Name */}
          <div style={t(0.2)}>
            <h1 className="mb-6" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, lineHeight: 0.9 }}>
              <span className="block text-[#ede8e3]" style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}>
                Maneesha
              </span>
              <span className="block shimmer" style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", fontStyle: "italic", fontWeight: 400, paddingBottom: "0.2em", display: "block" }}>
                Devadiga
              </span>
            </h1>
          </div>

          {/* Role */}
          <div className="flex items-center gap-4 mb-8" style={t(0.45)}>
            <div className="h-px w-12 bg-[#f0a090] opacity-70" />
            <span className="text-[#f0a090] uppercase tracking-[0.22em] text-xs" style={{ fontFamily: "var(--font-outfit)" }}>
              Front-End Developer
            </span>
          </div>

          {/* Tagline */}
          <p
            className="text-[#7a7577] text-lg max-w-xl leading-relaxed mb-12"
            style={{ fontFamily: "var(--font-outfit)", fontWeight: 300, ...t(0.6) }}
          >
            Building interactive, responsive web experiences with React &amp; modern JavaScript.
            Passionate about interfaces that are both beautiful and functional.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-14" style={t(0.75)}>
            <a href="#projects" className="btn-primary">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              View Projects
            </a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </div>

          {/* Contact links */}
          <div className="flex flex-wrap gap-6" style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.9s ease 0.9s" }}>
            {[
              { href: "mailto:manishardevadiga@gmail.com", label: "manishardevadiga@gmail.com", icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
              { href: "tel:9606427763", label: "9606427763", icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.73h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/></svg> },
              { href: "https://linkedin.com/in/maneesha-devadiga", label: "LinkedIn", icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 text-[#7a7577] hover:text-[#f0a090] transition-colors"
                style={{ fontFamily: "var(--font-outfit)", fontSize: "0.8rem" }}
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25">
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#7a7577]" style={{ fontFamily: "var(--font-outfit)" }}>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#7a7577] to-transparent" />
      </div>
    </section>
  );
}
