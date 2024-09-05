import { Link } from "react-router-dom";
import { ImageConstant } from "../config";

export const Card = ({ productData }) => {
  const { category, title, image, rating, price, description, id } =
    productData;
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
        <img
          className="rounded-t-lg w-full h-48 object-cover mb-4"
          src={image}
          alt={title}
        />
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-500">Loaction: {description}</p>
        <p className="mb-3 font-normal text-gray-500">
         {category}
        </p>
        <p className="mb-3 font-normal text-gray-500">Cost: {price}</p>
        <p className="mb-3 font-normal text-gray-500">Rating: {rating.rate}</p>
        <p className="mb-3 font-normal text-gray-500">Count: {rating.count}</p>
        <Link
          to={`/product/${id}`}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          View Details
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
