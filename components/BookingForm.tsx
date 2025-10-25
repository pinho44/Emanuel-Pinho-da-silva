
import React, { useState } from 'react';

interface BookingFormProps {
    onSubmit: (userName: string, userPhone: string) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (userName && userPhone) {
            onSubmit(userName, userPhone);
            setUserName('');
            setUserPhone('');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="userName" className="block text-sm font-medium text-slate-600">Nome</label>
                <input
                    type="text"
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    placeholder="Seu nome completo"
                    required
                />
            </div>
            <div>
                <label htmlFor="userPhone" className="block text-sm font-medium text-slate-600">Telefone</label>
                <input
                    type="tel"
                    id="userPhone"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    placeholder="(XX) XXXXX-XXXX"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-teal-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-teal-600 transition-colors duration-300 shadow-md"
            >
                Confirmar Agendamento
            </button>
        </form>
    );
};

export default BookingForm;