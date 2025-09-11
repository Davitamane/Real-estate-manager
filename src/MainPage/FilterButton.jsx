function FilterButton({ onClick, children, open }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 ${open ? "bg-gray-200" : ""} hover:cursor-pointer pr-1 pl-3 transition-all rounded-md`}
    >
      {children}
    </button>
  );
}

export default FilterButton;
