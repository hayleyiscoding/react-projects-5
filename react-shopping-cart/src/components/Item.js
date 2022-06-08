export default function Item({ item }) {
  const { title, price, installments, sku } = item;
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
      <hr />s<h2>${price}</h2>
      <h5>Or {installments} X $1.21</h5>
      <button type='button'>Add to cart</button>
    </article>
  );
}
