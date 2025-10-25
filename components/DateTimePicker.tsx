
import React, { useState } from 'react';

// Helper component for the Calendar
const Calendar: React.FC<{selectedDate: Date | null, onDateChange: (date: Date) => void}> = ({ selectedDate, onDateChange }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const startDate = new Date(startOfMonth);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const days = [];
    let day = startDate;
    while(day <= endOfMonth || days.length % 7 !== 0) {
        days.push(new Date(day));
        day.setDate(day.getDate() + 1);
        if (days.length > 42) break; // Safety break
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const changeMonth = (amount: number) => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setMonth(newDate.getMonth() + amount);
            return newDate;
        });
    }

    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-4">
                <button onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-teal-100">&lt;</button>
                <h3 className="font-bold text-lg text-teal-700">
                    {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h3>
                <button onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-teal-100">&gt;</button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map(d => <div key={d} className="font-semibold text-slate-500">{d}</div>)}
                {days.map((d, i) => {
                    const isCurrentMonth = d.getMonth() === currentDate.getMonth();
                    const isPast = d < today;
                    const isSelected = selectedDate?.toDateString() === d.toDateString();
                    
                    const buttonClasses = `
                        w-10 h-10 rounded-full transition-colors duration-200
                        ${isCurrentMonth ? 'text-slate-700' : 'text-slate-300'}
                        ${isPast ? 'text-slate-300 cursor-not-allowed' : 'hover:bg-teal-100'}
                        ${isSelected ? 'bg-teal-500 text-white font-bold' : ''}
                    `;
                    
                    return (
                        <button key={i} disabled={isPast} onClick={() => onDateChange(d)} className={buttonClasses}>
                            {d.getDate()}
                        </button>
                    )
                })}
            </div>
        </div>
    );
};

// Helper component for Time Slots
const TimeSlots: React.FC<{
    availableTimes: string[], 
    bookedTimes: string[], 
    selectedTime: string | null,
    onTimeChange: (time: string) => void
}> = ({ availableTimes, bookedTimes, selectedTime, onTimeChange }) => {
    return (
        <div>
             <h3 className="font-bold text-lg text-teal-700 mb-4">Horários disponíveis</h3>
             <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {availableTimes.map(time => {
                    const isBooked = bookedTimes.includes(time);
                    const isSelected = selectedTime === time;

                    const buttonClasses = `
                        p-2 rounded-lg border-2 transition-colors duration-200
                        ${isBooked ? 'bg-slate-200 text-slate-400 border-slate-200 cursor-not-allowed' : 'border-teal-200 hover:bg-teal-100'}
                        ${isSelected ? 'bg-teal-500 text-white border-teal-500 font-bold' : ''}
                    `;

                    return (
                        <button key={time} disabled={isBooked} onClick={() => onTimeChange(time)} className={buttonClasses}>
                            {time}
                        </button>
                    )
                })}
             </div>
        </div>
    )
}

// Main component
interface DateTimePickerProps {
    selectedDate: Date | null;
    onDateChange: (date: Date) => void;
    selectedTime: string | null;
    onTimeChange: (time: string) => void;
    availableTimes: string[];
    bookedTimes: string[];
}
const DateTimePicker: React.FC<DateTimePickerProps> = (props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Calendar selectedDate={props.selectedDate} onDateChange={props.onDateChange} />
            {props.selectedDate && (
                <TimeSlots 
                    availableTimes={props.availableTimes}
                    bookedTimes={props.bookedTimes}
                    selectedTime={props.selectedTime}
                    onTimeChange={props.onTimeChange}
                />
            )}
        </div>
    );
}

export default DateTimePicker;