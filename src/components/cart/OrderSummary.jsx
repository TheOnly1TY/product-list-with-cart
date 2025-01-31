import { OrderButton } from '../OrderButton';
import { CartCarbonNeutralMessage } from './CartCarbonNeutralMessage';
import { TotalPriceOrdered } from './TotalPriceOrdered';

export function OrderSummary({ setIsModalOpen, totalPrice }) {
  function handleModalOpen() {
    setIsModalOpen((modalOpen) => !modalOpen);
  }
  return (
    <>
      <TotalPriceOrdered totalPrice={totalPrice} />
      <CartCarbonNeutralMessage />
      <OrderButton handleOrderAction={handleModalOpen}>
        Confirm Order
      </OrderButton>
    </>
  );
}
