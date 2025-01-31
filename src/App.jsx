import { useState } from 'react';
import { ProductsList } from './components/productsList/ProductsList';
import { LogoName } from './components/LogoName';
import { ShoppingCart } from './components/cart/ShoppingCart';
// import { ConfirmationModal } from './components/confirmationModal/confirmOrder';
export default function App() {
  const [addedProducts, setAddedProducts] = useState([]);

  function addProduct(newProduct) {
    const existingProduct = addedProducts.find(
      (cartProduct) => cartProduct.name === newProduct.name
    );

    if (existingProduct) return;
    setAddedProducts((products) => [
      ...products,
      { ...newProduct, quantity: 1 },
    ]);
  }

  return (
    <>
      <div className="flex flex-col m-6 lg:flex-row lg:items-start lg:my-[5.5rem] md:mx-10 md:gap-8">
        <div>
          <LogoName />
          <ProductsList addProduct={addProduct} />
        </div>
        <ShoppingCart addedProducts={addedProducts} />
      </div>
      {/* <ConfirmationModal /> */}
    </>
  );
}
