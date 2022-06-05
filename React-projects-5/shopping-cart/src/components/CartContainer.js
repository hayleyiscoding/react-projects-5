import CartItem from "./CartItem";
import React from "react";

export default function CartContainer({ itemList, totalAmount, setItemList }) {
  function clearCart() {
    setItemList([]);
  }

  function totalCost() {
    let total = itemList.reduce((acc, cv) => {
      return acc + cv.amount * cv.price;
    }, 0);
    return total.toFixed(2);
  }

  return (
    <section className='cart'>
      <div>
        {itemList.map((item) => {
          return (
            <CartItem
              {...item}
              totalAmount={totalAmount}
              itemList={itemList}
              setItemList={setItemList}
            />
          );
        })}
      </div>
      <div>
        <hr />
        <div className='flex cart-total'>
          {" "}
          <h4>Total</h4>
          <h4>{totalCost()}</h4>
        </div>
      </div>
      <button type='submit' className='clear-btn' onClick={clearCart}>
        Clear Cart
      </button>
    </section>
  );
}
