import React from 'react';
import { Service } from './types';
import { ManicureIcon, PedicureIcon, GelNailsIcon, SpaIcon } from './components/IconComponents';

export const SERVICES: Service[] = [
  { 
    id: 1, 
    name: 'Manicure Clássica', 
    description: 'Cutilagem, lixamento e esmaltação.', 
    price: 30,
    icon: <ManicureIcon className="w-8 h-8 mb-2 text-teal-500" />
  },
  { 
    id: 2, 
    name: 'Pedicure Clássica', 
    description: 'Cutilagem, lixamento e esmaltação para os pés.', 
    price: 40,
    icon: <PedicureIcon className="w-8 h-8 mb-2 text-teal-500" />
  },
  { 
    id: 3, 
    name: 'Unha em Gel', 
    description: 'Aplicação ou manutenção de unhas em gel.', 
    price: 120,
    icon: <GelNailsIcon className="w-8 h-8 mb-2 text-teal-500" />
  },
  { 
    id: 4, 
    name: 'Spa dos Pés', 
    description: 'Esfoliação, hidratação e massagem relaxante.', 
    price: 60,
    icon: <SpaIcon className="w-8 h-8 mb-2 text-teal-500" />
  },
];

export const AVAILABLE_TIMES: string[] = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', 
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
];