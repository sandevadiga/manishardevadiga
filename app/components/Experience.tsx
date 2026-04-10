"use client";

import { useEffect, useRef } from "react";

const jobs = [
  {
    title: "Trainee IT Manager",
    company: "SKDRDP",
    location: "Mysore",
    period: "Sep 2023 – Apr 2024",
    type: "Full-time",
    bullets: [
      "Troubleshooting software and hardware issues",
      "System upgrades, data security, and IT training",
      "Managed IT infrastructure and supported daily technical operations",
    ],
    accent: "rose",
  },
  {
    title: "Data Entry Assistant",
    company: "SKDRDP",
    location: "Dharmasthala",
    period: "Feb 2023 – Aug 2024",
    type: "Project-Based",
    bullets: [
      "Accurate data entry for loan applications",
      "Used Excel and admin panels for record management",
    ],
    accent: "teal",
  },
];

const volunteer = [
  { title: "Health Card Drive", desc: "Generated government-coordinated patient data" },
  { title: "COVID-19 Vaccination", desc: "Registered patients and issued health cards" },
];

const CalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7a7577" strokeWidth="1.5">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

export default function Experience() {
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
    <section id="experience" ref={ref} className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-3"><span className="section-label">Experience</span></div>
        <h2 className="reveal text-5xl md:text-6xl leading-tight mb-16" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}>
          Professional <em className="grad-rose" style={{ fontWeight: 400 }}>journey</em>
        </h2>

        {/* Work experience */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {jobs.map((job, i) => (
            <div key={i} className={`reveal glass rounded-2xl p-8 card-hover delay-${i + 1}`}>
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-[#ede8e3] mb-1" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500, fontSize: "1.35rem" }}>
                    {job.title}
                  </h3>
                  <p className={`text-sm ${job.accent === "rose" ? "text-[#f0a090]" : "text-[#6dd5ca]"}`} style={{ fontFamily: "var(--font-outfit)" }}>
                    {job.company}, {job.location}
                  </p>
                </div>
                <span className={`tag flex-shrink-0 ${job.accent === "rose" ? "tag-rose" : "tag-teal"}`}>{job.type}</span>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <CalIcon />
                <span className="text-[#7a7577] text-xs" style={{ fontFamily: "var(--font-outfit)" }}>{job.period}</span>
              </div>

              <ul className="space-y-3">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${job.accent === "rose" ? "bg-[#f0a090]" : "bg-[#6dd5ca]"}`} />
                    <span className="text-[#7a7577] text-sm leading-relaxed" style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Training */}
        <div className="reveal mb-3"><span className="section-label">Professional Training</span></div>
        <div className="reveal glass rounded-2xl p-8 mb-16 card-hover delay-1">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-[#ede8e3] text-2xl mb-1" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}>
                MERN Full Stack Developer
              </h3>
              <p className="text-[#f0a090] text-sm" style={{ fontFamily: "var(--font-outfit)" }}>
                Jspiders — Java Development Training Institute, Bangalore
              </p>
            </div>
            <span className="tag tag-teal flex-shrink-0">2025/08 — Present</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Front-End Development with HTML, CSS, JavaScript & React",
              "Responsive & interactive web pages using modern UI practices",
              "JavaScript ES6+, DOM manipulation & event handling",
              "React components, props, state, and hooks for reusable UI",
              "Basic Node.js & integrating front-end with APIs",
              "Quick learner, eager to contribute to real-world projects",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#6dd5ca] mt-1.5 flex-shrink-0" />
                <span className="text-[#7a7577] text-sm" style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteer */}
        <div className="reveal mb-3"><span className="section-label">Volunteer Experience</span></div>
        <div className="grid sm:grid-cols-2 gap-4">
          {volunteer.map((v, i) => (
            <div key={i} className={`reveal glass rounded-xl p-5 card-hover delay-${i + 1}`}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(212,149,106,0.1)", border: "1px solid rgba(212,149,106,0.2)" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d4956a" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </div>
                <h4 className="text-[#d4956a] text-sm font-medium" style={{ fontFamily: "var(--font-outfit)" }}>{v.title}</h4>
              </div>
              <p className="text-[#7a7577] text-sm" style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
