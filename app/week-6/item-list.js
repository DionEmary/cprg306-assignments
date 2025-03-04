"use client";

import Item from "./item.js";
import { useState } from "react";
import itemData from "./items.json";

export default function ItemList() {
const [sortBy, setSortBy] = useState("name");

const items = [...itemData];

if(sortBy === "name"){
    items.sort((a, b) => a.name.localeCompare(b.name));
}
else if(sortBy === "category"){
    items.sort((a, b) => a.category.localeCompare(b.category));
}

    return(
        <main>
            <h2>Sort By:</h2>
            <button
              onClick={(event) => {
                setSortBy("name");
              }}
              className={`text-white p-1 m-2 w-28 ${
                sortBy === "name" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              Name
            </button>
            <button
              onClick={(event) => {
                setSortBy("category");
              }}
              className={`text-white p-1 m-2 w-28 ${
                sortBy === "category" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              Category
            </button>
            <ul className="mb-10">
              {items.map((item) => (
                <Item 
                  key={item.id}
                  name={item.name} 
                  quantity={item.quantity} 
                  category={item.category}
                />
              ))}
            </ul>
        </main>

    );
}