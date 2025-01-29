import Link from "next/link";
import NewItem from "./new-item.js"

export default function Page() {
    return(
        <main>
            <div className="flex justify-center">
                <NewItem />    
            </div>
            <br/>
            <Link href="/" className="bg-gray-500 text-white m-1 p-1 rounded-sm w-1/8">Back</Link>
        </main>
        
    );
}