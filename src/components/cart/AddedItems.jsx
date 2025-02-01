export function AddedItems({ addedProducts, handleDeleteProduct }) {
  return (
    <ul>
      {addedProducts.map((products, id) => (
        <CartProduct
          addedProduct={products}
          handleDeleteProduct={handleDeleteProduct}
          key={id}
        />
      ))}
    </ul>
  );
}

function CartProduct({ addedProduct, handleDeleteProduct }) {
  const { name, price, quantity } = addedProduct;

  return (
    <>
      <li className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-[0.875rem] text-[#260F08] font-semibold">
            {name}
          </h3>
          <p className="text-sm">
            <span className="text-[#C73B0F] font-bold mr-2.5">
              {addedProduct.quantity}x
            </span>
            <span className="text-[#87635A] mr-1.5">@ ${price.toFixed(2)}</span>
            <span className="text-[#87635A] font-bold">
              ${(quantity * price).toFixed(2)}
            </span>
          </p>
        </div>
        <figure
          onClick={() => handleDeleteProduct(addedProduct)}
          className="grid place-content-center w-[1.125rem] h-[1.125rem] rounded-full border border-[#AD8A85] cursor-pointer"
        >
          <img src="images/icon-remove-item.svg" alt="remove item icon" />
        </figure>
      </li>
      <div className="line mt-4"></div>
    </>
  );
}
