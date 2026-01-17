import { Link } from 'react-router-dom';

interface CardProps {
    title: string;
    subtitle?: string; // For things like "GitHub", "CS50", or Institution name
    date?: string;
    description: string;
    tags?: string[];
    to?: string;   // Internal link
    href?: string; // External link
    linkText?: string;
}

export default function Card({ title, subtitle, date, description, tags, to, href, linkText = "View details" }: CardProps) {
    const content = (
        <>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-medium">
                        {title}
                    </h3>
                    {subtitle && <p className="text-lg mt-1 text-neutral-300">{subtitle}</p>}
                    {tags && tags.length > 0 && <p className="text-sm mt-1 text-neutral-400">{tags.join(" | ")}</p>}
                </div>
                {date && <span className="mt-2 md:mt-0 text-neutral-400 text-sm md:text-base">{date}</span>}
            </div>

            <p className="leading-relaxed text-neutral-200">{description}</p>

            {to || href ? (
                <div className="mt-6 flex items-center transition-colors text-white">
                    <span className="text-sm font-medium">{linkText}</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            ) : null}
        </>
    );

    const className = "block p-8 rounded-2xl border-2 border-neutral-800 bg-black hover:bg-neutral-900 transition-all duration-300 cursor-pointer group hover:-translate-y-1 h-full text-left";

    if (to) {
        return (
            <Link
                to={to}
                className={className}
                onClick={() => window.scrollTo(0, 0)}
            >
                {content}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {content}
            </a>
        );
    }

    return (
        <div className={className}>
            {content}
        </div>
    );
}
