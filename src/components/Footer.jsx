import Label from "./Label";
import { TiSocialFacebook } from "react-icons/ti";
import { TbBrandInstagram } from "react-icons/tb";
import { AiOutlineGithub } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = ({ custom }) => {
  const itemFooter = [
    {
      title: "COMPANY",
      teks: {
        teks1: "About",
        teks2: "Features",
        teks3: "Works",
        teks4: "Career",
      },
    },
    {
      title: "HELP",
      teks: {
        teks1: "Costumer Support",
        teks2: "Delivery Details",
        teks3: "Terms & Conditions",
        teks4: "Privacy  Policy",
      },
    },
    {
      title: "FAQ",
      teks: {
        teks1: "Account",
        teks2: "Manage Deliveries",
        teks3: "Orders",
        teks4: "Payment",
      },
    },
    {
      title: "RESOURCES",
      teks: {
        teks1: "Free eBooks",
        teks2: "Development Tutorial",
        teks3: "How to - Blog",
        teks4: "Youtube Playlist",
      },
    },
  ];

  const FooterLink = () => {
    return (
      <>
        {itemFooter.map((item, index) => (
          <div
            className="pt-2 gap-y-2 flex flex-col font-medium  w-[50%]"
            key={index}
          >
            <h2 className=" tracking-widest lg:text-base">{item.title}</h2>
            <ul className="text-[#8b8b8b] text-sm lg:text-sm font-medium flex flex-col gap-y-2">
              <li>
                <a href="">{item.teks.teks1}</a>
              </li>
              <li>
                <a href="">{item.teks.teks2}</a>
              </li>
              <li>
                <a href="">{item.teks.teks2}</a>
              </li>
              <li>
                <a href="">{item.teks.teks4}</a>
              </li>
            </ul>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className={`${custom} h-fit`}>
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
    </div>
  );
};

export default Footer;
