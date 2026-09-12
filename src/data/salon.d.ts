export interface HourEntry {
  day: string;
  time: string;
}

export interface Salon {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  hours: HourEntry[];
}

export interface ServiceGroup {
  id: string;
  title: string;
  audience: string;
  blurb: string;
  items: string[];
}

export interface RateRow {
  name: string;
  detail: string;
  price: string;
}

export interface RateCard {
  group: string;
  rows: RateRow[];
}

export interface PackageDeal {
  name: string;
  price: string;
  note: string;
  includes: string[];
}

export interface Testimonial {
  name: string;
  service: string;
  rating: number;
  quote: string;
}

export interface TeamMember {
  name: string;
  role: string;
}

export declare const salon: Salon;
export declare const serviceGroups: ServiceGroup[];
export declare const rateCards: RateCard[];
export declare const packages: PackageDeal[];
export declare const testimonials: Testimonial[];
export declare const team: TeamMember[];
