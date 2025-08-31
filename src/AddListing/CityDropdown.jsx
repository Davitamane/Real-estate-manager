import { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function CityDropdown({ data = [], def, setState, id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (def) {
      const found = data.find((city) => city.id === def);
      if (found) setSelected(found);
    }
  }, [def, data]);

  useEffect(() => {
    // Reset when region changes
    setSelected(null);
    setState(null);
  }, [id, setState]);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    setState(option.id);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative w-full text-sm font-medium bg-white"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center border border-gray-300 rounded-md px-4 py-3 cursor-pointer 
          ${!data.length ? "bg-gray-100 cursor-not-allowed" : ""}`}
      >
        <div className="flex items-center gap-2">
          {selected ? selected.name : ""}
        </div>
        {isOpen ? (
          <MdKeyboardArrowUp className="w-5 h-5" />
        ) : (
          <MdKeyboardArrowDown className="w-5 h-5" />
        )}
      </div>

      {isOpen && data.length > 0 && (
        <div className="absolute z-10 bg-white border border-gray-300 rounded-md w-full shadow-md max-h-60 overflow-y-auto">
          {data.map((option) => (
            <div
              key={option.id}
              onClick={() => handleSelect(option)}
              className="px-4 py-3 hover:bg-purple-50 cursor-pointer"
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CityDropdown;
