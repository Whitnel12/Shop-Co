import { MdKeyboardArrowRight } from "react-icons/md";
import Label from "../components/Label";

const Cart = () => {
  return (
    <div className="bg-[#F2F0F1] h-fit flex flex-col lg:gap-y-0 overflow-hidden transition-all duration-500 ease-in-out">
      <div className="mt-[75px] 2xl:px-60 pt-10 xl:px-36 lg:flex px-5 lg:mt-[70px] lg:max-h-fit lg:justify-between">
        <div className="flex flex-col gap-y-4 ">
          <div className="flex items-center gap-1 ">
            <a href="/" className="text-[#8C8C8C] hover:text-black">
              Home
            </a>
            <MdKeyboardArrowRight size={25} className="text-[#8C8C8C]" />
            <a href="#" className="text-[#8C8C8C] hover:text-black">
              Cart
            </a>
          </div>

          <Label name={"YOUR CART"} custom={"border text-start"} />
          <div className="border w-full flex p-3 rounded-2xl gap-3">
            <div className="border min-w-[35%]">box 1</div>
            <div className="border flex-1">
              <p className="font-bold text-[16.5px]">Produk 1</p>
              <p className="leading-5 md:text-center lg:text-start w-fit lg:w-[500px] md:m-auto text-base md:text-normal md:w-full block lg:m-0">
                Size: <span className="font-medium"> Large </span>
              </p>
              <p className="leading-5 md:text-center lg:text-start w-fit lg:w-[500px] md:m-auto text-base md:text-normal md:w-full block lg:m-0">
                Size: <span className="font-medium"> Large </span>
              </p>
              <div className="flex mt-4">
                <div className="w-[50%] border">box</div>
                <div className="w-[50%] border">box</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
