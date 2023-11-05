const Button = ({
  text,
  onClick,
  isLoading,
  disabled,
  variant,
  textColor = "red-500",
}) => {
  if (variant === "primary") {
    return (
      <button
        className={
          "py-[6px] px-7 rounded-lg flex items-center justify-center font-medium bg-blue-500 text-white"
        }
        onClick={onClick}
        disabled={isLoading || disabled}
      >
        <p className={`text-13 leading-6 text-${textColor}`}>{text}</p>
      </button>
    );
  }

  if (variant === "tertiary") {
    return (
      <button
        className={
          "hover:bg-[#483FEC] rounded-xl px-[10px] py-[2px] flex items-center space-x-2 "
        }
        onClick={onClick}
        disabled={isLoading || disabled}
      >
        <p className="text-13 leading-8 text-white font-medium">{text}</p>
      </button>
    );
  }

  return (
    <button
      className={
        "px-4 py-2 border border-blue rounded flex items-center space-x-1 text-15"
      }
      onClick={onClick}
      disabled={isLoading || disabled}
    >
      <p>{text}</p>
    </button>
  );
};

export default Button;
