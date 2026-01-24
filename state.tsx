"use client";

import { atom } from "jotai";

export const plansState= atom({
  MTN: [
    { size: "500MB", duration: "7 Days", price: 300 },
    { size: "1GB", duration: "7 Days", price: 500 },
    { size: "1.5GB", duration: "30 Days", price: 1200 },
    { size: "3GB", duration: "30 Days", price: 2500 },
    { size: "5GB", duration: "30 Days", price: 3500 },
    { size: "10GB", duration: "30 Days", price: 6000 },
  ],

  Glo: [
    { size: "500MB", duration: "7 Days", price: 250 },
    { size: "1GB", duration: "7 Days", price: 450 },
    { size: "2GB", duration: "14 Days", price: 1200 },
    { size: "3.9GB", duration: "30 Days", price: 2000 },
    { size: "7.5GB", duration: "30 Days", price: 3000 },
    { size: "12GB", duration: "30 Days", price: 5000 },
  ],

  _9mobile: [
    { size: "500MB", duration: "7 Days", price: 300 },
    { size: "1GB", duration: "7 Days", price: 500 },
    { size: "2GB", duration: "30 Days", price: 1200 },
    { size: "4.5GB", duration: "30 Days", price: 2000 },
    { size: "11GB", duration: "30 Days", price: 4000 },
    { size: "15GB", duration: "30 Days", price: 5000 },
  ],
});


export const expertsState = atom([
  {
    id: "1",
    name: "Julianne V.",
    role: "Creative Director",
    rating: 4.9,
    projects: 45,
    online: true,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    category: "fashion",
  },
  {
    id: "2",
    name: "Amara K.",
    role: "Fashion Stylist",
    rating: 4.8,
    projects: 38,
    online: false,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    category: "styling",
  },
  {
    id: "3",
    name: "Liam O.",
    role: "Menswear Designer",
    rating: 4.7,
    projects: 29,
    online: true,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    category: "fashion",
  },
]);

export const userState = atom({
  isAuthenticated: false,
  profile: {
    id: "m123"
    firstName: "Paul",
    lastName: "Adebayo",
    email: "user@gmail.com",
    gender: "female",
    phone: "081000200200",
    balance:300
  },
});

