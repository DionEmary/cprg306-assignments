"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        if (ingredient){ // Prevent API call if no ingredient is selected
            const fetchData = async () => {
                const meals = await fetchMealIdeas();
                setMeals(meals);
            };
    
            fetchData();
        }
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas for {ingredient}</h2>
            <ul>
                {meals.map(meal => (
                    <li key={meal.idMeal}>
                        <h3>{meal.strMeal}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        console.log(data);
        
        return data.meals || [];
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
    }
}

