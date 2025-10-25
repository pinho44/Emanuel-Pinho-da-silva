
import React from 'react';
import { SparklesIcon } from './IconComponents';

interface AiIdeaModalProps {
    isOpen: boolean;
    onClose: () => void;
    idea: string;
    isLoading: boolean;
    serviceName: string;
}

const AiIdeaModal: React.FC<AiIdeaModalProps> = ({ isOpen, onClose, idea, isLoading, serviceName }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 text-center transform transition-all animate-fade-in-up">
                <div className="flex justify-center items-center gap-3 mb-4">
                    <SparklesIcon className="text-teal-500 w-8 h-8" />
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
                        Ideia para {serviceName}
                    </h2>
                </div>
                
                <div className="text-left bg-teal-50 p-4 rounded-lg min-h-[100px] flex items-center justify-center">
                    {isLoading ? (
                        <div className="flex items-center space-x-2 text-slate-500">
                            <div className="w-4 h-4 border-2 border-dashed rounded-full animate-spin border-teal-500"></div>
                            <span>Gerando uma ideia incrível...</span>
                        </div>
                    ) : (
                        <p className="text-slate-700">{idea}</p>
                    )}
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

export default AiIdeaModal;