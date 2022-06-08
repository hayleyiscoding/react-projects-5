import ItemCart from "./itemCart";

export default function Cart() {
  return (
    <section>
      <div className='cart-close-icon'>
        <img src='/images/delete-icon.png' alt='' />
      </div>
      <div>
        <div>
          <img src='/images/cart-icon.png' alt='' />
          <div>4</div>
        </div>
        <div>
          <h2>Cart</h2>
        </div>
      </div>
      <div>
        <ItemCart />
        <ItemCart />
        <ItemCart />
      </div>
      <div>
        <h4>SUBTOTAL</h4>
        <div>
          <h4>$37.40</h4>
          <h5>Or up to 9 x $4.16</h5>
        </div>
      </div>
      <button type='button'></button>
    </section>
  );
}
