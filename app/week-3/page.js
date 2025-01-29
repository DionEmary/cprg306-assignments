import ItemList from "./item-list.js"
import Link from "next/link";

export default function Page() {
    return(
        <main>
            <h1>Shopping List</h1>
            <ItemList />
            <br/>
            <Link href="/" className="bg-gray-500 text-white m-1 p-1 rounded-sm w-1/8">Back</Link>
        </main>
    );
}