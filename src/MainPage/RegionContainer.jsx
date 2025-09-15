import { useContext } from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { MainPageContext } from "../contexts/MainPageContext";

function RegionContainer({ data }) {
  const { dispatch, filters } = useContext(MainPageContext);

  const isChecked = filters.temp.region.includes(data.id);
  return (
    <button
      className="flex items-center gap-1"
      onClick={() => dispatch({ type: "toggle_region", payload: data.id })}
    >
      {isChecked ? (
        <MdCheckBox className="size-7 text-green-600" />
      ) : (
        <MdCheckBoxOutlineBlank className="size-7" />
      )}
      <p>{data.name}</p>
    </button>
  );
}

export default RegionContainer;
