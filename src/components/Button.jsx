const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-4 py-2 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red rounded-full text-white border-coral-red"
    } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrowright icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
