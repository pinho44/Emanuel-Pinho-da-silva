
import React, { useState, useMemo, useCallback } from 'react';
import { Service, Appointment } from './types';
import { SERVICES, AVAILABLE_TIMES } from './constants';
import { generateNailArtIdea } from './services/geminiService';

import Header from './components/Header';
import ServiceSelector from './components/ServiceSelector';
import DateTimePicker from './components/DateTimePicker';
import BookingForm from './components/BookingForm';
import AppointmentList from './components/AppointmentList';
import ConfirmationModal from './components/ConfirmationModal';
import AiIdeaModal from './components/AiIdeaModal';
import { SparklesIcon } from './components/IconComponents';

const App: React.FC = () => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
    const [lastBooking, setLastBooking] = useState<Appointment | null>(null);

    const [isAiIdeaModalOpen, setAiIdeaModalOpen] = useState(false);
    const [aiIdea, setAiIdea] = useState<string>('');
    const [isGeneratingIdea, setIsGeneratingIdea] = useState(false);

    const bookedTimesForSelectedDate = useMemo(() => {
        if (!selectedDate) return [];
        return appointments
            .filter(app => app.date.toDateString() === selectedDate.toDateString())
            .map(app => app.time);
    }, [appointments, selectedDate]);
    
    const handleGenerateIdea = useCallback(async () => {
        if (!selectedService) return;
        setIsGeneratingIdea(true);
        setAiIdea('');
        setAiIdeaModalOpen(true);
        try {
            const idea = await generateNailArtIdea(selectedService.name);
            setAiIdea(idea);
        } catch (error) {
            console.error("Error generating AI idea:", error);
            setAiIdea('Desculpe, não foi possível gerar uma ideia no momento. Tente novamente mais tarde.');
        } finally {
            setIsGeneratingIdea(false);
        }
    }, [selectedService]);


    const handleBookingSubmit = useCallback((userName: string, userPhone: string) => {
        if (selectedService && selectedDate && selectedTime) {
            const newAppointment: Appointment = {
                id: new Date().toISOString(),
                service: selectedService,
                date: selectedDate,
                time: selectedTime,
                userName,
                userPhone
            };
            setAppointments(prev => [...prev, newAppointment].sort((a,b) => a.date.getTime() - b.date.getTime()));
            setLastBooking(newAppointment);
            setConfirmationModalOpen(true);
            
            // Reset state for next booking
            setSelectedService(null);
            setSelectedDate(null);
            setSelectedTime(null);
        }
    }, [selectedService, selectedDate, selectedTime]);

    return (
        <div className="min-h-screen bg-teal-50 text-slate-800 font-sans">
            <Header />
            <main className="container mx-auto p-4 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <section className="bg-white p-6 rounded-2xl shadow-lg">
                             <h2 className="text-2xl font-bold text-teal-700 mb-4">1. Escolha o Serviço</h2>
                            <ServiceSelector
                                services={SERVICES}
                                selectedService={selectedService}
                                onSelectService={setSelectedService}
                            />
                        </section>
                        
                        {selectedService && (
                             <div className="text-center">
                                <button
                                    onClick={handleGenerateIdea}
                                    disabled={isGeneratingIdea}
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-wait"
                                >
                                    <SparklesIcon />
                                    {isGeneratingIdea ? 'Gerando...' : 'Inspire-se com a IA!'}
                                </button>
                             </div>
                        )}

                        {selectedService && (
                             <section className="bg-white p-6 rounded-2xl shadow-lg">
                                <h2 className="text-2xl font-bold text-teal-700 mb-4">2. Selecione Data e Hora</h2>
                                <DateTimePicker 
                                    selectedDate={selectedDate}
                                    onDateChange={setSelectedDate}
                                    selectedTime={selectedTime}
                                    onTimeChange={setSelectedTime}
                                    availableTimes={AVAILABLE_TIMES}
                                    bookedTimes={bookedTimesForSelectedDate}
                                />
                            </section>
                        )}
                        
                        {selectedDate && selectedTime && (
                             <section className="bg-white p-6 rounded-2xl shadow-lg">
                                 <h2 className="text-2xl font-bold text-teal-700 mb-4">3. Seus Dados</h2>
                                <BookingForm onSubmit={handleBookingSubmit} />
                             </section>
                        )}
                    </div>

                    <div className="lg:col-span-1">
                        <AppointmentList appointments={appointments} />
                    </div>
                </div>
            </main>

            {lastBooking && (
                <ConfirmationModal 
                    isOpen={isConfirmationModalOpen}
                    onClose={() => setConfirmationModalOpen(false)}
                    appointment={lastBooking}
                />
            )}
             <AiIdeaModal
                isOpen={isAiIdeaModalOpen}
                onClose={() => setAiIdeaModalOpen(false)}
                idea={aiIdea}
                isLoading={isGeneratingIdea}
                serviceName={selectedService?.name || ''}
            />
        </div>
    );
}

export default App;