import Section from '../common/Section';
import Card from '../common/Card';

export default function Projects() {
    const projects = [
        {
            id: 'chess',
            title: 'Chess',
            date: '2026',
            description: 'A chess game with AI integration.',
            link: '/proj/chess'
        },
        {
            id: 'tictactoe',
            title: 'Tic Tac Toe',
            date: '2026',
            description: 'The classic game with unbeatable AI mode.',
            link: '/proj/tictactoe'
        },
    ];

    return (
        <Section title="Projects" id="projects">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <Card
                        key={project.id}
                        title={project.title}
                        date={project.date}
                        description={project.description}
                        to={project.link}
                        linkText="View project"
                    />
                ))}
            </div>
        </Section>
    );
}
