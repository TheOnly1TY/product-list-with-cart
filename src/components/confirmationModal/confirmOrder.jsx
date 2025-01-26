import { OrderButton } from '../OrderButton';
import { OrderMessage } from './OrderMessage';
import { TotalPriceOrdered } from '../cart/TotalPriceOrdered';
import { OrderedProduct } from './OrderedProduct';

export function ConfirmationModal() {
  return (
    <>
      <div className="fixed top-25 w-full h-full bg-white py-10 px-6 rounded-t-xl z-20 md:top-1/2 md:left-1/2 md:translate-x-[-50%] md:translate-y-[-50%] md:w-[592px] md:h-auto md:rounded-xl">
        <OrderMessage />
        <div className="w-full bg-[#FCF8F6] p-6 my-8 ">
          <OrderedProduct />
          <TotalPriceOrdered />
        </div>
        <OrderButton>Start New Order</OrderButton>
      </div>
      <div className="fixed top-0 left-0 w-full h-full bg-[#00000080] z-10"></div>
    </>
  );
}
