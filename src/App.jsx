import { useState } from 'react';
import { ProductsList } from './components/productsList/ProductsList';
import { LogoName } from './components/LogoName';
import { ShoppingCart } from './components/cart/ShoppingCart';
import { ConfirmationModal } from './components/confirmationModal/confirmOrder';

export default function App() {
  const [addedProducts, setAddedProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPrice = addedProducts.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

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
    // resetStates();
    setAddedProducts((addedProduct) =>
      addedProduct.filter((product) => product.name !== delProduct.name)
    );
  };

  return (
    <>
      <div className="flex flex-col m-6 lg:flex-row lg:items-start lg:my-[5.5rem] md:mx-10 md:gap-8">
        <div>
          <LogoName />
          <ProductsList
            addProduct={addProduct}
            handleDeleteProduct={handleDeleteProduct}
            updateProductQuantity={updateProductQuantity}
          />
        </div>
        <ShoppingCart
          addedProducts={addedProducts}
          totalPrice={totalPrice}
          handleDeleteProduct={handleDeleteProduct}
          setIsModalOpen={setIsModalOpen}
          setAddedProducts={setAddedProducts}
        />
      </div>
      {isModalOpen && (
        <ConfirmationModal
          addedProducts={addedProducts}
          totalPrice={totalPrice}
        />
      )}
    </>
  );
}
