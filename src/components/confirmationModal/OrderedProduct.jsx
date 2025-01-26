// still wanting to implement min height media query
export function OrderedProduct() {
  return (
    <>
      <div className="max-h-[160px] md:max-h-[160px] overflow-y-scroll">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="/images/image-tiramisu-thumbnail.jpg"
              className="w-12 rounded-[4px]"
              alt="product thumbnail"
            />
            <div>
              <h2 className="text-sm text-primary-rose font-semibold">
                Classic Tiramisu
              </h2>
              <div className="flex items-center gap-3">
                <p className="text-sm text-red font-semibold">1x</p>
                <p className="text-sm text-[#87635A]">@ $5.50</p>
              </div>
            </div>
          </div>
          <p>$5.50</p>
        </div>
        <div className="line my-4"></div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="/images/image-tiramisu-thumbnail.jpg"
              className="w-12 rounded-[4px]"
              alt="product thumbnail"
            />
            <div>
              <h2 className="text-sm text-primary-rose font-semibold">
                Classic Tiramisu
              </h2>
              <div className="flex items-center gap-3">
                <p className="text-sm text-red font-semibold">1x</p>
                <p className="text-sm text-[#87635A]">@ $5.50</p>
              </div>
            </div>
          </div>
          <p>$5.50</p>
        </div>
        <div className="line my-4"></div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="/images/image-tiramisu-thumbnail.jpg"
              className="w-12 rounded-[4px]"
              alt="product thumbnail"
            />
            <div>
              <h2 className="text-sm text-primary-rose font-semibold">
                Classic Tiramisu
              </h2>
              <div className="flex items-center gap-3">
                <p className="text-sm text-red font-semibold">1x</p>
                <p className="text-sm text-[#87635A]">@ $5.50</p>
              </div>
            </div>
          </div>
          <p>$5.50</p>
        </div>
        <div className="line my-4"></div>
      </div>
    </>
  );
}
