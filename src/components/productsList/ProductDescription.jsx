export function ProductDescription({ product }) {
  return (
    <div className="mt-6">
      <p className="text-sm text-[#87635A] font-light mb-[4px]">
        {product.category}
      </p>
      <h2 className="text-base text-[#260F08] font-semibold">{product.name}</h2>
      <p className="text-base text-[#C73B0F] font-semibold">
        ${product.price.toFixed(2)}
      </p>
    </div>
  );
}
