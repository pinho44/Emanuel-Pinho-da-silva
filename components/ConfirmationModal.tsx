
import React from 'react';
import { Appointment } from '../types';

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    appointment: Appointment;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, appointment }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full mx-4 text-center transform transition-all scale-100">
                <h2 className="text-2xl font-bold text-teal-600 mb-4">Agendamento Confirmado!</h2>
                <p className="text-slate-600 mb-6">Seu horário foi agendado com sucesso. Nos vemos em breve!</p>
                
                <div className="text-left bg-teal-50 p-4 rounded-lg space-y-2">
                    <p><strong>Cliente:</strong> {appointment.userName}</p>
                    <p><strong>Serviço:</strong> {appointment.service.name}</p>
                    <p><strong>Data:</strong> {appointment.date.toLocaleDateString('pt-BR')}</p>
                    <p><strong>Hora:</strong> {appointment.time}</p>
                </div>

                <button
                    onClick={onClose}
                    className="mt-8 w-full bg-teal-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors"
                >
                    Fechar
                </button>
            </div>
        </div>
    );
};

export default ConfirmationModal;