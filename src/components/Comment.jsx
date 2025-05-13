import { FaStar } from "react-icons/fa";
import { MdDone } from "react-icons/md";

const Comment = ({ star, name, comment, custom }) => {
  return (
    <div
      className={`border-[1.5px] md:min-w-[45%]  md:max-w-[45%] ${custom}  min-w-[100%]  md:h-fit border-[#E7E7E7] p-5 rounded-3xl flex flex-col gap-y-1 min-h-55`}
    >
      <div className="flex gap-1">
        {[...Array(star)].map((_, i) => (
          <FaStar key={i} className="text-amber-400 size-[15px]" />
        ))}
      </div>

      <div className="flex gap-2 items-center">
        <h3 className="font-bold text-[16.5px]">{name}</h3>
        <MdDone className="text-white size-5 p-1 rounded-full bg-green-500" />
      </div>
      {/* <MdDone /> */}
      {/* <h1>hello</h1> */}
      <p className="line-clamp-6 text-[#7E7E7E] text-base">{comment}</p>
    </div>
  );
};

export default Comment;
