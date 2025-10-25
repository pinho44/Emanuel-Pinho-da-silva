
import React from 'react';
import { Service } from '../types';

interface ServiceSelectorProps {
    services: Service[];
    selectedService: Service | null;
    onSelectService: (service: Service) => void;
}

const ServiceCard: React.FC<{service: Service, isSelected: boolean, onSelect: () => void}> = ({ service, isSelected, onSelect }) => {
    const cardClasses = `
        p-4 border-2 rounded-xl text-center cursor-pointer transition-all duration-300
        flex flex-col items-center justify-between h-full
        ${isSelected ? 'border-teal-500 bg-teal-100 scale-105 shadow-lg' : 'border-gray-200 bg-white hover:shadow-md hover:border-teal-300'}
    `;

    return (
        <div className={cardClasses} onClick={onSelect}>
            <div>
                {service.icon}
                <h3 className="font-bold text-lg text-slate-800">{service.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{service.description}</p>
            </div>
            <p className="mt-4 font-semibold text-teal-600 text-lg">
                R$ {service.price.toFixed(2).replace('.', ',')}
            </p>
        </div>
    );
};

const ServiceSelector: React.FC<ServiceSelectorProps> = ({ services, selectedService, onSelectService }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map(service => (
                <ServiceCard 
                    key={service.id}
                    service={service}
                    isSelected={selectedService?.id === service.id}
                    onSelect={() => onSelectService(service)}
                />
            ))}
        </div>
    );
};

export default ServiceSelector;