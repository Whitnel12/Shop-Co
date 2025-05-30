import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = ({ children, link }) => {
  return (
    <Link to={link} className="h-[90%]">
      <div className="h-[90%] w-fit flex flex-col gap-y-2 justify-centermd:w-[400px]">
        {children}
      </div>
    </Link>
  );
};

const CartImage = ({ src, alt }) => {
  return (
    <div className="bg-[#F0EFED] h-[70%] w-[210px] rounded-2xl flex items-center justify-center">
      <img src={src} alt={alt} />
    </div>
  );
};

const CartText = ({ label, rating1, rating2, price }) => {
  return (
    <div className="leading-6 w-full">
      <p className="font-bold text-[16.5px]">{label}</p>
      <div className="flex gap-1 items-center">
        <FaStar className="text-amber-400 size-[15px]" />
        <FaStar className="text-amber-400 size-[15px] " />
        <FaStar className="text-amber-400 size-[15px] " />
        <FaStar className="text-amber-400 size-[15px] " />
        <FaStar className="text-amber-400 size-[15px] " />
        <div className="flex pl-2 items-center">
          <p className="text-sm font-medium">{rating1}/ </p>
          <span className=" text-[#8b8b8b]">{rating2}</span>
        </div>
      </div>
      <p className="font-bold text-2xl">{price}</p>
    </div>
  );
};

Cart.CartImage = CartImage;
Cart.CartText = CartText;

export default Cart;
