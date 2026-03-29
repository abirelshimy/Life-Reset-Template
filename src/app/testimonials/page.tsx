import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Life Reset",
  description:
    "Read real stories of transformation from Life Reset coaching clients. See how they gained clarity, rebuilt confidence, and reset their lives.",
};

const testimonials = [
  {
    quote:
      "Before coaching, I was running on autopilot — successful by everyone else's standards but completely disconnected from my own happiness. Now I make decisions with clarity and confidence I didn't know I had.",
    name: "Sarah M.",
    role: "Marketing Director",
    highlight: "From burnout to breakthrough",
  },
  {
    quote:
      "I came in thinking I needed to fix my career. What I actually needed was to reconnect with myself. Life Reset gave me the space and tools to do that, and everything else fell into place.",
    name: "James K.",
    role: "Tech Entrepreneur",
    highlight: "Found purpose beyond productivity",
  },
  {
    quote:
      "For the first time in years, I wake up excited about my life. The coaching wasn't just about setting goals — it was about understanding why I kept holding myself back. That awareness changed everything.",
    name: "Emily R.",
    role: "Healthcare Professional",
    highlight: "From self-doubt to self-trust",
  },
  {
    quote:
      "I was terrified of making the wrong move in my career transition. My coach helped me see that the only wrong move was staying stuck. Six months later, I'm in a role that lights me up every day.",
    name: "Michael T.",
    role: "Former Corporate Lawyer",
    highlight: "Successful career pivot",
  },
  {
    quote:
      "The combination of practical strategy and deeper mindset work is what sets this apart. I've worked with other coaches who only did one or the other. This was the first time I felt both challenged and supported.",
    name: "Priya S.",
    role: "Senior Product Manager",
    highlight: "Strategy meets soul",
  },
  {
    quote:
      "I didn't think coaching was for me — I'm a pretty private person. But the safe, judgment-free space made it easy to open up. That vulnerability became my superpower.",
    name: "David L.",
    role: "Financial Advisor",
    highlight: "Skeptic turned advocate",
  },
  {
    quote:
      "After my divorce, I felt like I'd lost my identity. Through coaching, I didn't just find myself again — I found a better, more authentic version of who I always wanted to be.",
    name: "Rachel W.",
    role: "Teacher & Mother of Two",
    highlight: "Rebuilt from the ground up",
  },
  {
    quote:
      "The ROI on coaching isn't just professional — it's personal. My relationships improved, my health improved, and for the first time, I felt like I was actually living instead of just surviving.",
    name: "Alex N.",
    role: "Startup Founder",
    highlight: "Transformation across all areas",
  },
];

const transformations = [
  {
    before: "Overwhelmed executive working 70-hour weeks with no boundaries",
    after:
      "Confident leader working smarter with clear priorities and protected personal time",
    name: "Corporate Client",
    timeline: "6 months",
  },
  {
    before:
      "Stuck in a 'golden handcuffs' job — high pay, zero fulfillment",
    after:
      "Transitioned to a purpose-driven career with renewed passion and maintained financial stability",
    name: "Career Changer",
    timeline: "4 months",
  },
  {
    before:
      "People-pleaser who constantly said yes at the expense of their own well-being",
    after:
      "Empowered individual with healthy boundaries, deeper relationships, and a sense of self-worth",
    name: "Personal Growth Client",
    timeline: "3 months",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 40% 50%, rgba(200,152,94,0.4), transparent 50%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
              Client Stories
            </p>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
              Real People.
              <br />
              Real Transformations.
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              These are the stories of individuals who chose to invest in
              themselves &mdash; and never looked back.
            </p>
          </AnimateOnScroll>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path
              d="M0 60V0c240 40 480 60 720 60S1200 40 1440 0v60H0z"
              fill="var(--color-cream)"
            />
          </svg>
        </div>
      </section>

      {/* TESTIMONIALS GRID */}
      <section className="py-20 md:py-28 bg-cream relative noise-overlay">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <AnimateOnScroll
                key={t.name}
                animation="animate-fade-in-up"
                delay={(i % 2) * 150}
              >
                <div className="bg-white rounded-2xl p-8 md:p-10 h-full flex flex-col border border-cream-dark hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 group">
                  {/* Highlight tag */}
                  <span className="inline-block self-start px-3 py-1 bg-gold/5 text-gold text-xs uppercase tracking-wider rounded-full mb-5">
                    {t.highlight}
                  </span>

                  {/* Quote */}
                  <div className="flex-1">
                    <svg
                      className="w-7 h-7 text-gold/20 mb-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-charcoal leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  {/* Attribution */}
                  <div className="mt-6 pt-6 border-t border-cream-dark flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center">
                      <span className="font-[var(--font-heading)] text-navy text-sm">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-[var(--font-heading)] text-navy text-sm">
                        {t.name}
                      </p>
                      <p className="text-xs text-charcoal-light">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER TRANSFORMATIONS */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="Transformations"
              title="The Before & After"
              subtitle="Coaching doesn't change who you are — it reveals who you've always been."
            />
          </AnimateOnScroll>

          <div className="mt-16 space-y-8">
            {transformations.map((t, i) => (
              <AnimateOnScroll
                key={i}
                animation="animate-fade-in-up"
                delay={i * 150}
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-cream-dark hover:shadow-lg hover:shadow-gold/5 transition-all duration-500">
                  <div className="grid md:grid-cols-2">
                    {/* Before */}
                    <div className="p-8 md:p-10 bg-navy/[0.02]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-charcoal/10 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-charcoal-light"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18 18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                        <span className="text-xs uppercase tracking-wider text-charcoal-light font-medium">
                          Before
                        </span>
                      </div>
                      <p className="text-charcoal-light leading-relaxed text-sm">
                        {t.before}
                      </p>
                    </div>
                    {/* After */}
                    <div className="p-8 md:p-10 bg-gold/[0.03]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
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
                        <span className="text-xs uppercase tracking-wider text-gold font-medium">
                          After &middot; {t.timeline}
                        </span>
                      </div>
                      <p className="text-charcoal leading-relaxed text-sm">
                        {t.after}
                      </p>
                    </div>
                  </div>
                  <div className="px-8 py-3 bg-cream-dark/30 border-t border-cream-dark">
                    <p className="text-xs text-charcoal-light">
                      {t.name}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
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
              Your Transformation Starts Here
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Every story above started with a single decision: to invest in
              themselves. Yours could be next.
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-4 bg-gold text-white uppercase tracking-wider text-sm rounded-full hover:bg-gold-dark hover:shadow-2xl hover:shadow-gold/30 transition-all duration-500 hover:-translate-y-1"
            >
              Start Your Story
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
