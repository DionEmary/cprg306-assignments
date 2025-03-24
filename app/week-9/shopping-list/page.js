"use client";

import ItemList from "./item-list.js"
import Link from "next/link";
import NewItem from "./new-item.js";
import ItemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas.js";

export default function Page() {
    const [data, setData] = useState(ItemsData);
    const [ingredient, setIngredient] = useState("");

    const addItem = (item) => {
        setData([...data, item]);
    }

    const handleItemSelect = (item) => {
        // Removes the data after the comma as its always not needed for the API call
        let name = item.name.split(',')[0].trim();

        // Optionally remove emojis and units if they exist
        name = name.replace(/[\u{1F300}-\u{1FAD6}]/gu, ''); // Remove emojis
        name = name.replace(/\s?\d+\s?(kg|g|L|ml|pack|dozen|lb)?/gi, '').trim(); // Remove quantities/units 

        setIngredient(name);
    }

    return(
        <main className="">
            <h1 className="font-bold text-5xl m-4 mb-10">Shopping List</h1>
            <div className="flex flex-row">
                <div>
                    <NewItem onAddItem={addItem} />
                    <ItemList items={data} onSelect={handleItemSelect}/>
                </div>
                <MealIdeas ingredient={ingredient} />
            </div>
            <Link 
            href="/" 
            className="
            bg-gray-500 text-white 
            m-6 px-4 py-2 rounded-sm 
            hover:bg-red-500 hover:text-black transition"
            >
                Back
            </Link>
        </main>
    );
}