const baseStyles =
  "px-3 py-2 font-thin gap-2 cursor-pointer h-fit relative flex items-center justify-center";

const typeStyles = {
  primary: "bg-main text-white border-2 border-main rounded-md",
  secondary: "bg-white border border-main rounded-md border-2 text-main",
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
