import Section from '../common/Section';
import Card from '../common/Card';

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
    <Section title="Education">
      <div className="space-y-4">
        {educationItems.map((item) => (
          <Card
            key={item.id}
            title={item.institution}
            tags={item.tags}
            date={item.period}
            description={item.description}
            to={`/edu/${item.id}`}
            linkText="View details"
          />
        ))}
      </div>
    </Section>
  );
}
