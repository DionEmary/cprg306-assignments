import StudentInfo from "./student-info.js"
import Link from "next/link";

export default function Page() {
    return(
        <main>
            <h1>Shopping List</h1>
            <StudentInfo />
            <br/>
            <Link href="/" className="bg-black text-white m-1 p-1 rounded-sm">Back</Link>
        </main>
    );
}