import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import FilterButton from "./FilterButton";

function Filter({ setOpen, open }) {
  function handleOpen(name) {
    name === open ? setOpen("") : setOpen(name);
  }

  return (
    <div className="gap-5 border border-gray-300 rounded-xl h-fit inline-flex pt-2 pb-2 px-4">
      <FilterButton
        open={open === "region"}
        onClick={() => handleOpen("region")}
      >
        <p className="text-lg">რეგიონი</p>
        {open === "region" ? (
          <MdKeyboardArrowUp className="size-7" />
        ) : (
          <MdKeyboardArrowDown className="size-7" />
        )}
      </FilterButton>
      <FilterButton
        open={open === "priceCategory"}
        onClick={() => handleOpen("priceCategory")}
      >
        <p className="text-lg">საფასო კატეგორია</p>
        {open === "priceCategory" ? (
          <MdKeyboardArrowUp className="size-7" />
        ) : (
          <MdKeyboardArrowDown className="size-7" />
        )}
      </FilterButton>
      <FilterButton open={open === "area"} onClick={() => handleOpen("area")}>
        <p className="text-lg">ფართობი</p>
        {open === "area" ? (
          <MdKeyboardArrowUp className="size-7" />
        ) : (
          <MdKeyboardArrowDown className="size-7" />
        )}
      </FilterButton>
      <FilterButton
        open={open === "bedrooms"}
        onClick={() => handleOpen("bedrooms")}
      >
        <p className="text-lg">საძინებლების რაოდენობა</p>
        {open === "bedrooms" ? (
          <MdKeyboardArrowUp className="size-7" />
        ) : (
          <MdKeyboardArrowDown className="size-7" />
        )}
      </FilterButton>
    </div>
  );
}

export default Filter;
