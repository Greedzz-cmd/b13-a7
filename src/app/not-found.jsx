import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 text-center px-6">
      <h1 className="text-7xl font-bold mb-4 text-success-content">404</h1>

      <h2 className="text-2xl font-semibold mb-2">Page not found</h2>

      <p className="text-gray-500 mb-6">
        The page you’re looking for doesn’t exist or was removed.
      </p>

      <Link
        href="/"
        className="btn bg-success-content text-white border-none
                   transform transition-all duration-200
                   hover:bg-success-content
                   hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
      >
        Back to Home
      </Link>
    </div>
  );
}
