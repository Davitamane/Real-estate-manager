import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { MainPageContext } from "../contexts/MainPageContext";

function FilterDisplay({ children, id, type }) {
  const { dispatch } = useContext(MainPageContext);
  return (
    <div className="flex gap-1 text-gray-600 font-thin border-1 p-1 pl-3 pr-3 rounded-2xl border-gray-400">
      <p>{children}</p>
      <button
        onClick={() =>
          id
            ? dispatch({ type: `pop_${type}`, payload: id })
            : dispatch({ type: `pop_${type}` })
        }
      >
        <IoMdClose />
      </button>
    </div>
  );
}

export default FilterDisplay;
