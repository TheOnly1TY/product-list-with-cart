import { AddedItems } from './AddedItems';
import { EmptyCart } from './EmptyCart';
import { OrderSummary } from './OrderSummary';

export function ShoppingCart({
  addedProducts,
  setIsModalOpen,
  calculateTotalPrice,
  handleDeleteProduct,
}) {
  return (
    <div className="w-full min-h-[299px] bg-white rounded-[12px] p-6 lg:max-w-[384px]">
      <h3 className="text-2xl text-[#C73B0F] font-bold mb-6">
        Your Cart ({addedProducts.length})
      </h3>
      {addedProducts.length !== 0 ? (
        <>
          <AddedItems
            addedProducts={addedProducts}
            handleDeleteProduct={handleDeleteProduct}
          />
          <OrderSummary
            setIsModalOpen={setIsModalOpen}
            calculateTotalPrice={calculateTotalPrice}
          />
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
