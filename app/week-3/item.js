export default function Item({name, quantity, category}) {
    return(
        <li className="">
            <h2>{name}</h2>
            <p>Buy {quantity} in {category}</p>
        </li>
    );
}