import React, { useState, useEffect } from 'react';

function FAQItemOrganizer({ question, answer }) {
    useEffect(() => {
        // Mettre à jour le titre de la page
        document.title = "FAQ - Organisateurs - Events";
        
      }, []);
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
        className={`nc-FlightCardgroup p-4 sm:p-6 relative bg-white dark:bg-neutral-900 border border-neutral-100
            dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow space-y-6 ${isOpen ? 'open' : ''}`}
        >
        <div className="sm:pr-20 relative">
            <a href="##" className="absolute inset-0" />
            <span
            onClick={toggleAccordion}
            className="absolute right-0 bottom-0 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 w-10 h-10 bg-neutral-50 dark:bg-neutral-800 rounded-full flex items-center justify-center cursor-pointer transform -rotate-180"
            >
            <i className={`text-xl las ${isOpen ? 'la-angle-up' : 'la-angle-down'}`} />
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0">
            <h3
                className="text-neutral-900 font-semibold text-lg md:text-lg md:!leading-[120%] lg:text-lg dark:text-neutral-100 max-w-4xl"
            >
                {question}
            </h3>
            </div>
        </div>
        {isOpen && (
            <div className="p-4 md:p-4 border border-neutral-200 dark:border-neutral-700 rounded-2xl">
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base" dangerouslySetInnerHTML={{ __html: answer }}/>
            </div>
        )}
        </div>
    );
}

export default FAQItemOrganizer;
