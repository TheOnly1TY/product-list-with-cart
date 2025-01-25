import { useState, useEffect } from 'react';
import { Product } from './Product';
import Productdata from '/public/data.json';
import { ProductDescription } from './ProductDescription';

export function ProductsList() {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    setAllProducts(Productdata);
  }, []);

  return (
    <div className="max-w-full">
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
  const dummy = 'cart';
  return (
    <div className="relative">
      <figure>
        <img
          src={product.image.mobile}
          className="w-full rounded-[0.5rem]"
          alt="product img"
        />
      </figure>

      <button
        className={`absolute top-full left-1/2 transform translate-[-50%] w-40 h-[2.75rem] rounded-full ${dummy === 'cart' ? 'addBtnStyles' : 'bg-[#C73B0F]'}`}
      >
        <AddToCartButton />
      </button>
    </div>
  );
}
function AddToCartButton() {
  return (
    <div className="flex justify-center items-center w-full h-full g-[4px]">
      <img src="/images/icon-add-to-cart.svg" alt="add-to-cart_icon" />
      <p className="text-base text-[#260F08] font-semibold">Add to cart</p>
    </div>
  );
}
