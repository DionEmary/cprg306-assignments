"use client";

import ItemList from "./item-list.js"
import Link from "next/link";
import NewItem from "./new-item.js";
import ItemsData from "./items.json";
import { useState } from "react";

export default function Page() {
    const [data, setData] = useState(ItemsData);

    const addItem = (item) => {
        setData([...data, item]);
    }

    return(
        <main className="">
            <h1 className="font-bold text-5xl m-4 mb-10">Shopping List</h1>
            <NewItem onAddItem={addItem} />
            <ItemList items={data}/>
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