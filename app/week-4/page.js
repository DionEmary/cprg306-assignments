import Link from "next/link";
import Counter from "./counter.js"

export default function Page() {
    return(
        <main>
            <h1>Counter</h1>
            <Counter />
            <br/>
            <Link href="/" className="bg-black text-white m-1 p-1 rounded-sm">Back</Link>
        </main>
    );
}