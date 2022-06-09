import { useState } from "react";
import Item from "./Item";

export default function ItemContainer({ items, addToCart }) {
  return (
    <div>
      <h3 className='item_container--number'>16 Product(s) found</h3>
      <ul className='item_container--list'>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <Item item={item} addToCart={addToCart} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
