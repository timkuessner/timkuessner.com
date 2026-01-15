import React from 'react';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    id?: string;
    className?: string;
}

export default function Section({ title, children, id, className = "" }: SectionProps) {
    return (
        <section id={id} className={`min-h-screen flex flex-col items-center justify-center bg-black px-4 py-32 ${className}`}>
            <div className="max-w-5xl w-full">
                <h2 className="text-5xl md:text-6xl font-semibold mb-16 text-center text-white">{title}</h2>
                {children}
            </div>
        </section>
    );
}
