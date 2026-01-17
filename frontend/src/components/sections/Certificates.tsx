import Section from '../common/Section';
import Card from '../common/Card';

export default function Certificates() {
  const certificates = [
    {
      id: 'cs50-ai',
      title: 'CS50’s Introduction to Artificial Intelligence with Python',
      issuer: 'Harvard’s CS50',
      date: '2026',
      description: 'Foundation of modern artificial intelligence',
      link: 'https://cs50.harvard.edu/certificates/8d382dfb-4d91-4b2b-a30d-c01fd780c5fa'
    },
    {
      id: 'naycol',
      title: 'Nayland College Certificates',
      issuer: 'Nayland College',
      date: '2025',
      description: '#1 Computer Science, #1 Periodic Table Competition, International Committee, Final Report',
      link: '/cert/naycol'
    },
    // Add more certificates here
  ];

  return (
    <Section title="Certificates">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificates.map((cert) => (
          <Card
            key={cert.id}
            title={cert.title}
            subtitle={cert.issuer}
            date={cert.date}
            description={cert.description}
            href={cert.link.startsWith('/') ? undefined : cert.link}
            to={cert.link.startsWith('/') ? cert.link : undefined}
            linkText="View certificate"
          />
        ))}
      </div>
    </Section>
  );
}
