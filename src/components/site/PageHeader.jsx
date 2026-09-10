export function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="gradient-warm border-b border-border/70">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] md:text-7xl">{title}</h1>
        {description && (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
