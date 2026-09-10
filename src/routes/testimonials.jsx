import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { testimonials } from "@/data/salon";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Reviews & Testimonials — Maison Lume Salon" },
      {
        name: "description",
        content:
          "Real reviews from Maison Lume guests on colour, fades, bridal makeup, facials and massage. Rated 4.9 across 1,200+ visits.",
      },
      { property: "og:title", content: "Client Reviews & Testimonials — Maison Lume Salon" },
      {
        property: "og:description",
        content: "What our guests say after their cut, colour, facial or shave.",
      },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHeader
        eyebrow="Guest book"
        title="Rated 4.9 by 1,200 guests"
        description="Unedited words from people who sat in our chairs — the good, and the specific."
      />

      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="card-soft flex flex-col p-8">
              <Quote className="text-gold" size={26} />
              <p className="mt-5 flex-1 font-display text-xl leading-relaxed">“{t.quote}”</p>
              <div className="mt-6 flex gap-1 text-gold">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <footer className="mt-3 text-sm text-muted-foreground">
                <span className="text-foreground">{t.name}</span> · {t.service}
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl">Come write your own.</h2>
          <Link to="/booking" className="btn-clay mt-7">
            Book an appointment
          </Link>
        </div>
      </div>
    </>
  );
}
