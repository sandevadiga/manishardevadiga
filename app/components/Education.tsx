"use client";

import { useEffect, useRef } from "react";

interface EduItem {
  degree: string;
  subject?: string;
  institution: string;
  period: string;
  type: string;
  accent: "rose" | "teal";
}

const education: EduItem[] = [
  {
    degree: "Bachelor of Computer Applications",
    institution: "SDM College Ujire",
    period: "2019 – 2022",
    type: "Graduation",
    accent: "rose",
  },
  {
    degree: "Pre-University Certificate",
    subject: "Commerce",
    institution: "SDM PU College Ujire",
    period: "2017 – 2019",
    type: "Pre-University",
    accent: "teal",
  },
];

export default function Education() {
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
    <section id="education" ref={ref} className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-3"><span className="section-label">Education</span></div>
        <h2 className="reveal text-5xl md:text-6xl leading-tight mb-16" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}>
          Academic <em className="grad-rose" style={{ fontWeight: 400 }}>foundation</em>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
          {education.map((edu, i) => (
            <div key={i} className={`reveal glass rounded-2xl p-8 card-hover delay-${i + 1}`}>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: edu.accent === "rose" ? "rgba(240,160,144,0.1)" : "rgba(109,213,202,0.1)",
                  border: `1px solid ${edu.accent === "rose" ? "rgba(240,160,144,0.2)" : "rgba(109,213,202,0.2)"}`,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={edu.accent === "rose" ? "#f0a090" : "#6dd5ca"} strokeWidth="1.5">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>

              <span className={`tag mb-4 inline-block ${edu.accent === "rose" ? "tag-rose" : "tag-teal"}`}>{edu.type}</span>

              <h3 className="text-[#ede8e3] text-xl leading-tight mb-2" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}>
                {edu.degree}
                {edu.subject && <span className="text-[#7a7577]" style={{ fontSize: "0.9em" }}> ({edu.subject})</span>}
              </h3>

              <p className={`text-sm mb-4 ${edu.accent === "rose" ? "text-[#f0a090]" : "text-[#6dd5ca]"}`} style={{ fontFamily: "var(--font-outfit)" }}>
                {edu.institution}
              </p>

              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7a7577" strokeWidth="1.5">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span className="text-[#7a7577] text-xs" style={{ fontFamily: "var(--font-outfit)" }}>{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
