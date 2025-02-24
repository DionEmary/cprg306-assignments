"use client";

import { useState } from "react";

export default function StudentInfo() {
    const [quantity, setQuantity] = useState(1);

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

    const resetCount = () => {
        setQuantity(1);
    };

    return(
        <main>
            <div className="flex bg-slate-200 rounded-sm p-2">
                <p className="text-black py-2 px-4">{quantity}</p>
                <button
                onClick={increment}
                className="bg-blue-500 rounded-sm m-1 p-1 text-white hover:bg-blue-900 w-8"
                >
                    +
                </button>
                <button
                onClick={decrement}
                className="bg-blue-500 rounded-sm m-1 p-1 text-white hover:bg-blue-900 w-8"
                >
                    -
                </button>
                <button
                onClick={resetCount}
                className="bg-red-500 rounded-sm m-1 p-1 text-white hover:bg-red-900"
                >
                    Reset Count
                </button>
            </div>
        </main>
    );
}