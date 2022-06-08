import Item from "./Item";

export default function ItemContainer({ items }) {
  return (
    <div>
      <h3>16 Product(s) found</h3>
      <ul className='item_container--list'>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <Item item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
