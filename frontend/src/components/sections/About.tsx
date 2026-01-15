import Section from '../common/Section';
import Card from '../common/Card';

export default function About() {
  const techStacks = [
    { id: 'frontend', title: 'Frontend', description: 'React & Tailwind' },
    { id: 'backend', title: 'Backend', description: 'Node.js & Firebase or Supabase' },
    { id: 'hardware', title: 'Hardware', description: 'ESP32-S3 & Arduino' },
  ];

  return (
    <Section title="About Me">
      <p className="text-center text-white text-lg leading-relaxed mb-16 max-w-2xl mx-auto">
        Hi, I'm Tim. I was born in Germany, grew up mostly in Switzerland, and finished school in 2026 in New Zealand. I'm looking for a full-stack developer role before starting university in September/October 2026, and I plan to keep working while studying.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {techStacks.map((stack) => (
          <Card
            key={stack.id}
            title={stack.title}
            description={stack.description}
          />
        ))}
      </div>
    </Section>
  );
}
