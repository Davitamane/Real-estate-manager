const baseStyles =
  "px-3 py-2 font-thin gap-2 cursor-pointer h-fit relative flex items-center justify-center transition-all duration-300";

const typeStyles = {
  primary: "bg-main text-white border-2 rounded-md hover:bg-orange-700",
  secondary:
    "bg-white border border-main rounded-md border-2 text-main hover:bg-main hover:border-main hover:text-white",
  black: "bg-white border rounded-md border-2",
};

function Button({ children, onClick, styleType = "primary", type = "button" }) {
  const style = `${baseStyles} ${typeStyles[styleType]}`;

  return (
    <button className={style} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
