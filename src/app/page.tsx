import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";

const pillars = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
    title: "Clarity",
    description:
      "Cut through the noise and rediscover what truly matters to you. Gain a clear vision for your life and career.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    title: "Confidence",
    description:
      "Rebuild the self-trust that life may have worn down. Step into your power with renewed belief in yourself.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: "Alignment",
    description:
      "Design a life that reflects your deepest values. Create harmony between who you are and how you live.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: "Growth",
    description:
      "Move beyond surviving into thriving. Build sustainable habits and mindsets that fuel lifelong transformation.",
  },
];

const testimonials = [
  {
    quote:
      "Working with Life Reset completely changed how I approach my career and personal life. I went from feeling stuck to feeling unstoppable.",
    name: "Sarah M.",
    role: "Marketing Director",
  },
  {
    quote:
      "I finally feel like I'm living on my own terms. The clarity I gained through coaching was worth every moment.",
    name: "James K.",
    role: "Tech Entrepreneur",
  },
  {
    quote:
      "For the first time in years, I wake up excited about my life. This coaching gave me the tools to make real, lasting change.",
    name: "Emily R.",
    role: "Healthcare Professional",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/cover-photo.png"
            alt="Life coaching background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80" />
          {/* Bottom vignette */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy to-transparent" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gold/3 blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="animate-fade-in text-gold uppercase tracking-[0.3em] text-sm mb-6">
            Life Coaching &middot; California
          </p>
          <h1 className="animate-fade-in-up font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-8">
            Gain Clarity.
            <br />
            Rebuild Confidence.
            <br />
            <span className="text-gradient-gold">Reset Your Life.</span>
          </h1>
          <p className="animate-fade-in-up delay-200 text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Helping driven individuals move past burnout, find direction, and
            create a life aligned with their deepest values.
          </p>
          <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 bg-gold text-white uppercase tracking-wider text-sm rounded-full hover:bg-gold-dark hover:shadow-2xl hover:shadow-gold/30 transition-all duration-500 hover:-translate-y-1"
            >
              Book Your Free Discovery Call
            </Link>
            <Link
              href="/about"
              className="px-10 py-4 border border-white/30 text-white uppercase tracking-wider text-sm rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-500"
            >
              Learn More
            </Link>
          </div>
        </div>

      </section>

      {/* ===== PROBLEM → SOLUTION ===== */}
      <section className="py-24 md:py-32 bg-warm-white relative noise-overlay">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="animate-slide-in-left">
              <div className="space-y-6">
                <p className="text-gold uppercase tracking-[0.2em] text-sm">
                  Sound Familiar?
                </p>
                <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-navy leading-tight">
                  You&apos;re successful on paper, but something feels off.
                </h2>
                <div className="space-y-4 text-charcoal-light leading-relaxed">
                  <p>
                    You&apos;ve done everything right &mdash; the career, the
                    accomplishments, the milestones. But lately, you wake up
                    feeling drained, disconnected, or wondering{" "}
                    <em>&ldquo;Is this really it?&rdquo;</em>
                  </p>
                  <p>
                    You&apos;re not broken. You&apos;re just ready for a reset.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-slide-in-right" delay={200}>
              <div className="bg-cream rounded-2xl p-10 border border-cream-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h3 className="font-[var(--font-heading)] text-2xl text-navy mb-6 relative z-10">
                  What if you could&hellip;
                </h3>
                <ul className="space-y-4 relative z-10">
                  {[
                    "Wake up with genuine excitement for your day",
                    "Make decisions with unwavering confidence",
                    "Set boundaries without guilt",
                    "Feel deeply aligned with your purpose",
                    "Build a life that energizes instead of drains",
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
                      <span className="text-charcoal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== COACHING PILLARS ===== */}
      <section className="py-24 md:py-32 bg-navy relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sage/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="The Framework"
              title="Four Pillars of Transformation"
              subtitle="A proven approach to help you move from stuck to unstoppable."
              light
            />
          </AnimateOnScroll>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <AnimateOnScroll
                key={pillar.title}
                animation="animate-fade-in-up"
                delay={i * 150}
              >
                <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold/20 transition-colors duration-500">
                    {pillar.icon}
                  </div>
                  <h3 className="font-[var(--font-heading)] text-xl text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS PREVIEW ===== */}
      <section className="py-24 md:py-32 bg-cream relative noise-overlay">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="Client Stories"
              title="Real People. Real Transformations."
              subtitle="Hear from individuals who took the leap and never looked back."
            />
          </AnimateOnScroll>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimateOnScroll
                key={t.name}
                animation="animate-fade-in-up"
                delay={i * 150}
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 h-full flex flex-col">
                  {/* Quote icon */}
                  <svg
                    className="w-8 h-8 text-gold/30 mb-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-charcoal leading-relaxed flex-1 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 pt-6 border-t border-cream-dark">
                    <p className="font-[var(--font-heading)] text-navy">
                      {t.name}
                    </p>
                    <p className="text-sm text-charcoal-light">{t.role}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark uppercase tracking-wider text-sm transition-colors duration-300 group"
            >
              Read More Stories
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="py-24 md:py-32 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="animate-slide-in-left">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl bg-cream overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy/10 to-gold/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-3 p-8">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gold/10 flex items-center justify-center">
                        <span className="font-[var(--font-heading)] text-3xl text-gold">
                          LR
                        </span>
                      </div>
                      <p className="text-charcoal-light text-sm">
                        [Your Photo Here]
                      </p>
                    </div>
                  </div>
                </div>
                {/* Decorative offset border */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/20 rounded-2xl -z-10" />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-slide-in-right" delay={200}>
              <div className="space-y-6">
                <p className="text-gold uppercase tracking-[0.2em] text-sm">
                  About Me
                </p>
                <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-navy leading-tight">
                  Hi, I&apos;m [Your Name].
                  <br />I help people like you find their way back to
                  themselves.
                </h2>
                <p className="text-charcoal-light leading-relaxed">
                  I know what it feels like to have everything figured out on the
                  outside while feeling completely lost inside. After my own
                  life-changing reset, I dedicated myself to helping others
                  navigate the same transformation &mdash; with less struggle
                  and more support.
                </p>
                <p className="text-charcoal-light leading-relaxed">
                  My approach blends practical strategy with deep mindset work,
                  creating lasting change that goes far beyond surface-level
                  goals.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-dark uppercase tracking-wider text-sm transition-colors duration-300 group mt-2"
                >
                  My Full Story
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(200,152,94,0.3), transparent 50%), radial-gradient(circle at 80% 50%, rgba(138,154,123,0.2), transparent 50%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-6">
              Your Next Chapter Starts Here
            </p>
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
              Ready to Reset Your Life?
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Book a free, no-pressure discovery call. Let&apos;s talk about
              where you are, where you want to be, and how coaching can bridge
              the gap.
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-4 bg-gold text-white uppercase tracking-wider text-sm rounded-full hover:bg-gold-dark hover:shadow-2xl hover:shadow-gold/30 transition-all duration-500 hover:-translate-y-1"
            >
              Book Your Free Call
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
