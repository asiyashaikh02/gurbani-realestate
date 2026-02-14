export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  type: 'Villa' | 'Apartment' | 'Plot' | 'Penthouse';
  features: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: 'Building' | 'TrendingUp' | 'Key' | 'Shield';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}

export interface NavItem {
  label: string;
  href: string;
}