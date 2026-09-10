import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { rateCards, packages } from "@/data/salon";

export const Route = createFileRoute("/rates")({
  head: () => ({
    meta: [
      { title: "Salon Price List & Rates — Maison Lume" },
      {
        name: "description",
        content:
          "Transparent salon rates for haircuts, colour, facials, massages, grooming, nails and bridal packages. No hidden charges.",
      },
      { property: "og:title", content: "Salon Price List & Rates — Maison Lume" },
      {
        property: "og:description",
        content: "Clear pricing for every hair, skin, grooming and bridal service we offer.",
      },
    ],
  }),
  component: Rates,
});

function Rates() {
  return (
    <>
      <PageHeader
        eyebrow="Price list"
        title="Rates, plainly stated"
        description="Prices include consultation and finish. Colour work is quoted after a strand check — we'll always confirm before we start."
      />

      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-14 md:grid-cols-2">
          {rateCards.map((card) => (
            <section key={card.group}>
              <h2 className="text-3xl rule-gold">{card.group}</h2>
              <ul className="mt-8 space-y-5">
                {card.rows.map((r) => (
                  <li
                    key={r.name}
                    className="flex items-baseline justify-between gap-4 border-b border-dashed border-border pb-3"
                  >
                    <span>
                      <span className="block text-sm">{r.name}</span>
                      <span className="eyebrow">{r.detail}</span>
                    </span>
                    <span className="font-display text-2xl text-primary">{r.price}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-24">
          <h2 className="text-3xl rule-gold">Bundled packages</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {packages.map((p) => (
              <div key={p.name} className="card-soft p-8">
                <p className="eyebrow">{p.note}</p>
                <h3 className="mt-3 text-2xl">{p.name}</h3>
                <p className="mt-2 font-display text-3xl text-primary">{p.price}</p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {p.includes.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-20 rounded-[2rem] border border-border bg-secondary/50 p-10 text-center">
          <h2 className="text-3xl">Not sure what you need?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Free 15-minute consultations every weekday morning. Bring photos, bring doubts.
          </p>
          <Link to="/booking" className="btn-clay mt-7">
            Book a consultation
          </Link>
        </div>
      </div>
    </>
  );
}
