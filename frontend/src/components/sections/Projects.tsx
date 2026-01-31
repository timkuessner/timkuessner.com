import Section from '../common/Section';
import Card from '../common/Card';

export default function Projects() {
    const projects = [
        {
            id: 'tictactoe',
            title: 'Tic Tac Toe',
            date: '2026',
            description: 'Tic Tac Toe with unbeatable AI mode.',
            link: '/proj/tictactoe'
        },
        {
            id: 'rust-chess',
            title: 'Chess',
            date: 'In Progress',
            description: 'Chess engine built in Rust.',
            link: 'https://github.com/timkuessner/rust-chess'
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
