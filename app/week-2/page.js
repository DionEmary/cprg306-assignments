import Title from "./title.js";

export default function Page() {
    let a = 5;
    let b = 10;
    
    return(
        <main>
            <Title /> // Imports and Uses the Title.js File and Function
            <p>
                The sum of {a} and {b} is {a + b}
            </p>
        </main>
    )
}