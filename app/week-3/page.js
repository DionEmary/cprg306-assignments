import ItemList from "./item-list.js"
import Link from "next/link";

export default function Page() {
    return(
        <main className="">
            <h1 className="font-bold text-5xl m-4 mb-10">Shopping List</h1>
            <ItemList />
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