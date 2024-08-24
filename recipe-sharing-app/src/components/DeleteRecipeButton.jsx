
import { useNavigate } from 'react-router-dom';
import useRecipeStore from "./recipeStore";

const DeleteButton = ({ id }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  function handleDelete() {
    deleteRecipe(id);
    navigate('/');
  }

  return (
    <button className="delete" onClick={handleDelete}>Delete</button>
  );
}

export default DeleteButton;

