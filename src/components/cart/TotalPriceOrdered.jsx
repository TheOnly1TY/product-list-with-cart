export function TotalPriceOrdered({ calculateTotalPrice }) {
  return (
    <div className="flex justify-between items-center mt-2 text-[#260F08]">
      <p className="text-[0.875rem]">Order Total</p>
      <span className="text-2xl font-bold">${calculateTotalPrice}</span>
    </div>
  );
}
