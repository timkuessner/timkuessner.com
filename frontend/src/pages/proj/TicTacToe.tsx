import { Link } from 'react-router-dom';

export default function TicTacToe() {
    return (
        <div className="min-h-screen bg-black text-white p-8 pt-32">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="text-neutral-400 hover:text-white transition-colors mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-bold mb-4">Tic Tac Toe</h1>
                <p className="text-neutral-400">Project details coming soon...</p>
            </div>
        </div>
    );
}
