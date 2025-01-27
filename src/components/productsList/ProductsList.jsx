import { useState, useEffect } from 'react';
import { Product } from './Product';
import Productdata from '../data.json';
import { ProductDescription } from './ProductDescription';

export function ProductsList() {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    setAllProducts(Productdata);
  }, []);

  return (
    <div className="max-w-full md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-8">
      {allProducts.map((product, i) => (
        <Product key={i}>
          <ProductImageWithButton product={product} />
          <ProductDescription product={product} />
        </Product>
      ))}
    </div>
  );
}

function ProductImageWithButton({ product }) {
  const [displayCounter, setDisplayCounter] = useState(false);
  function handleCounterDisplay() {
    setDisplayCounter(true);
  }
  return (
    <div className="relative">
      <figure>
        <img
          src={product.image.tablet}
          className={`w-full rounded-[0.5rem] ${displayCounter && 'border-2 border-red'}`}
          alt="product img"
        />
      </figure>

      <button
        onClick={handleCounterDisplay}
        className={`absolute top-full left-1/2 transform translate-[-50%] w-40 h-[2.75rem] rounded-full ${!displayCounter ? 'addBtnStyles' : 'bg-[#C73B0F]'}`}
      >
        {displayCounter ? <CounterButton /> : <AddToCartButton />}
      </button>
    </div>
  );
}
function AddToCartButton() {
  return (
    <div className="flex justify-center items-center w-full h-full gap-0.5">
      <img src="/images/icon-add-to-cart.svg" alt="add-to-cart_icon" />
      <p className="text-sm text-primary font-semibold">Add to cart</p>
    </div>
  );
}

function CounterButton() {
  return (
    <div className="flex justify-between items-center mx-4">
      <span className="circle">
        <img src="images/icon-decrement-quantity.svg" alt="decrement icon" />
      </span>
      <p className="text-sm text-white font-semibold">1</p>
      <span className="circle">
        <img src="images/icon-increment-quantity.svg" alt="increment icon" />
      </span>
    </div>
  );
}
