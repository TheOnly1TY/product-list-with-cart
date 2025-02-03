import { OrderButton } from '../OrderButton';
import { OrderMessage } from './OrderMessage';
import { TotalPriceOrdered } from '../cart/TotalPriceOrdered';
import { OrderedProduct } from './OrderedProduct';

export function ConfirmationModal({
  addedProducts,
  calculateTotalPrice,
  reset,
}) {
  return (
    <>
      <div className="fixed top-25 w-full h-full bg-white py-10 px-6 rounded-t-xl z-20 md:top-1/2 md:left-1/2 md:translate-x-[-50%] md:translate-y-[-50%] md:w-[592px] md:h-auto md:rounded-xl">
        <OrderMessage />
        <div className="w-full bg-pale-rose p-6 my-8 rounded-[0.5rem]">
          <OrderedProduct addedProducts={addedProducts} />
          <TotalPriceOrdered calculateTotalPrice={calculateTotalPrice} />
        </div>
        <OrderButton handleOrderAction={reset}>Start New Order</OrderButton>
      </div>
      <div className="fixed top-0 left-0 w-full h-full bg-[#00000080] z-10"></div>
    </>
  );
}
