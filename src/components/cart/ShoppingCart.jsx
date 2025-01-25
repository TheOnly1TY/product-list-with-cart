import { AddedItems } from './AddedItems';
import { CartCarbonNeutralMessage } from './CartCarbonNeutralMessage';
import { EmptyCart } from './EmptyCart';
import { TotalPriceOrdered } from './TotalPriceOrdered';

export function ShoppingCart() {
  const dummy = 'Added';
  return (
    <div className="w-full  min-h-[299px] bg-white rounded-[12px] p-6">
      <h3 className="text-2xl text-[#C73B0F] font-bold mb-6">Your Cart (0)</h3>
      {dummy === 'Added' ? (
        <>
          <AddedItems />
          <CartItems />
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

function CartItems() {
  return (
    <>
      <TotalPriceOrdered />
      <CartCarbonNeutralMessage />

      {/* Reuseability */}
      <OrderButton>Confirm Order</OrderButton>
    </>
  );
}

// trying to fix why the children prop doesn't work😢
function OrderButton({ children }) {
  return (
    <button className="w-full h-[53px] text-base text-center text-white bg-[#C73B0F] rounded-full duration-100 cursor-pointer hover:bg-[#952c0b]">
      {children}
    </button>
  );
}
