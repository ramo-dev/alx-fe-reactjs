// RecipeList component
import { Link } from "react-router-dom";
import useRecipeStore from './recipeStore';




const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);


  return (
    <div >
      {recipes.length > 0 ? (
        recipes.map(recipe => (
          <div key={recipe.id} className="recipes ">
            <Link to={`/${recipe.id}`}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </Link>
          </div>
        ))
      ) : <p>No recipes available</p>}
    </div>
  )
};


export default RecipeList;

