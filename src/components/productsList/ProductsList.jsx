import { useState, useEffect } from 'react';
import { Product } from './Product';
import Productdata from '../data.json';
import { ProductDescription } from './ProductDescription';

export function ProductsList({ addProduct }) {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    setAllProducts(Productdata);
  }, []);

  return (
    <div className="max-w-full md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-8">
      {allProducts.map((product, i) => (
        <Product key={i}>
          <ProductImageWithButton product={product} addProduct={addProduct} />
          <ProductDescription product={product} />
        </Product>
      ))}
    </div>
  );
}

function ProductImageWithButton({ product, addProduct }) {
  const [displayCounter, setDisplayCounter] = useState(false);
  function handleCounterDisplay() {
    setDisplayCounter(true);
    addProduct(product);
  }

  return (
    <div className="relative">
      <figure>
        <img
          src={product.image.desktop}
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
  const [count, setCount] = useState(1);

  // fixing issues of working changing the state back to false after 1
  const handleDecrementCount = () => {
    setCount((count) => count - 1);
  };

  const handleIncrementCount = () => {
    setCount((count) => count + 1);
  };
  return (
    <div className="flex justify-between items-center mx-4">
      <span className="circle" onClick={handleDecrementCount}>
        <img src="images/icon-decrement-quantity.svg" alt="decrement icon" />
      </span>
      <p className="text-sm text-white font-semibold">{count}</p>
      <span className="circle" onClick={handleIncrementCount}>
        <img src="images/icon-increment-quantity.svg" alt="increment icon" />
      </span>
    </div>
  );
}
