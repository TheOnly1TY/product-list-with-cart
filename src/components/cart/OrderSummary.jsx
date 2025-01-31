import { OrderButton } from '../OrderButton';
import { CartCarbonNeutralMessage } from './CartCarbonNeutralMessage';
import { TotalPriceOrdered } from './TotalPriceOrdered';

export function OrderSummary({ setIsModalOpen }) {
  function handleModalOpen() {
    setIsModalOpen((modalOpen) => !modalOpen);
  }
  return (
    <>
      <TotalPriceOrdered />
      <CartCarbonNeutralMessage />
      <OrderButton handleOrderAction={handleModalOpen}>
        Confirm Order
      </OrderButton>
    </>
  );
}
