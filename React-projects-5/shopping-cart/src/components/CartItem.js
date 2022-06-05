import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function CartItem(props) {
  const { title, price, img, amount, id, totalAmount, itemList, setItemList } =
    props;

  function removeItem() {
    setItemList(() => itemList.filter((item) => item.id !== id));
  }

  function increaseAmount() {
    let updatedList = itemList.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setItemList(updatedList);
  }

  function decreaseAmount() {
    let updatedList = itemList.map((item) => {
      if (item.id === id && item.amount > 0) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    setItemList(updatedList);
  }

  return (
    <article className='flex justify-between'>
      <div className='cart-item'>
        <img src={img} alt={title} />
      </div>
      <div>
        <h5>{title}</h5>
        <h6>{price}</h6>
        <button className='remove-btn' type='button' onClick={removeItem}>
          Remove
        </button>
      </div>
      <div>
        <button type='button' className='amount-btn' onClick={increaseAmount}>
          {" "}
          <FaArrowUp />
        </button>
        <h6>{amount}</h6>
        <button
          type='button'
          className='amount-btn'
          onClick={amount === 1 ? removeItem : decreaseAmount}
        >
          <FaArrowDown />
        </button>
      </div>
    </article>
  );
}
