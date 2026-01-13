export default function Certificates() {
  const certificates = [
    {
      id: 'cert-1',
      title: 'CS50’s Introduction to Artificial Intelligence with Python',
      issuer: 'Harvard’s CS50',
      date: '2026',
      description: 'Foundation of modern artificial intelligence',
      link: 'https://cs50.harvard.edu/certificates/8d382dfb-4d91-4b2b-a30d-c01fd780c5fa'
    },
    // Add more certificates here
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black px-4 py-32">
      <div className="max-w-5xl w-full">
        <h2 className="text-5xl md:text-6xl font-semibold mb-16 text-center text-white">Certificates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificates.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-2xl border-2 border-neutral-800 hover:bg-neutral-800 hover:text-white transition-all duration-300 cursor-pointer group hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-medium">
                    {cert.title}
                  </h3>
                  <p className="mt-2">{cert.issuer}</p>
                </div>
              </div>
              
              <p className="text-sm mb-4 leading-relaxed">{cert.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">{cert.date}</span>
                <span className="text-sm flex items-center gap-2">
                  View certificate
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
