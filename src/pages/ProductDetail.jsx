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
              custom={"text-start w-[90%] leading-7"}
              textSize="text-3xl"
            />
          </div>
          <div className="border flex">
            <div className="border">box1</div>
            <div className="border">box2</div>
          </div>
          <div className="bg-red-600">
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
          <div className="border bg-blue-500">
            <div className="">
              hello Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis error praesentium accusantium voluptas cum cupiditate,
              vero non animi suscipit deserunt rerum quo deleniti quibusdam
              repudiandae. Maiores nam iste deserunt sed?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
