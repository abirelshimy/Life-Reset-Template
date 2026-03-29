interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl leading-tight ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/70" : "text-charcoal-light"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`divider-gold mt-6 ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
