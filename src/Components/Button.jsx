
function Button({ children, onClick, variant }) {
  const baseStyles = "rounded-lg px-6 py-5 font-semibold ";

  const variants = {
    primary: "bg-[#bd9864] text-black",
    secondary: "bg-white text-black mt-4" ,
    danger: "bg-red-500 text-white",
    success: "bg-green-500 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;

