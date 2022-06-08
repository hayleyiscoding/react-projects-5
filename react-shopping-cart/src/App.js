import ItemContainer from "./components/ItemContainer";
import Sizes from "./components/Sizes";
import { useEffect, useState } from "react";
import products from "./products";

export default function App() {
  const [items, setItems] = useState(products);

  return (
    <main className='container'>
      <section className='main--cart_icon'>
        <div className='main--cart_img'>
          <img src='/images/cart-icon.png' alt='Cart icon' />
          <div className='cart-number flex center'>
            <p>4</p>
          </div>
        </div>
      </section>
      <section className='sizes'>
        <Sizes />
      </section>
      <section className='item_container'>
        {" "}
        <ItemContainer items={items} />
      </section>
    </main>
  );
}
