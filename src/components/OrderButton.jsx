// eslint-disable-next-line react/prop-types
export function OrderButton({ children }) {
  return (
    <button className="w-full h-[53px] text-base text-center text-white bg-[#C73B0F] rounded-full duration-100 cursor-pointer hover:bg-[#952c0b]">
      {children}
    </button>
  );
}
