const Label = ({ name, textColor, textSize = "text-5xl" }) => {
  return (
    <label
      className={`text-center ${textColor} font-extrabold ${textSize} leading-11 block`}
    >
      {name}
    </label>
  );
};

export default Label;
