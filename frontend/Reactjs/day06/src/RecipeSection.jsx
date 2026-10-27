import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'

export default function RecipeSection() {
    const [recipes, setRecipes] = useState([]);

    async function fetchRecipes() {
        try {
            const response = await fetch("https://dummyjson.com/recipes");
            const data = await response.json();
            setRecipes(data.recipes);

        } catch (error) {
            setRecipes([]);
        }
    }


    useEffect(
        () => {
            fetchRecipes()
        },
        []
    )
    return (
        <div className='max-w-7xl p-4'>
            <h2 className='py-4 font-bold text-4xl'>Top Recipes</h2>
            <div className='grid grid-cols-4 gap-4'>
                {
                    recipes.map((data, index) => {
                        return <RecipeCard key={index} name={data.name} image={data.image} />
                    })
                }

            </div>
        </div>


    )
}
