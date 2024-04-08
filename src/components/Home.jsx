// components/Home.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Parser } from 'html-to-react'
import './Home.css';

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes from Spoonacular API
    axios.get('https://api.spoonacular.com/recipes/random?apiKey=d71e056146ba4cb68ca2a1152f4669ce&number=10')
      .then(response => {
        setRecipes(response.data.recipes);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  }, []);

  return (
    <div class="bg-dark text-white">
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li  key={recipe.id}>
          
        <Link class="mb-3 btn btn-primary bg-black text-secondary-emphasis" to={`/recipe/${recipe.id}`}>{recipe.title}</Link> - <div class="blah bg-dark text-white">{Parser().parse(recipe.summary)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
