import Navbar from "../components/Navbar";
import { FaStar } from "react-icons/fa";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";
import Label from "./Label";
import Cart from "./Cart";
import { TiSocialFacebook } from "react-icons/ti";
import { TbBrandInstagram } from "react-icons/tb";
import { AiOutlineGithub } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { MdDone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

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

  return (
    <div className="bg-[#F2F0F1] h-fit  w-full flex flex-col gap-y-5">
      <Navbar />
      <div className="h-fit lg:h-screen pt-22 gap-y-4 px-5 flex flex-col  xl:flex lg:px-20 lg:flex-row lg:justify-between relative">
        <div className="h-full lg:pt-18 flex flex-col gap-y-3 lg:max-w-[52%]">
          <label className="md:text-center lg:text-start  md:text-7xl font-extrabold text-5xl leading-11 md:leading-18 lg:w-fit lg:text-5xl">
            FIND CLOTHES <br />
            THAT MATCHES <br /> YOUR STYLE
          </label>
          <p className="leading-5 md:text-center lg:text-start w-fit  md:m-auto text-[#8b8b8b] text-sm font-medium md:text-normal md:w-full block lg:w-fit lg:m-0">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring our your individuality and cater to your sense of
            style.
          </p>

          <button className="bg-[#000000] text-white w-full py-4 rounded-full cursor-pointer md:w-[300px] md:m-auto block lg:m-0 lg:mb-10">
            Shop Now
          </button>

          <div className="h-40 flex flex-col gap-y-3 lg:flex-row lg:justify-start lg:h-fit lg:items-center lg:w-full lg:gap-x-18">
            <div className=" border-red-700 h-[50%] flex lg:gap-x-18 lg:w-fit lg:border-r-2 lg:border-[#dedede]">
              <div className="border-r-2 border-[#dedede] w-[50%] lg:w-[150px] flex flex-col justify-center items-center">
                <div>
                  <h3 className=" font-bold text-3xl lg:text-4xl">200+</h3>
                  <p className="text-sm font-medium text-[#8b8b8b]">
                    International Brands
                  </p>
                </div>
              </div>
              <div className="w-[50%] flex flex-col justify-center lg:w-[150px] items-center">
                <div>
                  <h3 className=" font-bold text-3xl lg:text-4xl">2,000+</h3>
                  <p className="text-sm font-medium text-[#8b8b8b]">
                    High-Quality Products
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="h-full">box2</div> */}
            <div className=" flex flex-col justify-center items-center lg:w-[150px] lg:h-fit lg:py-[1.2px]">
              <div>
                <h3 className="font-bold text-3xl lg:text-4xl">30,000+</h3>
                <p className="text-sm font-medium text-[#8b8b8b]">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center h-fit ">
          <img
            src="/images/model-home.png"
            alt=""
            className="lg:min-h-[700px] lg:max-h-[700px] lg:w-[500px] border"
          />
        </div>

        <div className="h-[150px] bg-black -m-5 px-3 py-5 flex flex-col justify-around lg:justify-normal lg:absolute lg:-bottom-1 lg:w-full lg:left-5 lg:flex-row lg:h-fit lg:px-20">
          <div className="flex justify-center lg:justify-between gap-2 lg:border  flex-wrap w-full">
            <div className="text-white font-bold text-3xl  text-center">
              Sponsor
            </div>
            <div className="text-white font-bold text-3xl  text-center">
              Sponsor
            </div>
            <div className="text-white font-bold text-3xl  text-center">
              Sponsor
            </div>
            <div className="text-white font-bold text-3xl  text-center">
              Sponsor
            </div>
            <div className="text-white font-bold text-3xl  text-center">
              Sponsor
            </div>
          </div>
        </div>
      </div>

      <div className="h-fit relative pt-7 w-full flex flex-col gap-y-3 bg-white px-5 ">
        <div className="pt-10">
          <Label name={"NEW ARRIVALS"} />

          <div
            id="newArrivalsSlider"
            className="flex gap-3 h-96 w-full  items-center overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            <FaCaretLeft
              className="opacity-50 hover:opacity-100 absolute left-7 size-8 cursor-pointer text-red-900"
              onClick={() => slideLeft("newArrivalsSlider")}
            />
            <FaCaretRight
              className="opacity-50 hover:opacity-100 absolute right-7 size-8 cursor-pointer text-red-800"
              onClick={() => slideRight("newArrivalsSlider")}
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
            className="border-2 border-[#ebebeb] text-center
        py-3 rounded-full font-medium md:w-[300px] md:m-auto"
          >
            View All
          </div>
        </div>

        <div className="pt-10">
          <Label name={"TOP SELLING"} />

          <div
            id="topSellingSlider"
            className="flex gap-3 h-96 w-full  items-center overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            <FaCaretLeft
              className="opacity-50 hover:opacity-100 absolute left-7 size-8 cursor-pointer text-red-900"
              onClick={() => slideLeft("topSellingSlider")}
            />
            <FaCaretRight
              className="opacity-50 hover:opacity-100 absolute right-7 size-8 cursor-pointer text-red-800"
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
          <div className="w-full bg-[#F0F0F0] h-fit flex flex-col gap-y-5 px-5 rounded-3xl py-10 ">
            <Label name={"BROWSE BY DRESS STYLE"} />

            <div className=" grid grid-cols-1 gap-5 w-full">
              <div className="w-full flex flex-col md:flex-row gap-3 gap-y-3">
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
              <div className="w-full  flex flex-col md:flex-row gap-3 gap-y-3">
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
              {/* <div className="bg-white h-50 flex rounded-3xl">
                <div className=" min-w-30 text-center font-bold text-2xl p-3">
                  Jacket
                </div>
                <div className="">
                  <img
                    src="/public/images/style_photo3.png"
                    alt="baju"
                    className="h-full object-cover w-100 "
                  />
                </div>
              </div>
              <div className="bg-white h-50 flex rounded-3xl">
                <div className=" min-w-30 text-center font-bold text-2xl p-3">
                  Casual
                </div>
                <div className="">
                  <img
                    src="/public/images/style_photo1.png"
                    alt="baju"
                    className="h-full object-cover w-100 "
                  />
                </div>
              </div>
              <div className="bg-white h-50 flex rounded-3xl">
                <div className=" min-w-30 text-center font-bold text-2xl p-3">
                  Casual
                </div>
                <div className="">
                  <img
                    src="/public/images/style_photo1.png"
                    alt="baju"
                    className="h-full object-cover w-100 "
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className=" pt-10 h-fit">
          <div className=" h-full flex flex-col gap-y-8">
            <Label name={"OUR HAPPY COSTUMERS"} />

            <div className="border-2 md:h-fit border-[#ededed] p-5 rounded-3xl flex flex-col gap-y-1 min-h-55">
              <div className="flex gap-1">
                <FaStar className="text-amber-400 size-[15px]" />
                <FaStar className="text-amber-400 size-[15px]" />
                <FaStar className="text-amber-400 size-[15px]" />
                <FaStar className="text-amber-400 size-[15px]" />
                <FaStar className="text-amber-400 size-[15px]" />
              </div>

              <div className="flex gap-2 items-center">
                <h3 className="font-bold text-[16.5px]">Sarah M.</h3>
                <MdDone className="text-white size-5 p-1 rounded-full bg-green-500" />
              </div>
              {/* <MdDone /> */}
              {/* <h1>hello</h1> */}
              <p className="line-clamp-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellendus nemo cum vel dolor veritatis. Iusto, minima!
                Corporis, fugiat obcaecati optio placeat numquam, nostrum quasi
                voluptatem ducimus mollitia eveniet gapfacere labore!
              </p>
            </div>
            <div className="border-2 md:h-fit border-[#ededed] p-5 rounded-3xl flex flex-col gap-y-1 min-h-55">
              <div className="flex gap-1">
                <FaStar className="text-amber-400 size-[15px]" />
                <FaStar className="text-amber-400 size-[15px]" />
                <FaStar className="text-amber-400 size-[15px]" />
                <FaStar className="text-amber-400 size-[15px]" />
                <FaStar className="text-amber-400 size-[15px]" />
              </div>

              <div className="flex gap-2 items-center">
                <h3 className="font-bold text-[16.5px]">Sarah M.</h3>
                <MdDone className="text-white size-5 p-1 rounded-full bg-green-500" />
              </div>
              {/* <MdDone /> */}
              {/* <h1>hello</h1> */}
              <p className="line-clamp-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellendus nemo cum vel dolor veritatis. Iusto, minima!
                Corporis, fugiat obcaecati optio placeat numquam, nostrum quasi
                voluptatem ducimus mollitia eveniet gapfacere labore! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Delectus
                facilis dolorum laboriosam natus aperiam nisi dicta itaque
                cupiditate eos, illum quia nam, perferendis eveniet, molestias
                eligendi sapiente id animi magnam! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Aliquid consequatur harum aliquam.
                Fugit, aspernatur iste nobis atque, sapiente quis exercitationem
                quisquam dolores rerum nesciunt, mollitia quo facilis ea
                incidunt consectetur?
              </p>
            </div>

            <div className="bg-black h-fit rounded-3xl border p-5 md:flex flex flex-col md:flex-row gap-y-3 justify-center w-full gap-3">
              <Label
                name={"STAY UPTO DATE ABOUT OUR LATEST OFFERS"}
                textColor={"text-white"}
                textSize={"md:text-3xl text-5xl"}
              />
              <div className="flex flex-col gap-y-3 w-[100%] border-amber-100 justify-center">
                <div className="border h-fit w-full relative">
                  <input
                    type="text"
                    className="bg-white border-none w-full rounded-full py-2 pl-12 pr-5 flex justify-center items-center mt-3 "
                    placeholder="Enter your email address"
                  />

                  <TfiEmail className="absolute top-[25.5px] left-5 text-[#929292]" />
                </div>

                <div className="bg-white p-2 rounded-full text-center font-medium">
                  Subscribe to Newsletter
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" pt-10 h-fit">
          <div className=" h-full flex flex-col gap-y-4">
            <Label name={"SHOP.CO"} />
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
            <div className="fit flex flex-wrap border-b-2 pb-5 border-[#ebebeb]">
              <div className="pt-2 gap-y-2 flex flex-col font-medium  w-[50%]">
                <h2 className=" tracking-widest">COMPANY</h2>
                <ul className="text-[#8b8b8b] text-sm font-medium flex flex-col gap-y-2">
                  <li>
                    <a href="">Costumer Support</a>
                  </li>
                  <li>
                    <a href="">Delivery Details</a>
                  </li>
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="">Payment</a>
                  </li>
                </ul>
              </div>
              <div className="pt-2 gap-y-2 flex flex-col font-medium min-w-[50%]">
                <h2 className=" tracking-widest">HELP</h2>
                <ul className="text-[#8b8b8b] text-sm font-medium flex flex-col gap-y-2">
                  <li>
                    <a href="">Costumer Support</a>
                  </li>
                  <li>
                    <a href="">Delivery Details</a>
                  </li>
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="">Payment</a>
                  </li>
                </ul>
              </div>
              <div className=" gap-y-2 flex flex-col font-medium  min-w-[50%]">
                <h2 className="tracking-widest pt-2">HELP</h2>
                <ul className="text-[#8b8b8b] text-sm font-medium flex flex-col gap-y-2">
                  <li>
                    <a href="">Costumer Support</a>
                  </li>
                  <li>
                    <a href="">Delivery Details</a>
                  </li>
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="">Payment</a>
                  </li>
                </ul>
              </div>
              <div className=" pt-2 gap-y-2 flex flex-col font-medium  min-w-[50%]">
                <h2 className=" tracking-widest">RESOURCES</h2>
                <ul className="text-[#8b8b8b] text-sm font-medium flex flex-col gap-y-2">
                  <li>
                    <a href="">free eBook</a>
                  </li>
                  <li>
                    <a href="">Development Tutorial</a>
                  </li>
                  <li>
                    <a href="">How to - Blog</a>
                  </li>
                  <li>
                    <a href="">Youtube Playlist</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" h-40 flex flex-col gap-y-5">
              <p className="text-center text-[#8b8b8b] text-sm font-medium">
                Shop.co ©2000-2023, All Rights Reserved
              </p>
              <div className="flex gap-x-5  justify-center">
                <div className="bg-[#f9f4f4] w-fit px-2 flex justify-center items-center rounded-lg">
                  <img
                    src="/public/images/visa.png"
                    alt=""
                    className="size-10 w-fit block"
                  />
                </div>
                <div className="bg-[#f9f4f4] w-fit px-2 flex justify-center items-center rounded-lg">
                  <img
                    src="/public/images/card.png"
                    alt=""
                    className="size-5 w-fit block"
                  />
                </div>
                <div className="bg-[#f9f4f4] w-fit px-2 flex justify-center items-center rounded-lg">
                  <img
                    src="/public/images/paypal.png"
                    alt=""
                    className="size-10 w-fit block"
                  />
                </div>
                <div className="bg-[#f9f4f4] w-fit px-2 flex justify-center items-center rounded-lg">
                  <img
                    src="/public/images/apple-pay.png"
                    alt=""
                    className="size-10 w-fit block"
                  />
                </div>
                <div className="bg-[#f9f4f4] w-fit px-2 flex justify-center items-center rounded-lg">
                  <img
                    src="/public/images/google-pay.png"
                    alt=""
                    className="size-10 w-fit block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
