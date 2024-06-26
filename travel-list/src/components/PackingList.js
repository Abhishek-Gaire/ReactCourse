import { useState } from "react";
import Item  from "./Item";

export default function PackingList({ items, onDeleteItems, onToggleItems, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return <Item item={item} onToggleItem={onToggleItems} onDeleteItem={onDeleteItems} key={item.id} />;
        })}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value='input'>Sort By Input Order</option>
          <option value='description'>Sort By Description</option>
          <option value='packed'>Sort By Packed Status</option>
        </select>
      </div>
      <button onClick={onClearItems}>Clear List</button>
    </div>
  );
}
