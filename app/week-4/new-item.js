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
            <div>
                <p>{quantity}</p>
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
            </div>

            <button
            onClick={resetCount}
            className="bg-red-500 rounded-sm m-1 p-1 text-white hover:bg-red-900"
            >
                Reset Count
            </button>
        </main>
    );
}