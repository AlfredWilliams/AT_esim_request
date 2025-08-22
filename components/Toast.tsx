import React, { useEffect } from 'react';

interface ToastProps {
    message: string;
    type: 'success' | 'error';
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000); // Auto-dismiss after 5 seconds

        return () => {
            clearTimeout(timer);
        };
    }, [onClose]);

    const baseStyles = 'fixed top-5 right-5 z-50 flex items-center p-4 w-full max-w-xs text-white rounded-lg shadow-lg';
    const typeStyles = {
        success: 'bg-green-500',
        error: 'bg-red-500',
    };

    const Icon = () => {
        if (type === 'success') {
            return (
                <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </div>
            );
        }
        return (
            <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </div>
        );
    };

    return (
        <div className={`${baseStyles} ${typeStyles[type]}`} role="alert">
            <Icon />
            <div className="ml-3 text-sm font-normal">{message}</div>
            <button
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 bg-transparent text-white/70 hover:text-white rounded-lg focus:ring-2 focus:ring-white p-1.5 inline-flex h-8 w-8"
                onClick={onClose}
                aria-label="Close"
            >
                <span className="sr-only">Close</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
        </div>
    );
};

export default Toast;