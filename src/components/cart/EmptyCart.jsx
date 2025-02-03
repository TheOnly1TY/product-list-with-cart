export function EmptyCart() {
  return (
    <div className="flex justify-center items-center flex-col text-center gap-4 mt-6">
      <figure>
        <img
          src="/images/illustration-empty-cart.svg"
          alt="empty-cart_illustration"
        />
      </figure>
      <p className="text-sm text-muted-rose font-semibold">
        Your added items will appear here
      </p>
    </div>
  );
}
