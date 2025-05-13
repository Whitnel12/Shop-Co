import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";
import Label from "../components/Label";
import Cart from "../components/Cart";
import { TfiEmail } from "react-icons/tfi";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import Comment from "../components/Comment";
import Footer from "../components/Footer";

const Home = () => {
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

  const itemComments = [
    {
      stars: 5,
      name: "Sarah M.",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, non dolor! Asperiores eligendi culpa, mollitia saepe expedita sunt iste debitis officiis cupiditate! Qui vitae alias quis voluptatibus laborum repudiandae officia.",
    },
    {
      stars: 4,
      name: "Irwan Syahrir",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, non dolor! Asperiores eligendi culpa, mollitia saepe expedita sunt iste debitis officiis cupiditate! Qui vitae alias quis voluptatibus laborum repudiandae officia.",
    },
    {
      stars: 4,
      name: "Irwan Syahrir",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, non dolor! Asperiores eligendi culpa, mollitia saepe expedita sunt iste debitis officiis cupiditate! Qui vitae alias quis voluptatibus laborum repudiandae officia.",
    },
    {
      stars: 4,
      name: "Irwan Syahrir",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, non dolor! Asperiores eligendi culpa, mollitia saepe expedita sunt iste debitis officiis cupiditate! Qui vitae alias quis voluptatibus laborum repudiandae officia.",
    },
  ];

  const ItemProduct = [
    {
      image: "/public/images/baju.png",
      label: "T-shirt with Tape Details",
      rating1: "5.0",
      rating2: "5",
      price: 140,
    },
    {
      image: "/public/images/baju.png",
      label: "T-shirt with Tape Details",
      rating1: "5.0",
      rating2: "5",
      price: 180,
    },
    {
      image: "/public/images/baju.png",
      label: "T-shirt with Tape Details",
      rating1: "5.0",
      rating2: "5",
      price: 100,
    },
    {
      image: "/public/images/baju.png",
      label: "T-shirt with Tape Details",
      rating1: "5.0",
      rating2: "5",
      price: 220,
    },
    {
      image: "/public/images/baju.png",
      label: "T-shirt with Tape Details",
      rating1: "5.0",
      rating2: "5",
      price: 420,
    },
    {
      image: "/public/images/baju.png",
      label: "T-shirt with Tape Details",
      rating1: "5.0",
      rating2: "5",
      price: 520,
    },
  ];

  return (
    <div className="bg-[#F2F0F1] h-fit flex flex-col lg:gap-y-0 overflow-hidden transition-all duration-500 ease-in-out">
      {/* <Navbar /> */}
      <div className="mt-[75px] 2xl:px-60 pt-10 xl:px-36 lg:flex px-5 lg:mt-[70px] lg:max-h-fit lg:justify-between">
        <div className="lg:h-fit lg:w-fit lg:mt-14 lg:gap-y-5 flex flex-col gap-y-3 ">
          <label className="md:text-center  lg:text-start xl:text-6xl  md:text-6xl font-extrabold text-[40px] sm:text-5xl leading-11 md:leading-18 xl:leading-16 lg:leading-12 lg:w-fit lg:text-5xl">
            FIND CLOTHES <br />
            THAT MATCHES <br /> YOUR STYLE
          </label>
          <p className="leading-5 md:text-center lg:text-start w-fit lg:w-[500px] md:m-auto text-[#8b8b8b] text-sm font-medium md:text-normal md:w-full block lg:m-0">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring our your individuality and cater to your sense of
            style.
          </p>

          <button className="bg-[#000000] text-white w-full py-4 lg:py-2 rounded-full cursor-pointer sm:w-[180px] lg:w-[180px] sm:py-3 md:m-auto block lg:m-0 lg:mb-5">
            Shop Now
          </button>

          <div className="h-40 flex flex-col gap-y-3  lg:flex-row lg:justify-start lg:h-fit lg:items-center lg:w-full lg:gap-x-4">
            <div className="h-[50%] flex lg:gap-x-4 lg:w-fit lg:border-r-2 lg:border-[#dedede]">
              <div className="border-r-2 border-[#dedede] w-[50%] lg:w-[150px] flex flex-col justify-center items-start sm:items-center">
                <div>
                  <h3 className=" font-bold text-5xl lg:text-[32px]">200+</h3>
                  <p className="text-sm lg:text-xs font-medium text-[#8b8b8b]">
                    International Brands
                  </p>
                </div>
              </div>
              <div className="w-[50%] flex flex-col justify-center items-end lg:items-center lg:w-[150px] sm:items-center">
                <div>
                  <h3 className=" font-bold text-5xl lg:text-[32px]">2,000+</h3>
                  <p className="text-sm lg:text-xs font-medium text-[#8b8b8b]">
                    High-Quality Products
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="h-full">box2</div> */}
            <div className=" flex flex-col justify-center items-end lg:w-[150px] lg:h-fit lg:py-[1.2px]">
              <div className="m-auto lg:m-0">
                <h3 className="font-bold text-5xl lg:text-[32px]">30,000+</h3>
                <p className="text-sm lg:text-xs font-medium text-[#8b8b8b] text-center">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img src="/images/model-home.png" alt="" className=" m-auto" />
        </div>
      </div>

      <div className="bg-black">
        <div className="flex 2xl:px-60 2xl:py-8 xl:px-36 flex-wrap sm:justify-between sm:gap-0 sm:px-5 lg:gap-0 justify-center gap-x-5 py-5 lg:justify-between lg:px-5">
          <div className="text-white font-bold text-2xl flex items-center text-center  ">
            Sponsor
          </div>
          <div className="text-white font-bold text-2xl flex items-center text-center ">
            Sponsor
          </div>
          <div className="text-white font-bold text-2xl flex items-center  text-center ">
            Sponsor
          </div>
          <div className="text-white font-bold text-2xl flex items-center  text-center ">
            Sponsor
          </div>
          <div className="text-white font-bold text-2xl flex items-center  text-center ">
            Sponsor
          </div>
        </div>
      </div>

      <div className="2xl:px-60 bg-white  h-fit border border-green-800 2xl:relative relative pt-7 xl:px-36 w-full flex flex-col gap-y-3  px-5 lg:px-5">
        <div className="pt-10">
          <Label
            name={"NEW ARRIVALS"}
            custom={"lg:text-4xl 2xl:m-auto md:text-4xl leading-11"}
          />
          <FaCaretLeft
            className="opacity-50 2xl:top-70 2xl:left-50 hover:opacity-100 absolute left-7 xl:left-0 size-8 cursor-pointer text-red-900"
            onClick={() => slideLeft("newArrivalsSlider")}
          />

          <FaCaretRight
            className="opacity-50 2xl:top-70 2xl:right-50 hover:opacity-100 absolute right-7 xl:right-0 size-8 cursor-pointer text-red-800"
            onClick={() => slideRight("newArrivalsSlider")}
          />
          <div
            id="newArrivalsSlider"
            className="flex gap-3 h-96 w-full xl:relative items-center overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {ItemProduct.map((item, index) => (
              <Cart key={index}>
                <Cart.CartImage src={item.image} alt={item.label} />
                <Cart.CartText
                  label={item.label}
                  rating1={item.rating1}
                  rating2={item.rating2}
                  price={`${item.price}`}
                />
              </Cart>
            ))}
          </div>

          <div
            className="border-2 border-[#ebebeb] text-center
        py-3 rounded-full font-medium md:w-[300px] md:m-auto"
          >
            View All
          </div>
        </div>

        <div className="pt-10">
          <Label
            name={"TOP SELLING"}
            custom={"lg:text-4xl 2xl:m-auto md:text-4xl leading-11"}
          />

          <div
            id="topSellingSlider"
            className="flex gap-3 h-96 w-full xl:relative items-center overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            <FaCaretLeft
              className="opacity-50 hover:opacity-100 absolute left-7 xl:left-0 size-8 cursor-pointer text-red-900"
              onClick={() => slideLeft("topSellingSlider")}
            />
            <FaCaretRight
              className="opacity-50 hover:opacity-100 absolute right-7 xl:right-0 size-8 cursor-pointer text-red-800"
              onClick={() => slideRight("topSellingSlider")}
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

          <div
            className="border-2 border-[#ebebeb] md:w-[300px] md:m-auto text-center
        py-3 rounded-full font-medium"
          >
            View All
          </div>
        </div>

        <div className="pt-10">
          <div className="w-full bg-[#F0F0F0] h-fit flex flex-col gap-y-5 px-8 rounded-3xl py-8 ">
            <Label
              name={"BROWSE BY DRESS STYLE"}
              custom={"md:text-4xl 2xl:m-auto 2xl:w-fit leading-11"}
            />

            <div className=" grid grid-cols-1 gap-5 w-full ">
              <div className="w-full flex flex-col md:flex-row gap-5 gap-y-5">
                <div className="bg-white h-50 flex rounded-3xl md:w-[50%] w-full overflow-hidden">
                  <div className="min-w-30 text-center font-bold text-2xl p-3">
                    Casual
                  </div>
                  <div className="">
                    <img
                      src="/public/images/style_photo1.png"
                      alt="baju"
                      className="h-full object-cover w-100 size-10 scale-150"
                    />
                  </div>
                </div>

                <div className="bg-white h-50 flex rounded-3xl w-full  overflow-hidden">
                  <div className=" min-w-30 text-center font-bold text-2xl p-3">
                    Sweats
                  </div>
                  <div>
                    <img
                      src="/public/images/style_photo2.png"
                      alt="baju"
                      className="h-full object-cover w-100 scale-150"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row gap-5 gap-y-5">
                <div className="bg-white h-50 flex rounded-3xl md:w-[100%] w-full overflow-hidden">
                  <div className=" min-w-30 text-center font-bold text-2xl p-3">
                    Casual
                  </div>
                  <div>
                    <img
                      src="/public/images/style_photo1.png"
                      alt="baju"
                      className="h-full object-cover w-100 scale-150"
                    />
                  </div>
                </div>
                <div className="bg-white h-50 flex rounded-3xl md:w-[75%] w-full overflow-hidden">
                  <div className=" min-w-30 text-center font-bold text-2xl p-3">
                    Sweats
                  </div>
                  <div className="">
                    <img
                      src="/public/images/style_photo3.png"
                      alt="baju"
                      className="h-full object-cover w-100 scale-155"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-50 md:pb-40 pt-10 h-fit relative">
          <div className=" h-full flex flex-col gap-y-8">
            <div className="flex gap-2 ">
              <div className=" flex items-start w-[70%]">
                <Label
                  name={"OUR HAPPY COSTUMERS"}
                  custom={"md:text-4xl md:text-start lg 2xl:w-full leading-11"}
                />
              </div>
              <div className="w-full md:w-[40%] flex flex-col items-end justify-end">
                <div className="flex w-fit gap-3">
                  <FaArrowLeft
                    size={30}
                    className="cursor-pointer"
                    onClick={() => slideLeft("commentSlider")}
                  />
                  <FaArrowRight
                    size={30}
                    className="cursor-pointer"
                    onClick={() => slideRight("commentSlider")}
                  />
                </div>
              </div>
            </div>
            <div
              id="commentSlider"
              className="h-full w-[100%] flex flex-row gap-y-8 gap-5  overflow-x-scroll scroll scroll-smooth scrollbar-hide"
            >
              {itemComments.map((item, index) => (
                // <div
                //   key={index}
                //   className="border-2 md:min-w-[45%] md:max-w-[45%] xl:min-w-[30%] min-w-[100%] md:h-fit border-[#E7E7E7] p-5 rounded-3xl flex flex-col gap-y-1 min-h-55"
                // >
                //   <div className="flex gap-1">
                //     {[...Array(item.stars)].map((_, i) => (
                //       <FaStar key={i} className="text-amber-400 size-[15px]" />
                //     ))}
                //   </div>

                //   <div className="flex gap-2 items-center">
                //     <h3 className="font-bold text-[16.5px]">{item.name}</h3>
                //     <MdDone className="text-white size-5 p-1 rounded-full bg-green-500" />
                //   </div>
                //   {/* <MdDone /> */}
                //   {/* <h1>hello</h1> */}
                //   <p className="line-clamp-6 text-[#7E7E7E] text-base">
                //     {item.comment}
                //   </p>
                // </div>
                <Comment
                  key={index}
                  name={item.name}
                  comment={item.comment}
                  star={item.stars}
                  custom={"xl:min-w-[35%] 2xl:min-w-[35%] lg:min-w-[35%] "}
                />
              ))}
            </div>
            {/* <Comment /> */}
            <div className="top-[450px] md:top-[438px] lg:top-[422px] absolute bg-black h-fit rounded-3xl p-5 md:flex flex flex-col md:flex-row lg:items-center gap-y-3 justify-center w-full gap-3 xl:justify-between xl:p-11 2xl:p-9">
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
          </div>
        </div>

        {/* <div className="pt-66 md:pt-40 h-fit]">
          <div>
            <div className="lg:flex lg:gap-10 lg:border-b-2 lg:border-[#ebebeb] lg:mb-3">
              <div className=" h-full flex flex-col gap-y-4  lg:w-[40%] ">
                <Label name={"SHOP.CO"} custom={"lg:text-4xl leading-11"} />
                <p className="leading-5 text-[#8b8b8b] text-sm font-medium">
                  We have clothes that suits your style and which your proud to
                  wear. From women to men.
                </p>
                <div className="flex gap-2 pt-2">
                  <TiSocialFacebook className="cursor-pointer hover:bg-black hover:text-white border-2 border-[#E2E2E2] size-10 p-1 rounded-full bg-white" />
                  <TbBrandInstagram className="cursor-pointer hover:bg-black hover:text-white border-2 border-[#E2E2E2] size-10 p-1  rounded-full bg-white" />
                  <AiOutlineGithub className="cursor-pointer hover:bg-black hover:text-white border-2 border-[#E2E2E2] size-10 p-1  rounded-full bg-white" />
                  <RiTwitterXLine className="cursor-pointer hover:bg-black hover:text-white border-2 border-[#E2E2E2] size-10 p-2  rounded-full bg-white" />
                </div>
              </div>
              <div className="fit flex flex-wrap lg:border-none border-b-2 pb-5 border-[#ebebeb] lg:w-[60%] lg:flex-row ">
                <FooterLink />
              </div>
            </div>
            <div className="h-28 flex flex-col gap-y-5 pt-3 items-center  lg:flex-row lg:justify-between">
              <p className="text-center text-[#8b8b8b] text-sm font-medium">
                Shop.co ©2000-2023, All Rights Reserved
              </p>
              <div className="flex gap-x-5  justify-center">
                <div className="bg-[#f9f4f4] w-fit px-2 flex justify-center items-center rounded-lg lg:h-fit">
                  <img
                    src="/public/images/visa.png"
                    alt=""
                    className="size-10 w-fit block"
                  />
                </div>
                <div className="bg-[#f9f4f4] w-fit lg:py-[10px] px-2 flex justify-center items-center rounded-lg lg:h-fit">
                  <img
                    src="/public/images/card.png"
                    alt=""
                    className="size-5  w-fit block"
                  />
                </div>
                <div className="bg-[#f9f4f4] w-fit px-2 flex justify-center items-center rounded-lg lg:h-fit">
                  <img
                    src="/public/images/paypal.png"
                    alt=""
                    className="size-10 w-fit block"
                  />
                </div>
                <div className="bg-[#f9f4f4] w-fit px-2 flex justify-center items-center rounded-lg lg:h-fit">
                  <img
                    src="/public/images/apple-pay.png"
                    alt=""
                    className="size-10 w-fit block"
                  />
                </div>
                <div className="bg-[#f9f4f4] w-fit px-2 flex justify-center items-center rounded-lg lg:h-fit">
                  <img
                    src="/public/images/google-pay.png"
                    alt=""
                    className="size-10 w-fit block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Footer custom={"pt-66 md:pt-40 "} />
      </div>
    </div>
  );
};

export default Home;
