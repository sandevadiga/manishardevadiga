"use client";

import { useEffect, useRef } from "react";

const techSkills = [
  { name: "HTML5", level: 85, color: "#f0a090" },
  { name: "CSS3", level: 80, color: "#f0a090" },
  { name: "JavaScript (ES6+)", level: 75, color: "#d4956a" },
  { name: "React.js", level: 70, color: "#d4956a" },
  { name: "Node.js", level: 55, color: "#6dd5ca" },
];

const tools = [
  "DOM Manipulation", "Event Handling", "React Hooks", "React Router",
  "Context API", "JWT Auth", "REST APIs", "Axios", "MongoDB",
  "Express.js", "Nodemailer", "Git",
];

const softSkills = [
  "Team Player", "Work Ethic", "Time Management",
  "Adaptability", "Honesty", "Good Listener", "Quick Learner",
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const revObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => revObs.observe(el));

    const barObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll<HTMLElement>(".skill-bar-fill").forEach((bar) => {
              const level = bar.getAttribute("data-level") || "0";
              bar.style.width = level + "%";
              bar.style.transition = "width 1.5s cubic-bezier(0.16, 1, 0.3, 1)";
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    if (barsRef.current) barObs.observe(barsRef.current);

    return () => { revObs.disconnect(); barObs.disconnect(); };
  }, []);

  return (
    <section id="skills" ref={ref} className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-3"><span className="section-label">Skills</span></div>
        <h2 className="reveal text-5xl md:text-6xl leading-tight mb-16" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}>
          What I <em className="grad-rose" style={{ fontWeight: 400 }}>bring</em> to the table
        </h2>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Skill bars */}
          <div ref={barsRef}>
            <p className="reveal text-[#f0a090] text-xs uppercase tracking-widest mb-8" style={{ fontFamily: "var(--font-outfit)" }}>
              Technical Proficiency
            </p>
            <div className="space-y-7">
              {techSkills.map((sk, i) => (
                <div key={sk.name} className={`reveal delay-${i + 1}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#ede8e3] text-sm" style={{ fontFamily: "var(--font-outfit)" }}>{sk.name}</span>
                    <span className="text-[#7a7577] text-xs" style={{ fontFamily: "var(--font-outfit)" }}>{sk.level}%</span>
                  </div>
                  <div className="h-[3px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div
                      className="skill-bar-fill"
                      data-level={sk.level}
                      style={{ background: `linear-gradient(90deg, ${sk.color}, ${sk.color}99)` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools + soft skills */}
          <div>
            <p className="reveal text-[#6dd5ca] text-xs uppercase tracking-widest mb-6" style={{ fontFamily: "var(--font-outfit)" }}>
              Tools &amp; Technologies
            </p>
            <div className="reveal delay-1 flex flex-wrap gap-2 mb-12">
              {tools.map((t) => <span key={t} className="tag tag-teal">{t}</span>)}
            </div>

            <p className="reveal text-[#d4956a] text-xs uppercase tracking-widest mb-6" style={{ fontFamily: "var(--font-outfit)" }}>
              Soft Skills
            </p>
            <div className="reveal delay-2 flex flex-wrap gap-2">
              {softSkills.map((s) => <span key={s} className="tag tag-gold">{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
