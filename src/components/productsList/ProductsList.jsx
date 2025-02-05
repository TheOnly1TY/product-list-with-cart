import { useState, useEffect } from 'react';
import { Product } from './Product';
import Productdata from '../data.json';
import { ProductDescription } from './ProductDescription';
import { useWindowWidth } from '../../customHooks/useWindowWidth';

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
  // const { image } = product;
  const screenSizes = useWindowWidth();

  return (
    <div className="relative">
      <figure>
        <img
          src={product.image[screenSizes]}
          className={`w-full rounded-[0.5rem] ${displayCounter && 'border-2 border-red'}`}
          alt="product img"
        />
      </figure>

      <button
        onClick={() => addProduct(product)}
        className={`absolute top-full left-1/2 transform translate-[-50%] w-40 h-[2.75rem] rounded-full ${!displayCounter ? 'addBtnStyles' : 'bg-red'}`}
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
    <button
      onClick={() => onDisplayCounter(!displayCounter)}
      className="flex justify-center items-center w-full h-full gap-0.5 text-primary-rose hover:text-red duration-100 cursor-pointer"
    >
      <img src="/images/icon-add-to-cart.svg" alt="add-to-cart_icon" />
      <p className="text-sm font-semibold">Add to cart</p>
    </button>
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
      <button
        className="group circle hover:bg-white "
        onClick={handleDecrementCount}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="2"
          fill="none"
          viewBox="0 0 10 2"
        >
          <path
            className="fill-white group-hover:fill-red"
            d="M0 .375h10v1.25H0V.375Z"
          />
        </svg>
      </button>

      <p className="text-sm text-white font-semibold">{count}</p>

      <button
        className="group circle hover:bg-white "
        onClick={handleIncrementCount}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            className="fill-white group-hover:fill-red"
            d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
          />
        </svg>
      </button>
    </div>
  );
}
