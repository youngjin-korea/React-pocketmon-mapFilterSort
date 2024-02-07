import mockItems from "./pokemons.json";
import { useState } from "react";

const Pokemon = ({ item, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(item.id);
  };
  return (
    <div>
      No.{item.id} {item.name}
      <button onClick={handleDeleteClick}>삭제</button>
    </div>
  );
};

function App() {
  const [items, setItems] = useState(mockItems);
  const [direction, setDirection] = useState(1);

  const handleAscClick = () => setDirection(1);
  const handleDescClick = () => setDirection(-1);
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const sortedItems = items.sort((a, b) => direction * (a.id - b.id));

  return (
    <div>
      <div>
        <button onClick={handleAscClick}>오름차순</button>
        <button onClick={handleDescClick}>내림차순</button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            <Pokemon item={item} onDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
