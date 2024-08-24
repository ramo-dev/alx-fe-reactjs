
import { create } from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(r => r.id !== id)
  })),
  updateRecipe: (id, title, description) => set(state => ({
    recipes: state.recipes.map(r => {
      if (r.id === id) {
        return { ...r, title, description };
      }
      return r;
    })
  }))
}));

export default useRecipeStore;

