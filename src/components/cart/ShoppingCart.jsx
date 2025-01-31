import { AddedItems } from './AddedItems';
import { CartCarbonNeutralMessage } from './CartCarbonNeutralMessage';
import { EmptyCart } from './EmptyCart';
import { OrderButton } from '../OrderButton';
import { TotalPriceOrdered } from './TotalPriceOrdered';

export function ShoppingCart({ addedProducts }) {
  return (
    <div className="w-full min-h-[299px] bg-white rounded-[12px] p-6 lg:max-w-[384px]">
      <h3 className="text-2xl text-[#C73B0F] font-bold mb-6">
        Your Cart ({addedProducts.length})
      </h3>
      {addedProducts.length !== 0 ? (
        <>
          <AddedItems addedProducts={addedProducts} />
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
      <OrderButton>Confirm Order</OrderButton>
    </>
  );
}
