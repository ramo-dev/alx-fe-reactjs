import React from 'react'
import './App.css'
import AddRecipeForm from './components/AddRecipe'
import RecipeList from './components/RecipeList'

function App() {

  return (
    <>
      <RecipeList />
      <AddRecipeForm />
    </>
  )
}

export default App
