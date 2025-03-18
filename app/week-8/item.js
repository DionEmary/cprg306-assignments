export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li className="py-2 px-4 bg-blue-950 m-6 rounded-md max-w-sm hover:bg-purple-800" onClick={onSelect}>
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p className="ml-2">Buy {quantity} in {category}</p>
        </li>
    );
}
