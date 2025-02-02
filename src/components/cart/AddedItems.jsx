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
          className="group grid place-content-center w-[1.125rem] h-[1.125rem] rounded-full border border-[#AD8A85] hover:border-primary-rose hover:stroke-primary-rose  cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path
              className="fill-[#CAAFA7] group-hover:fill-primary-rose"
              d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
            />
          </svg>
        </figure>
      </li>
      <div className="line mt-4"></div>
    </>
  );
}
