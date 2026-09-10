import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { salon } from "@/data/salon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Salon Location — Maison Lume" },
      {
        name: "description",
        content:
          "Call, email or visit Maison Lume unisex salon in Bandra West, Mumbai. Opening hours, address and enquiry form.",
      },
      { property: "og:title", content: "Contact & Salon Location — Maison Lume" },
      {
        property: "og:description",
        content: "Address, opening hours and how to reach our unisex salon.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Say hello"
        title="Come find us"
        description="Questions about a service, a colour correction or a bridal date? Send a note and we'll reply the same day."
      />

      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-3xl rule-gold">Studio details</h2>
          <ul className="mt-8 space-y-6 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 shrink-0 text-gold" size={18} />
              <span>{salon.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 shrink-0 text-gold" size={18} />
              <span>{salon.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 shrink-0 text-gold" size={18} />
              <span>{salon.email}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 shrink-0 text-gold" size={18} />
              <span className="space-y-1">
                {salon.hours.map((h) => (
                  <span key={h.day} className="block">
                    {h.day} — {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
          <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
            These contact details are placeholders — send me your real address, phone and
            email and I'll swap them in.
          </p>
        </div>

        <form
          className="card-soft p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <h2 className="text-3xl">Send an enquiry</h2>
          {sent ? (
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Thank you — your message is noted. We'll be in touch shortly.
            </p>
          ) : (
            <div className="mt-8 space-y-5">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
              <div>
                <label className="eyebrow" htmlFor="msg">
                  Message
                </label>
                <textarea
                  id="msg"
                  required
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold"
                />
              </div>
              <button type="submit" className="btn-clay w-full">
                Send message
              </button>
            </div>
          )}
        </form>
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
