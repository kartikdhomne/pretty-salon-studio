import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { salon } from "@/data/salon";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/rates", label: "Rates" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl tracking-tight">{salon.name}</span>
          <span className="block eyebrow mt-1">Unisex Salon</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-[0.78rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <Link to="/booking" className="btn-clay">
            Book now
          </Link>
        </nav>

        <button
          className="md:hidden text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.18em] text-muted-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/booking" className="btn-clay self-start" onClick={() => setOpen(false)}>
              Book now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
