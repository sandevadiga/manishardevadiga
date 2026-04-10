"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Software Platform for Areca Trading",
    subtitle: "Shri Devi Supari",
    period: "Jan 2023 – Jun 2023",
    description: "Centralized software solution for inventory and order processing across multiple branches.",
    bullets: [
      "Built centralized software for inventory and order processing",
      "Led front-end development using HTML, CSS & JavaScript",
      "Streamlined coordination across branches",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    accent: "rose",
    num: "01",
  },
  {
    title: "Student Hub",
    subtitle: "Full Stack Web Application",
    period: "2025 — Present",
    description: "A comprehensive learning management platform with role-based access for students and trainers.",
    bullets: [
      "Built with React.js, Node.js, Express & MongoDB",
      "Role-based authentication (Student & Trainer) using JWT",
      "Responsive UI with React Router and Context API",
      "CRUD features for managing student subjects",
      "Trainer dashboard to view all students",
      "OTP-based password reset via Nodemailer & MongoDB TTL",
    ],
    tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Axios"],
    accent: "teal",
    num: "02",
  },
];

export default function Projects() {
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
    <section id="projects" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute bottom-0 left-0 rounded-full pointer-events-none" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(109,213,202,0.05), transparent 70%)", transform: "translate(-30%, 30%)" }} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-3"><span className="section-label">Projects</span></div>
        <h2 className="reveal text-5xl md:text-6xl leading-tight mb-16" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}>
          Things I&apos;ve <em className="grad-rose" style={{ fontWeight: 400 }}>built</em>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className={`reveal glass rounded-2xl overflow-hidden card-hover delay-${i + 1}`}>
              {/* Header */}
              <div
                className="p-7 border-b"
                style={{
                  borderColor: "rgba(255,255,255,0.05)",
                  background: p.accent === "rose"
                    ? "linear-gradient(135deg, rgba(240,160,144,0.06), transparent)"
                    : "linear-gradient(135deg, rgba(109,213,202,0.06), transparent)",
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span
                    className="text-5xl font-bold select-none"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      color: p.accent === "rose" ? "rgba(240,160,144,0.12)" : "rgba(109,213,202,0.12)",
                      lineHeight: 1,
                    }}
                  >
                    {p.num}
                  </span>
                  <span className={`tag flex-shrink-0 ${p.accent === "rose" ? "tag-rose" : "tag-teal"}`}>{p.period}</span>
                </div>

                <h3 className="text-[#ede8e3] text-2xl leading-tight mb-1" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}>
                  {p.title}
                </h3>
                <p className={`text-sm mb-4 ${p.accent === "rose" ? "text-[#f0a090]" : "text-[#6dd5ca]"}`} style={{ fontFamily: "var(--font-outfit)" }}>
                  {p.subtitle}
                </p>
                <p className="text-[#7a7577] text-sm leading-relaxed" style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}>
                  {p.description}
                </p>
              </div>

              {/* Body */}
              <div className="p-7">
                <ul className="space-y-2.5 mb-6">
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${p.accent === "rose" ? "bg-[#f0a090]" : "bg-[#6dd5ca]"}`} />
                      <span className="text-[#7a7577] text-sm leading-relaxed" style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => <span key={t} className={`tag ${p.accent === "rose" ? "tag-rose" : "tag-teal"}`}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
