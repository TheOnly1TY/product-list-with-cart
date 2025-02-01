// still wanting to implement min height media query
export function OrderedProduct({ addedProducts }) {
  return (
    <div className="max-h-[160px] md:max-h-[160px] overflow-y-scroll">
      {addedProducts.map((modalProduct, i) => (
        <ProductReviewModal modalProduct={modalProduct} key={i} />
      ))}
    </div>
  );
}

function ProductReviewModal({ modalProduct }) {
  const { name, image, quantity, price } = modalProduct;
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src={image.thumbnail}
            className="w-12 rounded-[4px]"
            alt="product thumbnail"
          />
          <div>
            <h2 className="text-sm text-primary-rose font-semibold">{name}</h2>
            <div className="flex items-center gap-3">
              <p className="text-sm text-red font-semibold">{quantity}x</p>
              <p className="text-sm text-[#87635A]">@ ${price.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <p>${(price * quantity).toFixed(2)}</p>
      </div>
      <div className="line my-4"></div>
    </>
  );
}
