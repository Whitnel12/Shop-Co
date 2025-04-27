import { MdKeyboardArrowRight } from "react-icons/md";
import Label from "../components/Label";

const ProductDetail = () => {
  return (
    <div className="bg-white h-fit  flex flex-col lg:gap-y-0 overflow-hidden transition-all duration-500 ease-in-out">
      <div className="mt-[60px] 2xl:px-60 h-[100vh] border border-red-700 pt-10 xl:px-36 lg:flex px-5 lg:mt-[70px] lg:max-h-fit lg:justify-between">
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-1">
            <a href="/" className="text-[#8C8C8C] hover:text-black">
              Home
            </a>
            <MdKeyboardArrowRight size={25} className="text-[#8C8C8C]" />
            <a href="#" className="text-[#8C8C8C] hover:text-black">
              Product
            </a>
          </div>
          <div className=" flex flex-col gap-y-4">
            <div className="bg-[#F0EFED] hover:border-[1.5px] rounded-3xl max-h-80 min-h-80 flex items-center justify-center">
              <img
                src="images/baju.png"
                alt="image"
                className="max-h-60 min-h-60 "
              />
            </div>
            <div className=" flex justify-between">
              <div className="bg-[#F0EFED]  hover:border-[1.5px] rounded-2xl max-w-[105px] min-w-[105px] max-h-[105px] min-h-[105px] flex items-center justify-center ">
                <img
                  src="/images/baju.png"
                  alt="baju"
                  className="max-h-20 min-h-20"
                />
              </div>
              <div className="bg-[#F0EFED]  hover:border-[1.5px] rounded-2xl max-w-[105px] min-w-[105px] max-h-[105px] min-h-[105px] flex items-center justify-center ">
                <img
                  src="/images/baju.png"
                  alt="baju"
                  className="max-h-20 min-h-20"
                />
              </div>
              <div className="bg-[#F0EFED]  hover:border-[1.5px] rounded-2xl max-w-[105px] min-w-[105px] max-h-[105px] min-h-[105px] flex items-center justify-center ">
                <img
                  src="/images/baju.png"
                  alt="baju"
                  className="max-h-20 min-h-20"
                />
              </div>
            </div>
          </div>
          <div className="">
            <Label
              name={"ONE LIFE GRAPHIC T-SHIRT"}
              custom={"border text-start w-[90%] leading-7"}
              textSize="text-3xl"
            />
          </div>
          <div className="border flex">
            <div className="border">box1</div>
            <div className="border">box2</div>
          </div>
          <div className="border flex gap-3 items-center">
            <div className="border">
              <h3 className="font-bold text-3xl ">$260</h3>
            </div>
            <div className="border font-bold text-3xl">
              <h3 className="text-[#B3B3B3]">$300</h3>
            </div>
            <div className="bg-blue-700 h-[100%]">
              sk
              {/* <div className="border bg-red-100 h-fit">-40%f</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
