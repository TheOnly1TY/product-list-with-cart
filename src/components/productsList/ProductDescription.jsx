export function ProductDescription({ product }) {
  const { category, name, price } = product;
  return (
    <div className="mt-7">
      <p className="text-sm text-muted-rose font-light mb-[4px]">{category}</p>
      <h2 className="text-base text-primary-rose font-semibold">{name}</h2>
      <p className="text-base text-red font-semibold">${price.toFixed(2)}</p>
    </div>
  );
}
