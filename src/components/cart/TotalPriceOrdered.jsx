export function TotalPriceOrdered({ calculateTotalPrice }) {
  return (
    <div className="flex justify-between items-center mt-2 text-primary-rose">
      <p className="text-sm">Order Total</p>
      <span className="text-2xl font-bold">${calculateTotalPrice}</span>
    </div>
  );
}
