"use client";

import { useState, type FormEvent } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend/API
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 70% 40%, rgba(200,152,94,0.4), transparent 50%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
              Get in Touch
            </p>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
              Let&apos;s Start a
              <br />
              Conversation
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to take the first step? Fill out the form below and
              I&apos;ll be in touch within 24 hours.
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

      {/* CONTACT FORM + INFO */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            {/* Form */}
            <AnimateOnScroll
              animation="animate-slide-in-left"
              className="md:col-span-3"
            >
              {submitted ? (
                <div className="bg-white rounded-2xl p-12 border border-cream-dark text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-sage/10 flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-sage"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h3 className="font-[var(--font-heading)] text-2xl text-navy mb-3">
                    Message Received!
                  </h3>
                  <p className="text-charcoal-light leading-relaxed">
                    Thank you for reaching out, {formData.name.split(" ")[0] || "friend"}. I&apos;ll
                    review your message and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 md:p-10 border border-cream-dark space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-charcoal font-medium mb-2"
                    >
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-charcoal font-medium mb-2"
                    >
                      Email Address <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all duration-300"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm text-charcoal font-medium mb-2"
                    >
                      Phone Number{" "}
                      <span className="text-charcoal-light text-xs">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all duration-300"
                      placeholder="(555) 000-0000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-charcoal font-medium mb-2"
                    >
                      Your Message <span className="text-gold">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all duration-300 resize-none"
                      placeholder="Tell me a bit about what you're going through and what you're hoping to achieve..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gold text-white uppercase tracking-wider text-sm rounded-full hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20 transition-all duration-500 hover:-translate-y-0.5"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-charcoal-light text-center">
                    I typically respond within 24 hours. Your information is kept
                    strictly confidential.
                  </p>
                </form>
              )}
            </AnimateOnScroll>

            {/* Sidebar Info */}
            <AnimateOnScroll
              animation="animate-slide-in-right"
              delay={200}
              className="md:col-span-2"
            >
              <div className="space-y-8">
                {/* What to Expect */}
                <div className="bg-cream rounded-2xl p-8 border border-cream-dark">
                  <h3 className="font-[var(--font-heading)] text-xl text-navy mb-4">
                    What to Expect
                  </h3>
                  <ol className="space-y-4">
                    {[
                      {
                        step: "1",
                        title: "Send a message",
                        desc: "Share a bit about where you are and where you'd like to be.",
                      },
                      {
                        step: "2",
                        title: "I'll reach out",
                        desc: "Within 24 hours, I'll respond to schedule a free discovery call.",
                      },
                      {
                        step: "3",
                        title: "Discovery call",
                        desc: "A 30-minute conversation to see if we're a good fit — no pressure, no sales pitch.",
                      },
                      {
                        step: "4",
                        title: "Begin your reset",
                        desc: "If we're aligned, we'll map out your coaching journey together.",
                      },
                    ].map((item) => (
                      <li key={item.step} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="font-[var(--font-heading)] text-gold text-sm font-bold">
                            {item.step}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-charcoal text-sm">
                            {item.title}
                          </p>
                          <p className="text-charcoal-light text-xs leading-relaxed mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-navy"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-charcoal-light uppercase tracking-wider">
                        Email
                      </p>
                      <a
                        href="mailto:hello@lifereset.com"
                        className="text-charcoal text-sm hover:text-gold transition-colors duration-300"
                      >
                        hello@lifereset.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-navy"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-charcoal-light uppercase tracking-wider">
                        Location
                      </p>
                      <p className="text-charcoal text-sm">
                        California, USA (Virtual sessions available)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  {[
                    {
                      label: "Instagram",
                      svg: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                    },
                    {
                      label: "LinkedIn",
                      svg: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-charcoal hover:bg-gold/10 hover:text-gold transition-all duration-300"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={social.svg} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
