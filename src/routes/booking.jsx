import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { serviceGroups, salon } from "@/data/salon";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — Maison Lume Salon" },
      {
        name: "description",
        content:
          "Reserve your chair at Maison Lume. Pick your service, stylist and time for hair, skin, grooming or bridal appointments.",
      },
      { property: "og:title", content: "Book an Appointment — Maison Lume Salon" },
      {
        property: "og:description",
        content: "Choose a service and time slot and we'll confirm your booking by phone.",
      },
    ],
  }),
  component: Booking,
});

const slots = ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00"];
const allServices = serviceGroups.flatMap((g) =>
  g.items.map((i) => ({ group: g.title, label: i })),
);

function Booking() {
  const [service, setService] = useState(allServices[0].label);
  const [slot, setSlot] = useState(slots[0]);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <CheckCircle2 className="mx-auto text-gold" size={44} />
        <h1 className="mt-6 text-4xl">Request received</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          We've noted <span className="text-foreground">{service}</span> at{" "}
          <span className="text-foreground">{slot}</span>. A quick call from {salon.name}{" "}
          confirms the slot.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <button className="btn-outline-gold" onClick={() => setDone(false)}>
            Book another
          </button>
          <Link to="/services" className="btn-clay">
            Browse services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Reservations"
        title="Book your chair"
        description="Requests are confirmed by phone within the hour during opening times. Cancellations are free up to 12 hours before."
      />

      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.4fr_1fr]">
        <form
          className="card-soft p-8 md:p-10"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Full name" name="name" />
            <Field label="Phone" name="phone" type="tel" />
            <Field label="Email" name="email" type="email" />
            <Field label="Preferred date" name="date" type="date" />
          </div>

          <div className="mt-6">
            <label className="eyebrow" htmlFor="service">
              Service
            </label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold"
            >
              {serviceGroups.map((g) => (
                <optgroup key={g.id} label={g.title}>
                  {g.items.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          <div className="mt-8">
            <p className="eyebrow">Preferred time</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {slots.map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => setSlot(s)}
                  className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                    slot === s
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:bg-accent"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <label className="eyebrow" htmlFor="notes">
              Anything we should know
            </label>
            <textarea
              id="notes"
              rows={3}
              placeholder="Allergies, previous colour, preferred stylist…"
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold"
            />
          </div>

          <button type="submit" className="btn-clay mt-9 w-full">
            Request appointment
          </button>
        </form>

        <aside className="space-y-8">
          <div className="rounded-[1.5rem] border border-border bg-secondary/50 p-8">
            <h2 className="text-2xl">Good to know</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>Arrive 10 minutes early for a proper consultation.</li>
              <li>Colour services need a patch test 48 hours before.</li>
              <li>Bridal dates are held with a 25% deposit.</li>
              <li>Walk-ins welcome before noon, subject to the floor.</li>
            </ul>
          </div>
          <div className="rounded-[1.5rem] border border-border p-8">
            <p className="eyebrow">Rather talk?</p>
            <p className="mt-3 font-display text-3xl text-primary">{salon.phone}</p>
            <p className="mt-2 text-sm text-muted-foreground">{salon.email}</p>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Bookings are stored in the page only for now. Say the word and I'll connect a
            real database so requests reach your inbox.
          </p>
        </aside>
      </div>
    </>
  );
}

function Field({ label, name, type = "text" }) {
  return (
    <div>
      <label className="eyebrow" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold"
      />
    </div>
  );
}
