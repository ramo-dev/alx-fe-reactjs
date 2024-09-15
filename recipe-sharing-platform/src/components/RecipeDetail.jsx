import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipe = Data.find((recipe) => recipe.id === Number(id));
    setRecipe(recipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-xl text-gray-600">Recipe not found</div>;
  }

  return (
    <div className="flex justify-center items-start py-10 bg-gray-50 min-h-screen">
      <div className="max-w-2xl w-full p-8 bg-white rounded-lg shadow-lg">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg" />
        <h2 className="text-3xl font-bold text-gray-800 mt-6">{recipe.title}</h2>
        <p className="text-lg text-gray-700 mt-4">{recipe.summary}</p>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800">Ingredients:</h3>
          <p className="text-lg text-gray-700 mt-2">{recipe.ingredients}</p>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800">Preparation Steps:</h3>
          //<p className="text-lg text-gray-700 mt-2">{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
