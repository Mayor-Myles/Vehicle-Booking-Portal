"use client";


import { atom } from 'recoil';

export const plansState = atom({
  key: 'plansState',
  default: {
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

  "_9mobile": [
    { size: "500MB", duration: "7 Days", price: 300 },
    { size: "1GB", duration: "7 Days", price: 500 },
    { size: "2GB", duration: "30 Days", price: 1200 },
    { size: "4.5GB", duration: "30 Days", price: 2000 },
    { size: "11GB", duration: "30 Days", price: 4000 },
    { size: "15GB", duration: "30 Days", price: 5000 },
  ],
}

});
