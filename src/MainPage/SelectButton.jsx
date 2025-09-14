function SelectButton({ onClick, text, numberInput, number = 0 }) {

  return (
    <button
      className={`hover:bg-gray-200 transition-all py-1 px-2 rounded-full ${Number(numberInput) === number ? "bg-gray-200" : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default SelectButton;
