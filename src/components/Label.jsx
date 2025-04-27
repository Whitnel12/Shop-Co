const Label = ({ name, textColor, textSize = "text-4xl", custom }) => {
  return (
    <label
      className={`text-center ${textColor} font-extrabold ${textSize}   block ${custom} 2xl:text-5xl 2xl:w-[50%]`}
    >
      {name}
    </label>
  );
};

export default Label;
