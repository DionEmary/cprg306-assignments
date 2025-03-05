"use client";

import Item from "./item.js";
import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  // Create a sorted version of the items array, to avoid mutating the original array
  let sortedItems = [...items]; // Create a copy of the items array

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <main>
      <h2>Sort By:</h2>
      <button
        onClick={() => {
          setSortBy("name");
        }}
        className={`text-white p-1 m-2 w-28 ${
          sortBy === "name" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        Name
      </button>
      <button
        onClick={() => {
          setSortBy("category");
        }}
        className={`text-white p-1 m-2 w-28 ${
          sortBy === "category" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        Category
      </button>
      <ul className="mb-10">
        {sortedItems.map((item) => (
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
