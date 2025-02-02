import { OrderButton } from '../OrderButton';
import { CartCarbonNeutralMessage } from './CartCarbonNeutralMessage';
import { TotalPriceOrdered } from './TotalPriceOrdered';

export function OrderSummary({ setIsModalOpen, calculateTotalPrice }) {
  function handleModalOpen() {
    setIsModalOpen((modalOpen) => !modalOpen);
  }
  return (
    <>
      <TotalPriceOrdered calculateTotalPrice={calculateTotalPrice} />
      <CartCarbonNeutralMessage />
      <OrderButton handleOrderAction={handleModalOpen}>
        Confirm Order
      </OrderButton>
    </>
  );
}
