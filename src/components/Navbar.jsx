import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { MdAccountCircle } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "200px", opacity: 1 },
  };

  const itemNav = [
    {
      label_name: "Shop",
      link: "#",
    },
    {
      label_name: "On Shale",
      link: "#",
    },
    {
      label_name: "New Arrivals",
      link: "#",
    },
    {
      label_name: "Brands",
      link: "#",
    },
  ];

  return (
    <div className="fixed w-full z-100">
      <nav className="">
        <div className="border bg-white flex 2xl:bg-red 3xl:bg-amber-950 2xl:px-60   justify-between items-center  p-5 lg:px-5 xl:px-36 border-b-1 border-b-[#dedede]">
          <div className="flex items-center gap-4 xl:gap-9 lg:gap-8">
            <GiHamburgerMenu
              size={25}
              className="cursor-pointer lg:hidden"
              onClick={() => setMenu(!menu)}
            />

            <label className=" font-black text-3xl 2xl:text-2xl text-center cursor-pointer lg:text-2xl">
              SHOP.CO
            </label>
            <ul className="lg:flex 2xl:text-sm xl:gap-8 2xl:gap-12 lg:gap-6 lg:text-sm text-lg hidden xl:text-base">
              {itemNav.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.label_name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3 xl:gap-5 items-center">
            <div className="lg:relative">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search Product"
                className="pl-10 2xl:pl-16 py-2  lg:text-xs lg:pl-12  xl:text-xs xl:py-3 rounded-full lg:text-[#434343] lg:w-[380px] xl:w-[380px] 2xl:w-[400px] 2xl:font-bold 2xl:text-sm hidden lg:block bg-[#F0F0F0]"
              />
              {/* <FaSearch className="absolute top-3 left-4 text-neutral-600" /> */}
              <FaSearch className="lg:absolute top-3 left-4 lg:top-[8px] xl:top-3 lg:text-[#929292] xl:size-4 lg:size-4 size-5 2xl:size-5 2xl:top-3 2xl:left-6" />
            </div>
            <div className="h-fit">
              <SlBasket className="size-6 xl:size-6 2xl:size-7 cursor-pointer" />
            </div>
            <div className="h-fit">
              <MdAccountCircle className="size-7 xl:size-8 2xl:size-8 cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>

      <motion.div
        variants={menuVariants}
        inixtial="hidden"
        animate={menu ? "visible" : "hidden"}
        transition={{ duration: 0.3 }}
        className="bg-[#000000] text-white xl:hidden"
      >
        <ul className="xl:gap-8 2xl:gap-12 lg:gap-6 lg:text-xs text-lg 2xl:text-base flex flex-col justify-around h-full items-center py-3">
          {itemNav.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.label_name}</a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
