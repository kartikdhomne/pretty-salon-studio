import { createFileRoute, Link } from "@tanstack/react-router";
import { Scissors, Sparkles, Star, Clock } from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";
import hairImg from "@/assets/service-hair.jpg";
import skinImg from "@/assets/service-skin.jpg";
import groomingImg from "@/assets/service-grooming.jpg";
import { packages, serviceGroups, testimonials, salon } from "@/data/salon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Lume — Unisex Hair, Skin & Grooming Salon" },
      {
        name: "description",
        content:
          "A modern unisex salon in Mumbai for precision cuts, lived-in colour, facials, spa rituals and men's grooming. Book your chair today.",
      },
      { property: "og:title", content: "Maison Lume — Unisex Hair, Skin & Grooming Salon" },
      {
        property: "og:description",
        content:
          "Precision cuts, lived-in colour, facials and barbering in one warm, unhurried studio.",
      },
    ],
  }),
  component: Home,
});

const images = { hair: hairImg, skin: skinImg, grooming: groomingImg };

function Home() {
  return (
    <>
      <section className="gradient-warm">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="eyebrow">{salon.tagline}</p>
            <h1 className="mt-5 text-5xl leading-[1.02] md:text-7xl">
              Beauty that feels
              <span className="block italic text-primary">unhurried.</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
              Hair, skin and grooming for everyone — one studio, one standard. No packages
              pushed, no clock watching, just work we'd be happy to sign.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/booking" className="btn-clay">
                Book an appointment
              </Link>
              <Link to="/rates" className="btn-outline-gold">
                View rates
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-10">
              {[
                { k: "12", v: "Years open" },
                { k: "4.9", v: "Google rating" },
                { k: "30k+", v: "Chairs filled" },
              ].map((s) => (
                <div key={s.v}>
                  <p className="font-display text-4xl text-primary">{s.k}</p>
                  <p className="eyebrow mt-1">{s.v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImg}
              alt="Interior of Maison Lume unisex salon with marble styling station and brass mirrors"
              width={1600}
              height={1104}
              className="w-full rounded-[2rem] object-cover shadow-lift"
            />
            <div className="absolute -bottom-6 left-6 hidden rounded-2xl border border-border bg-card px-6 py-4 shadow-soft sm:block">
              <p className="eyebrow">Walk-ins</p>
              <p className="mt-1 text-sm">Welcome before 12pm, daily</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              icon: Scissors,
              title: "One chair, one focus",
              text: "Your stylist takes a single client at a time. No juggling, no half-finished blow-dry.",
            },
            {
              icon: Sparkles,
              title: "Honest recommendations",
              text: "We'll tell you when your hair needs rest instead of another chemical service.",
            },
            {
              icon: Clock,
              title: "On-time, always",
              text: "Slots are spaced generously. If we run late, your next visit is on us.",
            },
          ].map((f) => (
            <div key={f.title} className="card-soft p-8">
              <f.icon className="text-gold" size={26} />
              <h3 className="mt-5 text-2xl">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-4 text-4xl md:text-5xl rule-gold">Services for every head, every skin</h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {serviceGroups.slice(0, 3).map((g) => (
              <article key={g.id} className="card-soft overflow-hidden">
                <img
                  src={images[g.id]}
                  alt={g.title}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="h-64 w-full object-cover"
                />
                <div className="p-7">
                  <p className="eyebrow">{g.audience}</p>
                  <h3 className="mt-2 text-2xl">{g.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{g.blurb}</p>
                  <Link
                    to="/services"
                    className="mt-5 inline-block text-[0.75rem] uppercase tracking-[0.2em] text-primary"
                  >
                    Explore →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="eyebrow">Curated</p>
        <h2 className="mt-4 text-4xl md:text-5xl rule-gold">Packages worth the afternoon</h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {packages.map((p) => (
            <div key={p.name} className="card-soft flex flex-col p-8">
              <p className="eyebrow">{p.note}</p>
              <h3 className="mt-3 text-3xl">{p.name}</h3>
              <p className="mt-2 font-display text-4xl text-primary">{p.price}</p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-muted-foreground">
                {p.includes.map((i) => (
                  <li key={i} className="border-b border-border/60 pb-2">
                    {i}
                  </li>
                ))}
              </ul>
              <Link to="/booking" className="btn-outline-gold mt-8">
                Book this
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow">Guest book</p>
          <h2 className="mt-4 text-4xl md:text-5xl rule-gold">Kind words</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <blockquote key={t.name} className="card-soft p-8">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-5 font-display text-xl leading-relaxed">“{t.quote}”</p>
                <footer className="mt-6 text-sm text-muted-foreground">
                  <span className="text-foreground">{t.name}</span> · {t.service}
                </footer>
              </blockquote>
            ))}
          </div>
          <Link to="/testimonials" className="btn-outline-gold mt-12">
            Read all reviews
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-28 text-center">
        <h2 className="text-4xl md:text-6xl">Your chair is waiting.</h2>
        <p className="mx-auto mt-5 max-w-md text-muted-foreground">
          Tell us what you're after and we'll match you with the right pair of hands.
        </p>
        <Link to="/booking" className="btn-clay mt-9">
          Book an appointment
        </Link>
      </section>
    </>
  );
}
