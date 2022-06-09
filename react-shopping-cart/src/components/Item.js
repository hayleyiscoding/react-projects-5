import { useRef, useState } from "react";

export default function Item({ item, addToCart }) {
  const { title, price, installments, sku, id } = item;

  const priceContainer = useRef(null);

  let addDecimals = price.toFixed(2);
  let priceArray = addDecimals.split(".");
  let firstPrice = priceArray[0];
  let secondPrice = priceArray[1];

  return (
    <article className='item'>
      {/* <h5>{isFreeShipping}</h5> */}
      <img
        className='item--img'
        src={`/images/products/${sku}-1-product.webp`}
        alt={title}
      />
      {/* <img src={`/images/products/${sku}-2-product.webp`} /> */}
      <h3>{title}</h3>

      <hr />
      <h2 ref={priceContainer}>
        $<strong>{firstPrice}</strong>.{secondPrice}
      </h2>
      <h5>
        Or {installments} X <span>$1.21</span>
      </h5>
      <button
        type='button'
        className='btn'
        onClick={() => {
          addToCart(id);
        }}
      >
        Add to cart
      </button>
    </article>
  );
}
