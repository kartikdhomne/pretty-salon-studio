import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { team, salon } from "@/data/salon";
import heroImg from "@/assets/hero-salon.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Our Salon & Team — Maison Lume" },
      {
        name: "description",
        content:
          "Meet the colourists, barbers and aestheticians behind Maison Lume, a unisex salon built on unhurried, honest craft.",
      },
      { property: "og:title", content: "About Our Salon & Team — Maison Lume" },
      {
        property: "og:description",
        content: "The people and the philosophy behind our unisex hair, skin and grooming studio.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="A salon built on patience"
        description="Opened in 2014 above a bakery with two chairs and one dryer. Same obsession, more room."
      />

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-2">
        <img
          src={heroImg}
          alt="The Maison Lume studio floor"
          loading="lazy"
          width={1600}
          height={1104}
          className="rounded-[2rem] object-cover shadow-soft"
        />
        <div>
          <h2 className="text-4xl rule-gold">Why unisex, always</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Hair is hair. Skin is skin. Splitting a salon down gender lines mostly splits the
            pricing, not the craft. Everyone here is trained across textures, lengths and
            skin types, and everyone gets the same generous slot on the books.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We cap the floor at six guests at a time. It means fewer bookings and a much
            better afternoon — for you and for the people holding the scissors.
          </p>
          <Link to="/contact" className="btn-outline-gold mt-8">
            Find us
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow">The hands</p>
          <h2 className="mt-4 text-4xl rule-gold">Our team</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className="card-soft p-8">
                <p className="font-display text-5xl text-accent">
                  {m.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </p>
                <h3 className="mt-5 text-xl">{m.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-4xl">Visit us</h2>
        <p className="mt-4 text-muted-foreground">{salon.address}</p>
        <Link to="/booking" className="btn-clay mt-8">
          Book an appointment
        </Link>
      </section>
    </>
  );
}
