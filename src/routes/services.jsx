import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { serviceGroups } from "@/data/salon";
import hairImg from "@/assets/service-hair.jpg";
import skinImg from "@/assets/service-skin.jpg";
import groomingImg from "@/assets/service-grooming.jpg";
import heroImg from "@/assets/hero-salon.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Salon Services for Men & Women — Maison Lume" },
      {
        name: "description",
        content:
          "Hair cuts, colour, keratin, facials, massages, beard sculpting, nails and bridal makeup — full unisex service menu at Maison Lume.",
      },
      { property: "og:title", content: "Salon Services for Men & Women — Maison Lume" },
      {
        property: "og:description",
        content: "Explore our full unisex menu of hair, skin, grooming and bridal services.",
      },
    ],
  }),
  component: Services,
});

const images = { hair: hairImg, skin: skinImg, grooming: groomingImg, beauty: heroImg };

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Service menu"
        title="Everything, for everyone"
        description="Four studios under one roof. Every service is unisex-friendly unless the technique itself calls for otherwise."
      />

      <div className="mx-auto max-w-6xl px-6 py-20">
        {serviceGroups.map((g, idx) => (
          <section
            key={g.id}
            className={`grid items-center gap-12 border-b border-border py-16 last:border-0 md:grid-cols-2 ${
              idx % 2 ? "md:[&>figure]:order-first" : ""
            }`}
          >
            <div>
              <p className="eyebrow">{g.audience}</p>
              <h2 className="mt-3 text-4xl md:text-5xl">{g.title}</h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{g.blurb}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {g.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check size={15} className="mt-1 shrink-0 text-gold" />
                    {i}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link to="/booking" className="btn-clay">
                  Book {g.title}
                </Link>
                <Link to="/rates" className="btn-outline-gold">
                  See prices
                </Link>
              </div>
            </div>
            <figure>
              <img
                src={images[g.id]}
                alt={g.title}
                loading="lazy"
                width={900}
                height={1100}
                className="h-[26rem] w-full rounded-[2rem] object-cover shadow-soft"
              />
            </figure>
          </section>
        ))}
      </div>
    </>
  );
}
