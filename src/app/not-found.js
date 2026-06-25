import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white px-4">
            <FaExclamationTriangle className="text-7xl text-yellow-400 mb-6" />

            <h1 className="text-6xl font-bold mb-4">404</h1>

            <h2 className="text-3xl font-semibold mb-4">
                Page Not Found
            </h2>

            <p className="text-gray-400 text-center max-w-md mb-8">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>

            <Link
                href="/"
                className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition"
            >
                Back to Home
            </Link>
        </div>
    );
}