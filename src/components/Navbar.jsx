import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="w-full border-b bg-white sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <h1 className="text-2xl font-bold">
                    Harsh.dev
                </h1>

                <div className="flex gap-8">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/game">Game</Link>
                    <Link to="/contact">Contact</Link>
                </div>

            </div>

        </nav>
    );
}