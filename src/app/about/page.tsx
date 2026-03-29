import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Life Reset",
  description:
    "Learn the story behind Life Reset coaching. Discover our philosophy, who we help, and what makes our approach different.",
};

const values = [
  {
    title: "Authenticity Over Perfection",
    description:
      "Real growth happens when you stop performing and start living. I create a judgment-free space where you can be fully yourself.",
  },
  {
    title: "Practical + Mindset",
    description:
      "Strategy without mindset work won't stick. Mindset work without strategy won't move you forward. We do both.",
  },
  {
    title: "Your Pace, Your Path",
    description:
      "No cookie-cutter programs. Every coaching journey is uniquely designed around your goals, your challenges, and your life.",
  },
];

const credentials = [
  "Certified Life Coach (ICF Accredited)",
  "Mindfulness & Positive Psychology Practitioner",
  "10+ Years Working with High-Achieving Professionals",
  "Specialization in Career Transitions & Burnout Recovery",
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 40%, rgba(200,152,94,0.4), transparent 50%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
              About Life Reset
            </p>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
              The Story Behind
              <br />
              the Reset
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Every reset starts with a moment of courage &mdash; the decision
              that you deserve more than just going through the motions.
            </p>
          </AnimateOnScroll>
        </div>
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path
              d="M0 60V0c240 40 480 60 720 60S1200 40 1440 0v60H0z"
              fill="var(--color-warm-white)"
            />
          </svg>
        </div>
      </section>

      {/* PERSONAL STORY */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-16 items-start">
            {/* Photo placeholder */}
            <AnimateOnScroll
              animation="animate-slide-in-left"
              className="md:col-span-2"
            >
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl bg-cream overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-sage/10 to-gold/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-3">
                        <span className="font-[var(--font-heading)] text-2xl text-gold">
                          LR
                        </span>
                      </div>
                      <p className="text-charcoal-light text-sm">
                        [Your Photo Here]
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-3 -left-3 w-full h-full border-2 border-sage/20 rounded-2xl -z-10" />
              </div>
            </AnimateOnScroll>

            {/* Story */}
            <AnimateOnScroll
              animation="animate-slide-in-right"
              delay={200}
              className="md:col-span-3"
            >
              <div className="space-y-6">
                <p className="text-gold uppercase tracking-[0.2em] text-sm">
                  My Journey
                </p>
                <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-navy leading-tight">
                  I didn&apos;t start as a coach.
                  <br />I started as someone who needed one.
                </h2>
                <div className="space-y-4 text-charcoal-light leading-relaxed">
                  <p>
                    [Your personal story goes here. Share the turning point that
                    led you to coaching. What were you doing before? What
                    happened that changed everything? This is where visitors
                    connect with you on a human level.]
                  </p>
                  <p>
                    After years of climbing a ladder that was leaning against the
                    wrong wall, I finally gave myself permission to ask:{" "}
                    <em>
                      &ldquo;What would my life look like if I actually designed
                      it around what matters to me?&rdquo;
                    </em>
                  </p>
                  <p>
                    That question changed everything. And now, I help others
                    answer it for themselves &mdash; with clarity, confidence,
                    and a concrete plan.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-20 md:py-28 bg-cream relative noise-overlay">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="My Philosophy"
              title="What I Believe"
              subtitle="Coaching isn't about fixing what's broken — it's about unlocking what's already there."
            />
          </AnimateOnScroll>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <AnimateOnScroll
                key={v.title}
                animation="animate-fade-in-up"
                delay={i * 150}
              >
                <div className="bg-white rounded-2xl p-8 h-full border border-cream-dark hover:shadow-lg hover:shadow-gold/5 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                    <span className="font-[var(--font-heading)] text-gold text-lg font-bold">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-heading)] text-xl text-navy mb-3">
                    {v.title}
                  </h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* WHO I HELP */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="animate-slide-in-left">
              <div className="space-y-6">
                <p className="text-gold uppercase tracking-[0.2em] text-sm">
                  Who I Work With
                </p>
                <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-navy leading-tight">
                  This is for you if&hellip;
                </h2>
                <ul className="space-y-4">
                  {[
                    "You're accomplished but feel something is missing",
                    "You're navigating a major life or career transition",
                    "You're tired of playing small or people-pleasing",
                    "You want to lead with purpose, not just productivity",
                    "You're ready to invest in yourself — truly",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      <span className="text-charcoal-light leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-slide-in-right" delay={200}>
              <div className="bg-navy rounded-2xl p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h3 className="font-[var(--font-heading)] text-2xl mb-4 relative z-10">
                  This might not be for you if&hellip;
                </h3>
                <ul className="space-y-3 text-white/70 text-sm relative z-10">
                  {[
                    "You're looking for a quick fix or magic solution",
                    "You're not ready to do the inner work",
                    "You want someone to tell you what to do (I guide, not direct)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-white/30 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-20 md:py-28 bg-cream relative noise-overlay">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="Credentials"
              title="Training & Background"
              subtitle="The knowledge and experience behind the coaching."
            />
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="mt-12 grid sm:grid-cols-2 gap-4">
              {credentials.map((cred, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl px-6 py-5 text-left border border-cream-dark flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-sage"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342"
                      />
                    </svg>
                  </div>
                  <span className="text-charcoal text-sm">{cred}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FUN FACTS */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="Beyond Coaching"
              title="A Few Things About Me"
              subtitle="Because coaching is personal, and so am I."
            />
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {[
                "Morning hiker",
                "Meditation enthusiast",
                "Dog lover",
                "Avid reader",
                "California native",
                "Coffee connoisseur",
                "Journal keeper",
                "Sunset chaser",
              ].map((fact, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5 rounded-full bg-cream border border-cream-dark text-charcoal text-sm hover:border-gold/30 hover:bg-gold/5 transition-all duration-300 cursor-default"
                >
                  {fact}
                </span>
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
                "radial-gradient(circle at 70% 50%, rgba(200,152,94,0.4), transparent 50%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-white leading-tight mb-6">
              Let&apos;s See If We&apos;re a Good Fit
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              I&apos;d love to hear your story. Book a free discovery call and
              let&apos;s explore what&apos;s possible for you.
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-4 bg-gold text-white uppercase tracking-wider text-sm rounded-full hover:bg-gold-dark hover:shadow-2xl hover:shadow-gold/30 transition-all duration-500 hover:-translate-y-1"
            >
              Book a Free Call
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
