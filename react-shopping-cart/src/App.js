import ItemContainer from "./components/ItemContainer";
import Sizes from "./components/Sizes";
import { useState } from "react";
import products from "./products";
import Cart from "./components/Cart";

export default function App() {
  const [items, setItems] = useState(products);
  const [cartIsShown, setCartIsShown] = useState(false);
  const [addedToCart, setAddedToCart] = useState([]);

  function showCart() {
    return setCartIsShown(!cartIsShown);
  }

  function addToCart(id) {
    setCartIsShown(true);
    items.find((item) => {
      if (item.id === id) {
        return setAddedToCart((prevItems) => [...prevItems, item]);
      }
    });
  }

  return (
    <main className='container'>
      <section className='main--cart_icon'>
        <button className='main--cart_img' onClick={showCart}>
          <img src='/images/cart-icon.png' alt='Cart icon' />
          <div className='cart-number flex center'>4</div>
        </button>
      </section>
      <section className='sizes'>
        <Sizes />
      </section>
      <section className='item_container'>
        {" "}
        <ItemContainer
          items={items}
          addToCart={addToCart}
          addedToCart={addedToCart}
        />
      </section>
      <section>
        {cartIsShown && <Cart showCart={showCart} addedToCart={addedToCart} />}
      </section>
    </main>
  );
}
