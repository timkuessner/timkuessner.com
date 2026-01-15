import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

type SquareValue = 'X' | 'O' | null;

export default function TicTacToe() {
    const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
    const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);
    const [isXNext, setIsXNext] = useState(true);
    const [gameMode, setGameMode] = useState<'PvP' | 'PvAI'>('PvAI');
    const [status, setStatus] = useState<string>('Next player: X');
    const [winningLine, setWinningLine] = useState<number[] | null>(null);

    const calculateWinner = useCallback((squares: SquareValue[]) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6]             // diagonals
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return { winner: squares[a], line: lines[i] };
            }
        }
        return null;
    }, []);

    const isBoardFull = useCallback((squares: SquareValue[]) => {
        return squares.every((square) => square !== null);
    }, []);

    // Minimax Algorithm
    const minimax = useCallback((board: SquareValue[], depth: number, isMaximizing: boolean): number => {
        const result = calculateWinner(board);
        if (result) {
            return result.winner === 'O' ? 10 - depth : depth - 10;
        }
        if (isBoardFull(board)) {
            return 0;
        }

        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < 9; i++) {
                if (board[i] === null) {
                    board[i] = 'O';
                    const score = minimax(board, depth + 1, false);
                    board[i] = null;
                    bestScore = Math.max(score, bestScore);
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < 9; i++) {
                if (board[i] === null) {
                    board[i] = 'X';
                    const score = minimax(board, depth + 1, true);
                    board[i] = null;
                    bestScore = Math.min(score, bestScore);
                }
            }
            return bestScore;
        }
    }, [calculateWinner, isBoardFull]);

    const getBestMove = useCallback((board: SquareValue[]) => {
        let bestScore = -Infinity;
        let move = -1;

        // Optimization: First move center if empty
        const emptySpots = board.filter(s => s === null).length;
        if (emptySpots === 9) return 4;

        for (let i = 0; i < 9; i++) {
            if (board[i] === null) {
                board[i] = 'O';
                const score = minimax(board, 0, false);
                board[i] = null;
                if (score > bestScore) {
                    bestScore = score;
                    move = i;
                }
            }
        }
        return move;
    }, [minimax]);

    // AI Turn Handling
    useEffect(() => {
        const result = calculateWinner(squares);
        if (result || isBoardFull(squares)) return;

        if (gameMode === 'PvAI' && !isXNext) {
            const timer = setTimeout(() => {
                const bestMove = getBestMove([...squares]);
                if (bestMove !== -1) {
                    const nextSquares = [...squares];
                    nextSquares[bestMove] = 'O';
                    setSquares(nextSquares);
                    setIsXNext(true);
                }
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isXNext, gameMode, squares, getBestMove, calculateWinner, isBoardFull]);

    useEffect(() => {
        const result = calculateWinner(squares);
        if (result) {
            setStatus(`Winner: ${result.winner}`);
            setWinningLine(result.line);
        } else if (isBoardFull(squares)) {
            setStatus('Draw!');
            setWinningLine(null);
        } else {
            setStatus(`Next player: ${isXNext ? 'X' : 'O'}`);
            setWinningLine(null);
        }
    }, [squares, isXNext, calculateWinner, isBoardFull]);

    const handleClick = (i: number) => {
        if (squares[i] || calculateWinner(squares)) return;
        if (gameMode === 'PvAI' && !isXNext) return;

        const nextSquares = [...squares];
        nextSquares[i] = isXNext ? 'X' : 'O';
        setSquares(nextSquares);
        setIsXNext(!isXNext);
    };

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
        setWinningLine(null);
    };

    const hasWinner = !!calculateWinner(squares);

    return (
        <div className="min-h-screen bg-black text-white p-8 pt-32 flex flex-col items-center">
            <div className="max-w-md w-full">
                <Link to="/" className="text-neutral-400 hover:text-white transition-colors mb-8 inline-block">
                    ← Back to Home
                </Link>

                <h1 className="text-4xl font-bold mb-2 text-center">Tic Tac Toe</h1>
                <p className="text-neutral-400 text-center mb-8">
                    {gameMode === 'PvAI' ? 'Unbeatable AI' : 'Player vs Player'}
                </p>

                <div className="flex justify-center gap-4 mb-8">
                    <button
                        onClick={() => { setGameMode('PvAI'); resetGame(); }}
                        className={`px-4 py-2 rounded-lg transition-colors ${gameMode === 'PvAI' ? 'bg-white text-black font-bold' : 'bg-neutral-800 text-neutral-400'}`}
                    >
                        Vs AI
                    </button>
                    <button
                        onClick={() => { setGameMode('PvP'); resetGame(); }}
                        className={`px-4 py-2 rounded-lg transition-colors ${gameMode === 'PvP' ? 'bg-white text-black font-bold' : 'bg-neutral-800 text-neutral-400'}`}
                    >
                        2 Players
                    </button>
                </div>

                <div className="bg-neutral-900 p-6 rounded-2xl border-2 border-neutral-800 shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-3 gap-2 mb-6 w-full">
                        {squares.map((value, i) => {
                            const showPreview = hoveredSquare === i && !value && !hasWinner && (gameMode === 'PvP' || isXNext);
                            return (
                                <button
                                    key={i}
                                    onClick={() => handleClick(i)}
                                    onMouseEnter={() => setHoveredSquare(i)}
                                    onMouseLeave={() => setHoveredSquare(null)}
                                    className={`
                                        w-full aspect-square text-4xl font-bold rounded-xl transition-all duration-200 flex items-center justify-center
                                        ${value ? 'bg-neutral-800' : 'bg-neutral-900 hover:bg-neutral-800'}
                                        ${winningLine?.includes(i) ? 'ring-4 ring-green-500 bg-green-900/20' : ''}
                                        ${value === 'X' ? 'text-blue-400' : value === 'O' ? 'text-red-400' : 'text-neutral-700'}
                                    `}
                                    disabled={!!value || (gameMode === 'PvAI' && !isXNext) || hasWinner}
                                >
                                    {value || (showPreview ? (isXNext ? 'X' : 'O') : '')}
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-xl font-medium">{status}</div>
                        <button
                            onClick={resetGame}
                            className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors text-sm font-medium"
                        >
                            Reset Game
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
