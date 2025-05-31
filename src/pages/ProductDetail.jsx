import { MdKeyboardArrowRight } from "react-icons/md";
import Label from "../components/Label";
import { GiSettingsKnobs } from "react-icons/gi";
import Comment from "../components/Comment";
import Cart from "../components/Cart";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";
import Footer from "../components/Footer";
import { TfiEmail } from "react-icons/tfi";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { image } from "framer-motion/client";

const ProductDetail = () => {
  const { id } = useParams();
  const [products, setProduct] = useState(null);
  const [details, setDetails] = useState("product-details");
  const [activeImages, setactiveImages] = useState(0);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const dataFound = data.find((item) => item.id === parseInt(id));
        // console.log(dataFound);
        setProduct(dataFound);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const slideLeft = (slideId) => {
    var slider = document.getElementById(slideId);
    slider.scrollLeft = slider.scrollLeft - 500;
    console.log("kiri");
  };

  const slideRight = (slideId) => {
    var slider = document.getElementById(slideId);
    slider.scrollLeft = slider.scrollLeft + 500;
    console.log("kanan");
  };

  const renderProductDetails = () => {
    switch (details) {
      case "product-details":
        return (
          <div className="">
            <div className="font-bold">Deskripsi</div>
            <p className="text-justify">
              Tingkatkan gaya harian Anda dengan kemeja pria berdesain modern
              ini. Terbuat dari katun berkualitas tinggi yang ringan dan
              menyerap keringat, cocok untuk segala suasana — dari rapat kantor
              hingga hangout santai. Potongan slim fit menyesuaikan bentuk tubuh
              tanpa terasa ketat.
            </p>
            <div className="font-bold">Deskripsi</div>
            <ul className="list-disc block pl-5">
              <li>
                <b>Bahan:</b> 100% Katun Premium
              </li>
              <li>
                <b>Bahan:</b> 100% Katun Premium
              </li>
              <li>
                <b>Bahan:</b> 100% Katun Premium
              </li>
              <li>
                <b>Bahan:</b> 100% Katun Premium
              </li>
            </ul>
          </div>
        );
      case "rating":
        return (
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between items-center">
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
            <div className="flex flex-col gap-y-4 lg:gap-4 lg:grid lg:grid-cols-2">
              <Comment
                name={"irwan"}
                comment={"krsjdjsgfgfgfgf"}
                custom={
                  "xl:min-w-full md:min-w-full lg:min-w-full 2xl:min-w-full "
                }
              />
              <Comment
                name={"irwan"}
                comment={"krsjdjsgfgfgfgf"}
                custom={
                  "xl:min-w-full md:min-w-full lg:min-w-full 2xl:min-w-full "
                }
              />
              <Comment
                name={"irwan"}
                comment={"krsjdjsgfgfgfgf"}
                custom={
                  "xl:min-w-full md:min-w-full lg:min-w-full 2xl:min-w-full "
                }
              />
              <Comment
                name={"irwan"}
                comment={"krsjdjsgfgfgfgf"}
                custom={
                  "xl:min-w-full md:min-w-full lg:min-w-full 2xl:min-w-full "
                }
              />
            </div>

            <div className="border-[1.5px] font-semibold rounded-full w-fit px-6 py-3 m-auto border-[#E7E7E7] text-[#1F1F1F]">
              Load More Reviews
            </div>
          </div>
        );
      case "faqs":
        return (
          <div className="text-justify">
            <div className="font-bold">FAQs</div>
            <p>
              Q: Apakah bahan kemeja ini panas saat dipakai di luar ruangan?
            </p>
            <p>
              A: Tidak, bahan katunnya adem dan menyerap keringat, cocok untuk
              aktivitas outdoor.
            </p>
          </div>
        );
    }
  };

  console.log("hasil : ", details);

  return (
    <div className="bg-white h-fit  flex flex-col lg:gap-y-0 overflow-hidden transition-all duration-500 ease-in-out">
      <div className="mt-[60px] 2xl:px-60 pt-10 xl:px-36 lg:flex px-5 lg:mt-[70px] lg:max-h-fit lg:justify-between">
        <div className="flex flex-col gap-y-4 ">
          <div className="flex items-center gap-1 ">
            <a href="/" className="text-[#8C8C8C] hover:text-black">
              Home
            </a>
            <MdKeyboardArrowRight size={25} className="text-[#8C8C8C]" />
            <a href="#" className="text-[#8C8C8C] hover:text-black">
              Product
            </a>
          </div>

          <div className="lg:h-fit xl:h-[500px]  flex flex-col gap-y-3 lg:flex-row items-centergap-1 lg:w-[100%] lg:gap-x-5">
            <div className="flex lg:h-full md:gap-4 md:h-[450px] md:flex-row h-[90%] lg:gap-x-4 lg:flex-row lg:justify-start flex-col gap-y-4  lg:w-[70%]">
              <div className="bg-[#F0EFED]  lg:w-full  md:w-full md:min-h-full  lg:order-2 md:order-2  hover:border-[1.5px] rounded-3xl max-h-80 min-h-80 lg:min-h-[100%] flex items-center justify-center">
                <img
                  src={`${products?.images[activeImages]}`}
                  alt="image"
                  className="max-h-60 min-h-60 "
                />
              </div>
              {/* {console.log("hasil : ", Products.images)} */}

              <div className="lg:order-1 flex  md:justify-normal md:w-[25%] md:h-full md:gap-4 justify-between md:order-1 md:flex-col lg:grid lg:grid-cols-1 lg:w-[150px] gap-4">
                {products?.images?.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setactiveImages(index)}
                    className={`bg-[#F0EFED] flex-1 
                   md:w-full   lg:w-[100%] rounded-2xl w-[40%] max-h-[105px] min-h-[105px] md:max-h-none lg:min-h-full flex items-center justify-center ${
                     activeImages === index ? "border-[1.5px]" : ""
                   } 
                   
                   `}
                  >
                    <img src={image} alt="baju" className="max-h-20 min-h-20" />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-[40%] flex flex-col gap-y-4 xl:justify-between ">
              <div className="">
                <Label
                  name={"ONE LIFE GRAPHIC T-SHIRT"}
                  custom={
                    "text-start w-[90%] leading-9 2xl:w-full xl:text-[30px] 2xl:text-[35px] "
                  }
                  textSize="text-3xl"
                />
              </div>
              <div className="gap-2 flex">
                <div className="flex items-center gap-1">
                  <FaStar className="text-amber-400 size-[15px]" />
                  <FaStar className="text-amber-400 size-[15px]" />
                  <FaStar className="text-amber-400 size-[15px]" />
                  <FaStar className="text-amber-400 size-[15px]" />
                  <FaStar className="text-amber-400 size-[15px]" />
                </div>
                <div className="">
                  <p>
                    <b>5</b>/5
                  </p>
                </div>
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officiis voluptas pariatur eum, tenetur illo hic quis
                  quibusdam, provident corrupti.
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
                <div className="flex justify-between sm:w-sm lg:w-fit lg:gap-3">
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
              <div className="flex gap-2 md:w-[600px] lg:w-[100%] ">
                <div className="bg-[#F0F0F0] w-[35%] lg:h-10 h-12 rounded-full flex items-center justify-between px-4">
                  <div className="text-3xl flex items-center  justify-center h-full pb-[6px] ">
                    -
                  </div>
                  <div className="text-xl flex items-center justify-center h-full">
                    1
                  </div>
                  <div className="text-3xl flex items-center justify-center h-full pb-[6px]">
                    +
                  </div>
                </div>
                <div className="bg-black w-[65%] lg:h-10 h-12 text-white flex items-center justify-center rounded-full ">
                  Add to Cart
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between border-b-[1.5px] border-[#E6E6E6] font-semibold ">
            <p
              className="hover:border-b-2 border-black pb-5 text-[#717171]"
              onClick={() => setDetails("product-details")}
            >
              Product Details
            </p>
            <p
              className="hover:border-b-2 border-black pb-5 text-[#717171] "
              onClick={() => setDetails("rating")}
            >
              Rating & Reviews
            </p>
            <p
              className="hover:border-b-2 border-black pb-5 text-[#717171]"
              onClick={() => setDetails("faqs")}
            >
              FAQs
            </p>
          </div>
          {renderProductDetails()}

          <div className="w-[80%] m-auto">
            <Label name={"YOU MIGHT ALSO LIKE"} custom={"2xl:w-full"} />
          </div>

          <div
            id="ProductLike"
            className="flex gap-3 h-96 w-full xl:relative items-center overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            <FaCaretLeft
              className="opacity-50 hover:opacity-100 absolute left-7 xl:left-0 size-8 cursor-pointer text-red-900"
              onClick={() => slideLeft("ProductLike")}
            />
            <FaCaretRight
              className="opacity-50 hover:opacity-100 absolute right-7 xl:right-0 size-8 cursor-pointer text-red-800"
              onClick={() => slideRight("ProductLike")}
            />
            <Cart>
              <Cart.CartImage src={"/public/images/baju.png"} alt={"baju"} />
              <Cart.CartText
                label={"T-shirt with Tape Details"}
                rating1={"5.0"}
                rating2={"5"}
                price={"$120"}
              />
            </Cart>
            <Cart>
              <Cart.CartImage src={"/public/images/baju.png"} alt={"baju"} />
              <Cart.CartText
                label={"T-shirt with Tape Details"}
                rating1={"5.0"}
                rating2={"5"}
                price={"$120"}
              />
            </Cart>
            <Cart>
              <Cart.CartImage src={"/public/images/baju.png"} alt={"baju"} />
              <Cart.CartText
                label={"T-shirt with Tape Details"}
                rating1={"5.0"}
                rating2={"5"}
                price={"$120"}
              />
            </Cart>
            <Cart>
              <Cart.CartImage src={"/public/images/baju.png"} alt={"baju"} />
              <Cart.CartText
                label={"T-shirt with Tape Details"}
                rating1={"5.0"}
                rating2={"5"}
                price={"$120"}
              />
            </Cart>
          </div>

          <div className=" md:my-1 lg:my-10 top-[450px] md:top-[438px] lg:top-[422px]  bg-black h-fit rounded-3xl p-5 md:flex flex flex-col md:flex-row lg:items-center gap-y-3 justify-center w-full gap-3 xl:justify-between xl:p-11 2xl:p-9">
            <Label
              name={"STAY UPTO DATE ABOUT OUR LATEST OFFERS"}
              textColor={"text-white"}
              textSize={
                "md:text-3xl text-5xl lg:text-4xl 2xl:text-[50px] lg:w-[500px] text-start"
              }
              custom={"leading-11"}
            />
            <div className="flex border 2xl:w-[45%] flex-col gap-y-3 w-[100%] lg:w-[400px] justify-center lg:justify-center  2xl:items-end">
              <div className="border h-fit w-full relative">
                <input
                  type="text"
                  className="bg-white border-none w-full rounded-full py-2 pl-12 pr-5 flex justify-center items-center mt-3 lg:m-0"
                  placeholder="Enter your email address"
                />

                <TfiEmail className="absolute top-[25.5px] lg:top-[13.5px] left-5 text-[#929292]" />
              </div>

              <div className="bg-white cursor-pointer p-2 2xl:w-full border border-red-900 rounded-full text-center font-medium">
                Subscribe to Newsletter
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
