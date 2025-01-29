"use client";

import { useState } from "react";

export default function StudentInfo() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const resetCount = () => {
        setCount(0);
    };

    return(
        <main>
            <p>{count}</p>
            <button
            onClick={increment}
            className="bg-blue-500 rounded-sm m-1 p-1 text-white"
            >
                Increment
            </button>
            <br/>
            <button
            onClick={resetCount}
            className="bg-red-500 rounded-sm m-1 p-1 text-white"
            >
                Reset Count
            </button>
        </main>
    );
}