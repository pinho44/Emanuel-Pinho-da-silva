import type { ReactElement } from 'react';

export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  // Fix: Use `ReactElement` to correctly type React components and resolve the "Cannot find namespace 'JSX'" error.
  icon: ReactElement;
}

export interface Appointment {
  id: string;
  service: Service;
  date: Date;
  time: string;
  userName:string;
  userPhone: string;
}
