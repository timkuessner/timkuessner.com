import { Link } from 'react-router-dom';

export default function Education() {
  const educationItems = [
    {
      id: 'naycol',
      institution: 'Nayland College',
      tags: ['Nelson, New Zealand'],
      period: 'July 2024 - December 2025',
      description: 'Completed studies at Nayland College in Nelson, New Zealand as an exchange student. Finished NCEA coursework and secondary school and am currently awaiting my final results.',
    },
    {
      id: 'gymoberwil',
      institution: 'Gymnasium Oberwil',
      tags: ['Oberwil, Switzerland'],
      period: 'July 2023 - June 2024',
      description: 'Attended Gymnasium Oberwil for advanced secondary education, focusing on Schwerpunktfach Anwendungen der Mathematik und Physik (Main focus: Applications of Mathematics and Physics).',
    },
    {
      id: 'sektherwil',
      institution: 'Sekundarschule Therwil',
      tags: ['Therwil, Switzerland'],
      period: 'July 2020 - June 2023',
      description: 'Completed secondary education at Sekundarschule Therwil in the Leistungszug P (advanced performance track).',
    },
    {
      id: 'primtherwil',
      institution: 'Primarschule Therwil',
      tags: ['Therwil, Switzerland'],
      period: 'July 2014 - June 2020',
      description: 'Completed primary education at Primarschule Therwil, Switzerland.',
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black px-4 py-32">
      <div className="max-w-5xl w-full">
        <h2 className="text-5xl md:text-6xl font-semibold mb-16 text-center text-white">Education</h2>

        <div className="space-y-4">
          {educationItems.map((item) => (
            <Link
              to={`/edu/${item.id}`}
              key={item.id}
              className="block p-8 rounded-2xl border-2 border-neutral-800 hover:bg-neutral-800 hover:text-white transition-all duration-300 cursor-pointer group hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-medium">
                    {item.institution}
                  </h3>
                  <p className="text-lg mt-1">{item.tags.join(" | ")}</p>
                </div>
                <span className="mt-2 md:mt-0">{item.period}</span>
              </div>

              <p className="leading-relaxed">{item.description}</p>

              <div className="mt-6 flex items-center transition-colors">
                <span className="text-sm">View details</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
