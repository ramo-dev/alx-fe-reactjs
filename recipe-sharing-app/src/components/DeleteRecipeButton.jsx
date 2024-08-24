import useRecipeStore from "./recipeStore";

const DeleteButton = ({ id }) => {

  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);


  function handleDelete() {
    deleteRecipe(id);
  }



  return (
    <button className="delete" onClick={handleDelete}>Delete</button>
  )
}


export default DeleteButton;
