import { ProductsList } from './components/productsList/ProductsList';
import { LogoName } from './components/LogoName';
import { ShoppingCart } from './components/cart/ShoppingCart';
// import { ConfirmationModal } from './components/confirmationModal/confirmOrder';
export default function App() {
  return (
    <>
      <div className="flex flex-col m-6 lg:flex-row lg:items-start lg:my-[5.5rem] md:mx-10 md:gap-8">
        <div>
          <LogoName />
          <ProductsList />
        </div>
        <ShoppingCart />
      </div>
      {/* <ConfirmationModal /> */}
    </>
  );
}
