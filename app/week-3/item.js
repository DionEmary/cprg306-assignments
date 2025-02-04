export default function Item({name, quantity, category}) {
    return(
        <li className="py-2 px-4 bg-blue-950 m-6 rounded-md max-w-sm">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p className="ml-2">Buy {quantity} in {category}</p>
        </li>
    );
}