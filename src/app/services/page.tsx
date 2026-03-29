import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Life Reset",
  description:
    "Explore Life Reset coaching programs — 1:1 coaching, group programs, and VIP intensives designed to help you gain clarity and rebuild confidence.",
};

const outcomes = [
  "A clear vision for your life and career",
  "Unshakable confidence in your decisions",
  "Healthy boundaries that protect your energy",
  "A daily routine that fuels — not drains — you",
  "Deep alignment between your values and your actions",
  "Tools and strategies for lasting transformation",
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 60% 30%, rgba(200,152,94,0.4), transparent 50%), radial-gradient(circle at 20% 70%, rgba(138,154,123,0.3), transparent 50%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
              Coaching Programs
            </p>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
              Ways to Work
              <br />
              Together
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re ready for deep, transformative work or just
              need a powerful jumpstart, there&apos;s a path for you.
            </p>
          </AnimateOnScroll>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path
              d="M0 60V0c240 40 480 60 720 60S1200 40 1440 0v60H0z"
              fill="var(--color-warm-white)"
            />
          </svg>
        </div>
      </section>

      {/* 1:1 COACHING - Featured */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll>
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-navy/5 border border-cream-dark">
              <div className="grid md:grid-cols-2">
                {/* Left - Visual */}
                <div className="bg-gradient-to-br from-navy to-navy-light p-10 md:p-14 flex flex-col justify-between relative overflow-hidden min-h-[400px]">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-sage/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                  <div className="relative z-10">
                    <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-xs uppercase tracking-wider rounded-full mb-6">
                      Most Popular
                    </span>
                    <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-white leading-tight">
                      1:1 Coaching
                    </h2>
                    <p className="text-white/60 mt-3">
                      Deep, personalized transformation
                    </p>
                  </div>

                  <div className="relative z-10 mt-8">
                    <div className="flex items-baseline gap-2">
                      <span className="font-[var(--font-heading)] text-4xl text-white">
                        $XXX
                      </span>
                      <span className="text-white/40 text-sm">/month</span>
                    </div>
                    <p className="text-white/40 text-sm mt-1">
                      [3-month or 6-month commitment]
                    </p>
                  </div>
                </div>

                {/* Right - Details */}
                <div className="p-10 md:p-14">
                  <h3 className="font-[var(--font-heading)] text-xl text-navy mb-6">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Bi-weekly 60-minute coaching sessions",
                      "Personalized action plans between sessions",
                      "Email/voice memo support between calls",
                      "Custom resources, exercises & frameworks",
                      "Session recordings for your reference",
                      "Accountability check-ins",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-gold"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                        </span>
                        <span className="text-charcoal text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-block w-full text-center px-8 py-4 bg-gold text-white uppercase tracking-wider text-sm rounded-full hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20 transition-all duration-500"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* OTHER OFFERINGS */}
      <section className="py-20 md:py-28 bg-cream relative noise-overlay">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="More Options"
              title="Other Ways to Get Started"
              subtitle="Not sure about 1:1 coaching yet? These options might be the perfect entry point."
            />
          </AnimateOnScroll>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {/* Group Program */}
            <AnimateOnScroll animation="animate-fade-in-up" delay={0}>
              <div className="bg-white rounded-2xl p-10 h-full border border-cream-dark relative overflow-hidden group hover:shadow-lg hover:shadow-gold/5 transition-all duration-500">
                <span className="inline-block px-3 py-1 bg-sage/10 text-sage text-xs uppercase tracking-wider rounded-full mb-6">
                  Coming Soon
                </span>
                <h3 className="font-[var(--font-heading)] text-2xl text-navy mb-3">
                  Group Coaching Program
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed mb-6">
                  A supportive small-group experience where you&apos;ll work
                  through transformation alongside other driven individuals.
                  Combines live coaching calls, community support, and
                  self-paced modules.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "Weekly live group coaching calls",
                    "Private community access",
                    "Guided curriculum & workbooks",
                    "Peer accountability partners",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                      <span className="text-charcoal-light">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-charcoal-light italic">
                  Join the waitlist to be first to know when enrollment opens.
                </p>
              </div>
            </AnimateOnScroll>

            {/* VIP Intensive */}
            <AnimateOnScroll animation="animate-fade-in-up" delay={150}>
              <div className="bg-white rounded-2xl p-10 h-full border border-cream-dark relative overflow-hidden group hover:shadow-lg hover:shadow-gold/5 transition-all duration-500">
                <span className="inline-block px-3 py-1 bg-sage/10 text-sage text-xs uppercase tracking-wider rounded-full mb-6">
                  Coming Soon
                </span>
                <h3 className="font-[var(--font-heading)] text-2xl text-navy mb-3">
                  VIP Intensive Day
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed mb-6">
                  A full day dedicated entirely to you. We&apos;ll deep-dive
                  into your biggest challenge and emerge with a clear,
                  actionable plan for your next chapter.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "Full-day private session (6 hours)",
                    "Pre-session deep-dive questionnaire",
                    "Custom strategic roadmap",
                    "30-day follow-up support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                      <span className="text-charcoal-light">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-charcoal-light italic">
                  Perfect for those who want big breakthroughs in a short time.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="Results"
              title="What You Can Expect"
              subtitle="Coaching isn't just about feeling better — it's about building a life that works better."
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="mt-14 grid sm:grid-cols-2 gap-5">
              {outcomes.map((outcome, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-cream rounded-xl px-6 py-5 border border-cream-dark"
                >
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <span className="text-charcoal text-sm">{outcome}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(200,152,94,0.4), transparent 50%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-white leading-tight mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Not sure which option is right for you? Let&apos;s chat. A
              discovery call is the perfect way to explore what coaching could
              look like for your unique situation.
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-4 bg-gold text-white uppercase tracking-wider text-sm rounded-full hover:bg-gold-dark hover:shadow-2xl hover:shadow-gold/30 transition-all duration-500 hover:-translate-y-1"
            >
              Book Your Free Consultation
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
