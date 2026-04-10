"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "2", label: "Projects Built" },
  { value: "5+", label: "Technologies" },
  { value: "BCA", label: "Degree Holder" },
  { value: "MERN", label: "Stack" },
];

export default function About() {
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
    <section id="about" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full pointer-events-none" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(240,160,144,0.06), transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-3"><span className="section-label">About Me</span></div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="reveal text-5xl md:text-6xl leading-tight mb-8" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}>
              Crafting digital{" "}
              <em className="grad-rose" style={{ fontWeight: 400 }}>experiences</em>
              <br />with purpose
            </h2>

            <p className="reveal text-[#7a7577] leading-relaxed mb-6 delay-1" style={{ fontFamily: "var(--font-outfit)", fontWeight: 300, fontSize: "1.05rem" }}>
              I&apos;m a Front-End Developer fresher with hands-on training in modern web technologies. My
              journey spans HTML, CSS, JavaScript, React and the full MERN stack — built through intensive
              training at Jspiders, Bangalore.
            </p>

            <p className="reveal text-[#7a7577] leading-relaxed mb-10 delay-2" style={{ fontFamily: "var(--font-outfit)", fontWeight: 300, fontSize: "1.05rem" }}>
              I&apos;m passionate about building interfaces that are not only functional but beautifully
              crafted — combining clean code with thoughtful design to create experiences users love.
            </p>

            <div className="reveal delay-3">
              <a href="#contact" className="btn-primary">Let&apos;s Work Together</a>
            </div>
          </div>

          <div className="space-y-4">
            {/* Objective card */}
            <div className="reveal glass rounded-2xl p-6 card-hover delay-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(240,160,144,0.1)", border: "1px solid rgba(240,160,144,0.2)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f0a090" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                </div>
                <span className="text-[#f0a090] text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-outfit)" }}>Career Objective</span>
              </div>
              <p className="text-[#7a7577] leading-relaxed text-sm" style={{ fontFamily: "var(--font-outfit)", fontWeight: 300 }}>
                Eager to contribute to building interactive, responsive, and scalable web applications in a
                collaborative team environment while continuously enhancing technical skills.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={i} className={`reveal glass rounded-2xl p-5 card-hover delay-${i + 3}`}>
                  <p className="grad-rose text-3xl mb-1" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}>{s.value}</p>
                  <p className="text-[#7a7577] text-xs uppercase tracking-wide" style={{ fontFamily: "var(--font-outfit)" }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* Training badge */}
            <div className="reveal glass rounded-2xl p-5 delay-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-[#6dd5ca]" />
                <span className="text-[#6dd5ca] text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-outfit)" }}>Currently Training</span>
              </div>
              <p className="text-[#ede8e3] text-sm" style={{ fontFamily: "var(--font-outfit)" }}>
                MERN Full Stack at <span className="text-[#f0a090]">Jspiders, Bangalore</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
