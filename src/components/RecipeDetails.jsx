// components/RecipeDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch recipe details from Spoonacular API
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=d71e056146ba4cb68ca2a1152f4669ce`)
      .then(response => {
        setRecipe(response.data);
      })
      .catch(error => {
        console.error('Error fetching recipe details:', error);
      });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div class="bg-dark text-white">
      <h2>{recipe.title}</h2>
      <img class="object-fit-fill border rounded" src={recipe.image} alt={recipe.title} />
      <h3>Ingredients</h3>
      <ul class="list-group ">
        {recipe.extendedIngredients.map(ingredient => (
          <li class="list-group-item bg-dark text-white" key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <div dangerouslySetInnerHTML={{ __html: recipe.instructions }}></div>
    </div>
  );
}

export default RecipeDetails;
