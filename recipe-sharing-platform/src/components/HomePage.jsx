import React from 'react';
import { useState, useEffect } from 'react';
import data from '../data.json';
import { Link, useNavigate } from 'react-router-dom';

const initialData = data;

const HomePage = () => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    setData(initialData);
  }, []);

  const navigate = useNavigate();

  const handleNav = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <>
      <h1 className="text-gray-800 text-4xl font-bold text-left lg:text-center mt-6 mb-10 px-4">
        Recipe Sharing App
      </h1>
      <ul className="px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((data) => (
          <li
            key={data.id}
            className="flex flex-col gap-6 p-6 bg-white border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl"
            onClick={() => handleNav(data.id)}
          >
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-60 object-cover rounded-lg"
            />
            <h2 className="text-gray-900 text-2xl font-semibold">
              {data.title}
            </h2>
            <p className="text-gray-700 text-lg">
              {data.summary}
            </p>
            <p className="text-gray-700 text-base">
              <span className="font-semibold">Ingredients:</span> {data.ingredients}
            </p>
            <p className="text-gray-700 text-base">
              <span className="font-semibold">Preparation Steps:</span> {data.instructions}
            </p>
            <Link
              to={`/recipe/${data.id}`}
              className="mt-4 py-3 bg-gray-900 text-white text-lg rounded-lg text-center hover:bg-gray-800 transition-colors duration-300"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
