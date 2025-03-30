"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        if (ingredient){ // Prevent API call if no ingredient is selected
            const fetchData = async () => {
                const meals = await fetchMealIdeas(ingredient);
                setMeals(meals);
            };
    
            fetchData();
        }
    }, [ingredient]);

    return (
        <div>
            <h3 className="text-xl font-bold">Meal Ideas</h3>
            <p>Meal Ideas for {ingredient}:</p>
            <ul className="">
                {meals.map(meal => (
                    <li className="p-2 m-1 bg-slate-900 max-w-sm rounded-sm" key={meal.idMeal}>
                        <h3>{meal.strMeal}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}

async function fetchMealIdeas(ingredient) {
    try {
        console.log(ingredient);
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        console.log(data);
        
        return data.meals || [];
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
    }
}

