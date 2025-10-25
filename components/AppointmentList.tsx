import React from 'react';
import { Appointment } from '../types';

interface AppointmentListProps {
    appointments: Appointment[];
}

const AppointmentList: React.FC<AppointmentListProps> = ({ appointments }) => {
    return (
        <aside className="bg-white p-6 rounded-2xl shadow-lg h-full">
            <h2 className="text-2xl font-bold text-teal-700 mb-4 border-b pb-2">Agendamentos</h2>
            {appointments.length === 0 ? (
                <div className="text-center text-slate-500 mt-8">
                    <p>Nenhum horário agendado ainda.</p>
                </div>
            ) : (
                <ul className="space-y-4">
                    {appointments.map(app => (
                        <li key={app.id} className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-400">
                           <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 pt-1">
                                    {React.cloneElement(app.service.icon, { className: 'w-5 h-5 text-teal-600' })}
                                </div>
                                <div className="flex-grow">
                                    <p className="font-bold text-slate-800">{app.service.name}</p>
                                    <p className="text-sm text-slate-600">{app.userName}</p>
                                    <p className="text-sm text-slate-500">
                                        {app.date.toLocaleDateString('pt-BR')} às {app.time}
                                    </p>
                                </div>
                           </div>
                        </li>
                    ))}
                </ul>
            )}
        </aside>
    );
};

export default AppointmentList;