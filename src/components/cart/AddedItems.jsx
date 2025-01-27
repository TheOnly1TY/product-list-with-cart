export function AddedItems() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-[0.875rem] text-[#260F08] font-semibold">
            Classic Tiramisu
          </h3>
          <p className="text-sm">
            <span className="text-[#C73B0F] font-bold mr-2.5">1x</span>
            <span className="text-[#87635A] mr-1.5">@ $5.50</span>
            <span className="text-[#87635A] font-bold">$5.50</span>
          </p>
        </div>
        <figure className="grid place-content-center w-[1.125rem] h-[1.125rem] rounded-full border border-[#AD8A85] cursor-pointer">
          <img src="images/icon-remove-item.svg" alt="remove item icon" />
        </figure>
      </div>
      <div className="line mt-4"></div>
    </>
  );
}
