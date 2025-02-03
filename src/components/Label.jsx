const Label = ({ name, textColor, textSize = "text-5xl", custom }) => {
  return (
    <label
      className={`text-center ${textColor} font-extrabold ${textSize} leading-11 block ${custom}`}
    >
      {name}
    </label>
  );
};

export default Label;
