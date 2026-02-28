import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex justify-center px-4 py-20">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-red-500 text-8xl md:text-9xl font-bold mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Страницата не е намерена
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="px-8 py-3 bg-primary text-white font-semibold rounded-lg btn-hover"
          >
            Начало
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;