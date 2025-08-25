function FilterButton({ onClick, children, open }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 ${open ? "text-main" : ""} hover:cursor-pointer`}
    >
      {children}
    </button>
  );
}

export default FilterButton;
