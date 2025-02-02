import { useState, useEffect } from 'react';
import { Product } from './Product';
import Productdata from '../data.json';
import { ProductDescription } from './ProductDescription';

export function ProductsList({
  addProduct,
  updateProductQuantity,
  displayCounter,
  setDisplayCounter,
}) {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    setAllProducts(Productdata);
  }, []);

  return (
    <div className="max-w-full md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-8">
      {allProducts.map((product, i) => (
        <Product key={i}>
          <ProductImageWithButton
            product={product}
            addProduct={addProduct}
            updateProductQuantity={updateProductQuantity}
            displayCounter={displayCounter[product.name] || false}
            setDisplayCounter={(state) =>
              setDisplayCounter((prev) => ({ ...prev, [product.name]: state }))
            }
          />
          <ProductDescription product={product} />
        </Product>
      ))}
    </div>
  );
}

function ProductImageWithButton({
  product,
  addProduct,
  updateProductQuantity,
  displayCounter,
  setDisplayCounter,
}) {
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
        onClick={() => addProduct(product)}
        className={`absolute top-full left-1/2 transform translate-[-50%] w-40 h-[2.75rem] rounded-full ${!displayCounter ? 'addBtnStyles' : 'bg-[#C73B0F]'}`}
      >
        {displayCounter ? (
          <CounterButton
            product={product}
            displayCounter={displayCounter}
            setDisplayCounter={setDisplayCounter}
            updateProductQuantity={updateProductQuantity}
          />
        ) : (
          <AddToCartButton
            displayCounter={displayCounter}
            onDisplayCounter={setDisplayCounter}
          />
        )}
      </button>
    </div>
  );
}

function AddToCartButton({ displayCounter, onDisplayCounter }) {
  return (
    <div
      onClick={() => onDisplayCounter(!displayCounter)}
      className="flex justify-center items-center w-full h-full gap-0.5"
    >
      <img src="/images/icon-add-to-cart.svg" alt="add-to-cart_icon" />
      <p className="text-sm text-primary font-semibold">Add to cart</p>
    </div>
  );
}

function CounterButton({ product, updateProductQuantity }) {
  const [count, setCount] = useState(1);
  useEffect(() => {
    updateProductQuantity(product.name, count);
  }, [count]);

  function handleDecrementCount() {
    count >= 2 ? setCount((prevCount) => prevCount - 1) : null;
  }

  const handleIncrementCount = () => {
    setCount((nextCount) => nextCount + 1);
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
