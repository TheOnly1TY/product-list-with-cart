export function TotalPriceOrdered({ totalPrice }) {
  return (
    <div className="flex justify-between items-center mt-2 text-[#260F08]">
      <p className="text-[0.875rem]">Order Total</p>
      <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
    </div>
  );
}
