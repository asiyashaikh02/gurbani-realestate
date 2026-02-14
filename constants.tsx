import { Property, Service, Testimonial, NavItem } from './types';
import { Building, TrendingUp, Key, Shield } from 'lucide-react';
import React from 'react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Properties', href: '#properties' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const PROPERTIES: Property[] = [
  {
    id: 1,
    title: 'The Royal Enclave Villa',
    location: 'Civil Lines, Nagpur',
    price: '₹ 5.5 Cr',
    image: 'https://picsum.photos/id/122/800/600',
    type: 'Villa',
    features: ['5 Bedrooms', 'Private Pool', '7000 Sq. Ft.'],
  },
  {
    id: 2,
    title: 'Skyline Penthouse',
    location: 'Dharampeth, Nagpur',
    price: '₹ 3.2 Cr',
    image: 'https://picsum.photos/id/188/800/600',
    type: 'Penthouse',
    features: ['360° View', 'Smart Home', '3500 Sq. Ft.'],
  },
  {
    id: 3,
    title: 'Investment Plot Sector 7',
    location: 'MIHAN, Nagpur',
    price: '₹ 85 L',
    image: 'https://picsum.photos/id/234/800/600',
    type: 'Plot',
    features: ['Commercial Zone', 'High Yield', '2000 Sq. Ft.'],
  },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Property Consultation',
    description: 'Expert guidance to identify luxury homes that match your lifestyle and status.',
    icon: 'Key',
  },
  {
    id: 2,
    title: 'Investment Advisory',
    description: 'Data-driven insights into high-yield plots and commercial opportunities in Nagpur.',
    icon: 'TrendingUp',
  },
  {
    id: 3,
    title: 'Site Visit Assistance',
    description: 'VIP chauffeured site visits with detailed neighborhood analysis.',
    icon: 'Building',
  },
  {
    id: 4,
    title: 'Buyer Qualification',
    description: 'Ensuring smooth transactions through rigorous vetting and financial planning.',
    icon: 'Shield',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Khandelwal',
    role: 'Industrialist',
    quote: 'Mohit’s understanding of the luxury market is unparalleled. He didn’t just sell me a house; he curated a lifestyle upgrade.',
  },
  {
    id: 2,
    name: 'Dr. Priya Deshmukh',
    role: 'Surgeon',
    quote: 'Professional, discreet, and incredibly knowledgeable. Gurbani Properties secured a prime asset for my portfolio.',
  },
];