export default function Item({ name, quantity, category, onSelect, isSelected }) {
    return (
        <li
            className={`py-2 px-4 m-6 rounded-md max-w-sm cursor-pointer ${
                isSelected ? 'bg-orange-500' : 'bg-blue-950 hover:bg-purple-800'
            }`}
            onClick={onSelect}
        >
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p className="ml-2">Buy {quantity} in {category}</p>
        </li>
    );
}
