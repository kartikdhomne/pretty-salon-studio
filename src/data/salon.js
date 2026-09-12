export const salon = {
  name: "Maison Lume",
  tagline: "Unisex hair, skin & grooming studio",
  phone: "+91 98765 43210",
  email: "hello@maisonlume.salon",
  address: "24 Palm Grove Lane, Bandra West, Mumbai 400050",
  hours: [
    { day: "Monday – Thursday", time: "10:00 – 20:00" },
    { day: "Friday – Saturday", time: "09:00 – 21:00" },
    { day: "Sunday", time: "10:00 – 18:00" },
  ],
};

export const serviceGroups = [
  {
    id: "hair",
    title: "Hair Studio",
    audience: "Women & Men",
    blurb:
      "Precision cuts, lived-in colour and treatments built around your hair's real texture.",
    items: [
      "Signature cut & finish",
      "Fade, taper & clipper work",
      "Balayage & lived-in colour",
      "Global colour & root touch-up",
      "Highlights and lowlights",
      "Keratin & smoothening",
      "Scalp & bond repair therapy",
      "Blow-dry, curls & styling",
    ],
  },
  {
    id: "skin",
    title: "Skin & Spa",
    audience: "Unisex",
    blurb:
      "Calm, clinical-grade facials and body rituals with a slow, restorative pace.",
    items: [
      "Hydra glow facial",
      "Anti-acne clarifying facial",
      "Brightening vitamin C facial",
      "Detan & clean-up",
      "Full body polish",
      "Aroma relaxation massage",
      "Deep tissue massage",
      "Back & shoulder ritual",
    ],
  },
  {
    id: "grooming",
    title: "Men's Grooming",
    audience: "Men",
    blurb:
      "Barbering fundamentals done properly — hot towels, sharp lines, no rush.",
    items: [
      "Beard sculpt & line-up",
      "Hot towel razor shave",
      "Beard colour",
      "Head shave & scalp care",
      "Men's hair spa",
      "Charcoal detox facial",
      "Manicure & pedicure for men",
      "Grooming membership",
    ],
  },
  {
    id: "beauty",
    title: "Beauty & Bridal",
    audience: "Women",
    blurb:
      "Makeup, nails and full bridal choreography for the day you'll remember.",
    items: [
      "Party & event makeup",
      "HD bridal makeup",
      "Draping & hair styling",
      "Threading & waxing",
      "Gel extensions & nail art",
      "Classic manicure & pedicure",
      "Lash lift & extensions",
      "Pre-bridal packages",
    ],
  },
];

export const rateCards = [
  {
    group: "Hair — Women",
    rows: [
      { name: "Signature cut & blow-dry", detail: "60 min", price: "$20" },
      { name: "Fringe / trim", detail: "20 min", price: "$6" },
      { name: "Balayage", detail: "150 min", price: "$90" },
      { name: "Global colour", detail: "120 min", price: "$50" },
      { name: "Keratin smoothening", detail: "180 min", price: "$110" },
      { name: "Hair spa & bond repair", detail: "60 min", price: "$27" },
    ],
  },
  {
    group: "Hair — Men",
    rows: [
      { name: "Classic cut", detail: "40 min", price: "$9" },
      { name: "Skin fade", detail: "50 min", price: "$11" },
      { name: "Beard sculpt", detail: "30 min", price: "$6" },
      { name: "Hot towel shave", detail: "40 min", price: "$8" },
      { name: "Hair colour", detail: "60 min", price: "$18" },
      { name: "Men's hair spa", detail: "45 min", price: "$15" },
    ],
  },
  {
    group: "Skin & Spa — Unisex",
    rows: [
      { name: "Hydra glow facial", detail: "60 min", price: "$34" },
      { name: "Anti-acne facial", detail: "60 min", price: "$36" },
      { name: "Detan & clean-up", detail: "30 min", price: "$13" },
      { name: "Aroma relaxation massage", detail: "60 min", price: "$32" },
      { name: "Deep tissue massage", detail: "75 min", price: "$41" },
      { name: "Full body polish", detail: "90 min", price: "$48" },
    ],
  },
  {
    group: "Beauty & Bridal",
    rows: [
      { name: "Party makeup", detail: "60 min", price: "$42" },
      { name: "HD bridal makeup", detail: "180 min", price: "$215" },
      { name: "Gel extensions", detail: "90 min", price: "$35" },
      { name: "Manicure & pedicure", detail: "75 min", price: "$19" },
      { name: "Full arms & legs wax", detail: "45 min", price: "$17" },
      { name: "Pre-bridal package", detail: "4 sessions", price: "$290" },
    ],
  },
];

export const packages = [
  {
    name: "The Refresh",
    price: "$35",
    note: "Monthly favourite",
    includes: ["Cut & finish", "Express facial", "Head massage"],
  },
  {
    name: "The Ritual",
    price: "$77",
    note: "Most booked",
    includes: [
      "Cut & colour touch-up",
      "Hydra glow facial",
      "Manicure & pedicure",
      "Complimentary hair spa",
    ],
  },
  {
    name: "The Groom",
    price: "$43",
    note: "For him",
    includes: ["Skin fade", "Beard sculpt", "Charcoal detox facial", "Shave"],
  },
];

export const testimonials = [
  {
    name: "Ananya Rao",
    service: "Balayage & cut",
    rating: 5,
    quote:
      "I've never had a colourist actually listen before. They talked me out of what I asked for and gave me something far better.",
  },
  {
    name: "Rohan Mehta",
    service: "Skin fade & beard sculpt",
    rating: 5,
    quote:
      "Sharpest fade in the city and nobody rushes you out. The hot towel finish alone is worth the trip.",
  },
  {
    name: "Priya Nair",
    service: "HD bridal makeup",
    rating: 5,
    quote:
      "Fourteen hours, three outfit changes, monsoon humidity — and my makeup did not move once. They were calmer than my family.",
  },
  {
    name: "Kabir Shah",
    service: "Deep tissue massage",
    rating: 5,
    quote:
      "I book the 75 minute one every third Sunday now. It's the only hour of the month my shoulders forgive me.",
  },
  {
    name: "Meera Iyer",
    service: "Keratin smoothening",
    rating: 5,
    quote:
      "Six months of frizz-free mornings. They were honest that my hair needed two sessions instead of upselling me on five.",
  },
  {
    name: "Aditya Kulkarni",
    service: "Grooming membership",
    rating: 5,
    quote:
      "The membership pays for itself by the third visit. Same barber every time, remembers exactly how I like it.",
  },
];

export const team = [
  { name: "Leila Fernandes", role: "Creative Director & Colourist" },
  { name: "Arjun Bose", role: "Master Barber" },
  { name: "Sana Qureshi", role: "Lead Aesthetician" },
  { name: "Nikhil Verma", role: "Bridal & Editorial Stylist" },
];
