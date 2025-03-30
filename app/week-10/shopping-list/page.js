"use client";

import ItemList from "./item-list.js";
import Link from "next/link";
import NewItem from "./new-item.js";
import { useState, useEffect } from "react";
import MealIdeas from "./meal-ideas.js";
import { useUserAuth } from "../_utils/auth-context.js";
import { getItems, addItem, deleteItem } from "../_services/shopping-list-service.js";

export default function Page() {
    const { user } = useUserAuth();

    const [data, setData] = useState([]);
    const [ingredient, setIngredient] = useState("");
    const [selected, setSelected] = useState(null);

    const handleAddItem = async (item) => {
        try {
            if (user?.uid) {
                const newItemId = await addItem(user.uid, item);
    
                // If the item was successfully added, update the state
                if (newItemId) {
                    const newItem = { ...item, id: newItemId };
                    setData([...data, newItem]);  // Update the state to include the new item
                }
            }
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    const handleDeleteItem = async (itemId) => {
        try {
            if (user?.uid && itemId) {
                await deleteItem(user.uid, itemId);
    
                setData(data.filter((item) => item.id !== itemId));
            }
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    const handleItemSelect = (item) => {
        setSelected(item);
        // Removes the data after the comma as its always not needed for the API call
        let name = item.name.split(',')[0].trim();

        // Optionally remove emojis and units if they exist
        name = name.replace(/[\u{1F300}-\u{1FAD6}]/gu, ''); // Remove emojis
        name = name.replace(/\s?\d+\s?(kg|g|L|ml|pack|dozen|lb)?/gi, '').trim(); // Remove quantities/units 

        setIngredient(name);
    }

    useEffect(() => {
        const loadItems = async () => {
            const items = await getItems(user?.uid);
            setData(items);
        }

        if (user) {
            loadItems();
        }
    }, [user]);

    if (!user) {
        return (
          <div>
            <h1>Please log in to access the shopping list.</h1>
            <Link href="/week-9">Go to Login Page</Link>
          </div>
        );
    }

    return (
        <main className="">
            <h1 className="font-bold text-5xl m-4 mb-10">Shopping List</h1>
            <div className="flex flex-row">
                <div>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={data} onSelect={handleItemSelect} selected={selected} />
                    {ingredient && (
                        <div className="m-4">
                            <button
                                onClick={() => handleDeleteItem(selected.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded-sm hover:bg-red-700"
                            >
                                Delete Item
                            </button>
                        </div>
                    )}
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
