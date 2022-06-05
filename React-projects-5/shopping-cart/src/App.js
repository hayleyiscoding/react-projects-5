import { FaShoppingCart } from "react-icons/fa";
import CartContainer from "./components/CartContainer";
import React from "react";

export default function App() {
  const url = "https://course-api.com/react-useReducer-cart-project";

  const [itemList, setItemList] = React.useState(null);

  function totalAmount() {
    let amountOfItemsInCart = itemList.reduce((acc, cv) => {
      return acc + cv.amount;
    }, 0);
    return amountOfItemsInCart;
  }

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItemList(data));
  }, []);

  if (!itemList) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className='container '>
      <header className='flex center'>
        <h1>Shopping Cart</h1>
        <div className='nav-container cart-icon'>
          <FaShoppingCart />
          <div className='amount-container'>{totalAmount()}</div>
        </div>
      </header>
      <main>
        <h2 className='text-center'>Your Bag</h2>
        {itemList.length === 0 ? (
          <h3>is currently empty</h3>
        ) : (
          <CartContainer
            itemList={itemList}
            totalAmount={totalAmount}
            setItemList={setItemList}
          />
        )}
      </main>
    </div>
  );
}
