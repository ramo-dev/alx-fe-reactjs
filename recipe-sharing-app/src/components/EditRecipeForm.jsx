
import { useState, useEffect } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ id }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === id)
  );

  const [title, setTitle] = useState(recipe ? recipe.title : '');
  const [description, setDescription] = useState(recipe ? recipe.description : '');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(id, title, description);

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;

