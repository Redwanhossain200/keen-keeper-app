import { Link } from "react-router-dom";

const ErrorPage = () => (
  <div className="min-h-screen w-full flex flex-col items-center justify-center text-center px-4 bg-gray-50 fixed inset-0 z-9999">
    <h1 className="text-[150px] font-black text-[#244D3F] opacity-10 animate-pulse">404</h1>
    <div className="absolute flex flex-col items-center justify-center">
      <p className="text-2xl font-bold mt-4 text-gray-800">Oops! Page not found.</p>
      <p className="text-gray-500 mt-2 max-w-sm">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="btn bg-[#244D3F] text-white hover:bg-[#1a3a2f] border-none mt-8 rounded-2xl transition-all py-6 px-8 text-lg font-semibold"
      >
        Back to Dashboard
      </Link>
    </div>
  </div>
);

export default ErrorPage;