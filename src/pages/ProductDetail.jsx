import { MdKeyboardArrowRight } from "react-icons/md";
import Label from "../components/Label";
import { GiSettingsKnobs } from "react-icons/gi";

const ProductDetail = () => {
  return (
    <div className="bg-white h-fit  flex flex-col lg:gap-y-0 overflow-hidden transition-all duration-500 ease-in-out">
      <div className="mt-[60px] 2xl:px-60  border border-red-700 pt-10 xl:px-36 lg:flex px-5 lg:mt-[70px] lg:max-h-fit lg:justify-between">
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
              custom={"text-start w-[90%] leading-7"}
              textSize="text-3xl"
            />
          </div>
          <div className="border flex">
            <div className="border">box1</div>
            <div className="border">box2</div>
          </div>
          <div className="">
            <div className=" flex gap-3 items-center">
              <div className="">
                <h3 className="font-bold text-3xl ">$260</h3>
              </div>
              <div className="font-bold text-3xl">
                <h3 className="text-[#B3B3B3]">$300</h3>
              </div>
              <div className="bg-[#FBECEC] font-semibold text-[#E94D3F] h-[100%] py-1 px-3 rounded-2xl">
                -40%
                {/* <div className="border bg-red-100 h-fit">-40%f</div> */}
              </div>
            </div>
            <div className="text-[#797979] text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              voluptas pariatur eum, tenetur illo hic quis quibusdam, provident
              corrupti.
            </div>
          </div>
          <div className="border-y-[1.5px] border-[#E6E6E6] py-3 flex flex-col gap-y-2">
            <div className="text-[#797979]">
              <p>Select Colors</p>
            </div>
            <div className="flex gap-3 ">
              <div className="w-10 h-10 rounded-full bg-[#372124]"></div>
              <div className="w-10 h-10 rounded-full bg-[#323434]"></div>
              <div className="w-10 h-10 rounded-full bg-[#32334D]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <p>Choose Size</p>
            <div className="flex justify-between">
              <div className="py-2 px-5 text-xs hover:border-[1.5px] rounded-full text-[#717171] bg-[#F0F0F0]">
                Small
              </div>
              <div className="py-2 px-5 text-xs hover:border-[1.5px] rounded-full text-[#717171] bg-[#F0F0F0]">
                Medium
              </div>
              <div className="py-2 px-5 text-xs hover:border-[1.5px] rounded-full text-[#717171] bg-[#F0F0F0]">
                Large
              </div>
              <div className="py-2 px-5 text-xs hover:border-[1.5px] rounded-full text-[#717171] bg-[#F0F0F0]">
                X-Large
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="bg-[#F0F0F0] w-[35%] h-12 rounded-full flex items-center justify-between px-4">
              <div className="text-3xl flex items-center justify-center h-full pb-[6px] ">
                -
              </div>
              <div className="text-xl flex items-center justify-center h-full">
                1
              </div>
              <div className="text-3xl flex items-center justify-center h-full pb-[6px]">
                +
              </div>
            </div>
            <div className="bg-black w-[65%] h-12 text-white flex items-center justify-center rounded-full ">
              Add to Cart
            </div>
          </div>
          <div className="flex justify-between border-b-[1.5px] border-[#E6E6E6] font-semibold ">
            <p className="hover:border-b-2 border-black pb-5 text-[#717171]">
              Product Details
            </p>
            <p className="hover:border-b-2 border-black pb-5 text-[#717171]">
              Rating & Reviews
            </p>
            <p className="hover:border-b-2 border-black pb-5 text-[#717171]">
              FAQs
            </p>
          </div>
          <div className="flex justify-between border items-center">
            <div className="flex gap-2">
              <div className="font-bold text-lg">All Reviews</div>
              <div>(451)</div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="p-3 bg-[#F0F0F0]  rounded-full flex items-center h-fit">
                <GiSettingsKnobs size={18} />
              </div>
              <div className="text-white text-sm bg-black rounded-full py-3 px-6">
                Write a Review
              </div>
            </div>
          </div>
          <div className="h-screen border">ndwkdn</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
