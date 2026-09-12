import { Link } from "@tanstack/react-router";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { salon } from "@/data/salon";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-display text-3xl">{salon.name}</h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {salon.tagline}. Hair, skin and grooming under one warm, unhurried roof.
          </p>
          <Link to="/booking" className="btn-outline-gold mt-6">
            Reserve a chair
          </Link>
        </div>

        <div>
          <p className="eyebrow">Visit</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              {salon.address}
            </li>
            <li className="flex gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
              {salon.phone}
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
              {salon.email}
            </li>
            <li className="flex gap-2">
              <Instagram size={16} className="mt-0.5 shrink-0 text-gold" />
              @maisonlume
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Hours</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {salon.hours.map((h) => (
              <li key={h.day}>
                <span className="block text-foreground">{h.day}</span>
                {h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70 px-6 py-6 text-center text-xs tracking-wide text-muted-foreground">
        © {new Date().getFullYear()} {salon.name}. All rights reserved.
      </div>
    </footer>
  );
}
