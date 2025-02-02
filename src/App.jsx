import { useState } from 'react';
import { ProductsList } from './components/productsList/ProductsList';
import { LogoName } from './components/LogoName';
import { ShoppingCart } from './components/cart/ShoppingCart';
import { ConfirmationModal } from './components/confirmationModal/confirmOrder';

export default function App() {
  const [addedProducts, setAddedProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayCounter, setDisplayCounter] = useState({});

  const calculateTotalPrice = addedProducts
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2);

  const addProduct = (newProduct) => {
    setAddedProducts((products) => {
      const existingProduct = addedProducts.find(
        (cartProduct) => cartProduct.name === newProduct.name
      );

      if (existingProduct) {
        return products;
      }
      return [...products, { ...newProduct, quantity: 1 }];
    });
    setDisplayCounter((prev) => ({ ...prev, [newProduct.name]: true }));
  };

  const updateProductQuantity = (productName, newQuantity) => {
    setAddedProducts((products) =>
      products.map((product) =>
        product.name === productName
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  const handleDeleteProduct = (delProduct) => {
    setAddedProducts((addedProduct) =>
      addedProduct.filter((product) => product.name !== delProduct.name)
    );
    setDisplayCounter((prev) => ({ ...prev, [delProduct.name]: false }));
  };

  const reset = () => {
    setAddedProducts([]);
    setDisplayCounter({});
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col m-6 lg:flex-row lg:items-start lg:my-[5.5rem] md:mx-10 md:gap-8">
        <div>
          <LogoName />
          <ProductsList
            addProduct={addProduct}
            updateProductQuantity={updateProductQuantity}
            displayCounter={displayCounter}
            setDisplayCounter={setDisplayCounter}
          />
        </div>
        <ShoppingCart
          addedProducts={addedProducts}
          calculateTotalPrice={calculateTotalPrice}
          handleDeleteProduct={handleDeleteProduct}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
      {isModalOpen && (
        <ConfirmationModal
          addedProducts={addedProducts}
          calculateTotalPrice={calculateTotalPrice}
          reset={reset}
        />
      )}
    </>
  );
}
