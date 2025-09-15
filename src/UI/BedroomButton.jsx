import { useContext } from "react";
import { MainPageContext } from "../contexts/MainPageContext";

function BedroomButton({ number }) {
  const { dispatch, filters } = useContext(MainPageContext);
  const selected = filters.temp.bedrooms.includes(number);

  return (
    <button
      onClick={() => dispatch({ type: "toggle_bedrooms", payload: number })}
      className={`${selected ? "bg-gray-400 text-white" : ""} w-12 h-12 border-2 border-gray-400 rounded-xl text-gray-400 hover:bg-gray-400 hover:text-white transition-all duration-300`}
    >
      {number}
    </button>
  );
}

export default BedroomButton;
