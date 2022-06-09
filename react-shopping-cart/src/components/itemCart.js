import { AiOutlineClose } from "react-icons/ai";

export default function ItemCart({ item }) {
  const { sku, title, price, size } = item;
  return (
    <section className='flex item_cart justify-between'>
      <div className='flex center flex-15'>
        <img src={`/images/products/${sku}-1-cart.webp`} alt={title} />
      </div>
      <div className='item_cart--details flex-65'>
        <h3>{title}</h3>
        <h4>{size} | Wine</h4>
        <h5>Quantity: 1</h5>
      </div>
      <div className='item_cart--price flex-15 text-right'>
        <AiOutlineClose className='item_cart--close' />
        <h3>$&nbsp;{price.toFixed(2)}</h3>
        <div>
          <button type='button' className='button_decrease'>
            -
          </button>
          <button type='button' className='button_increase'>
            +
          </button>
        </div>
      </div>
    </section>
  );
}
