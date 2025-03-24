"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }){
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    const randomID = (length) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = chars.length;
          
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charactersLength);
            result += chars.charAt(randomIndex);
        }
          
        return result;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let item = {
            id: randomID(18),
            name: name,
            quantity: quantity,
            category: category
        };

        onAddItem(item);
        console.log(item);
        setQuantity(1);
        setName("");
        setCategory("Produce");
    }

    const increment = () => {
        if(quantity < 20){
            setQuantity(quantity + 1);
        } else {
            alert("Maximum Quantity Reached")
        }
    };

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1);
        } else {
            alert("Minimum Quantity Reached")
        }
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    return(
        <main className="flex justify-start w-full">
            <form onSubmit={handleSubmit} className="p-4 m-4 bg-slate-800 max-w-sm w-full rounded-md">

                <div className="mb-2">
                    {/* Name Input */}
                    <input 
                        type="text" 
                        id="name"
                        placeholder="Item Name"
                        value={name} 
                        onChange={handleNameChange} 
                        className="w-full my-1 border-2 border-slate-500 p-2 rounded-md text-black"
                        required
                    />                
                </div>


                <div className="flex justify-between">
                    {/* Quantity Input */}
                    <div className="bg-slate-200 border-2 border-slate-500 rounded-md w-36 my-1 p-1">
                        <div className="flex justify-between">
                            <p className="text-black py-2 px-4">{quantity}</p>
                            <div className="flex mr-1">
                                <button
                                onClick={(event) => {
                                    event.preventDefault();
                                    increment();
                                }}
                                className="bg-blue-500 rounded-sm my-2 mx-1 px-1 text-white hover:bg-blue-900 w-8"
                                >
                                    +
                                </button>
                                <button
                                onClick={(event) => {
                                    event.preventDefault();
                                    decrement();
                                }}
                                className="bg-red-500 rounded-sm my-2 mx-1 px-1 text-white hover:bg-red-900 w-8"
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Category Input */}
                    <select 
                        id="category" 
                        value={category} 
                        onChange={handleCategoryChange}
                        className="border-2 border-slate-500 p-2 rounded-md text-black"
                    >
                        <option value="produce" defaultValue>Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>    
                </div>
                
                
                {/* Submit Button */}
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white mt-4 p-1 rounded-sm w-full"
                >
                    Add Item
                </button>
            </form>
        </main>
    );
}