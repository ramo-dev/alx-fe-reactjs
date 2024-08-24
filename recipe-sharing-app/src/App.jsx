import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<>
            <RecipeList /><AddRecipeForm />
          </>} />
          <Route path="/:id" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
