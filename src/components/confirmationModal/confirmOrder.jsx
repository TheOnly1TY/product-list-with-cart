import { OrderButton } from '../OrderButton';
import { OrderMessage } from './OrderMessage';
export function ConfirmationModal() {
  return (
    <div className="w-full bg-blue-100 py-10 px-6">
      <OrderMessage />
      <OrderedProduct />
      <OrderButton>Start New Order</OrderButton>
    </div>
  );
}

function OrderedProduct() {}
