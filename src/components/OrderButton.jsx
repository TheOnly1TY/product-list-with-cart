// eslint-disable-next-line react/prop-types
export function OrderButton({ children, handleOrderAction }) {
  return (
    <button
      onClick={handleOrderAction}
      className="w-full h-[53px] text-base text-center text-white bg-red rounded-full duration-100 cursor-pointer hover:bg-[#952c0b]"
    >
      {children}
    </button>
  );
}
