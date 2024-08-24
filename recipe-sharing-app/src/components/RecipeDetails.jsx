
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );


  if (!recipe) {
    return (
      <div>
        Recipe not found
        <br />
        <Link to="/">Go home</Link>
      </div>
    )
  };
  return (
    <div>
      <div className=''>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
      </div>
      <div className='grp'>
        <EditRecipeForm id={recipeId} />
        <DeleteButton id={recipeId} />
      </div>
    </div>
  );
};

export default RecipeDetails;

