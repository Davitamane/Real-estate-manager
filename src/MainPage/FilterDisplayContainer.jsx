import FilterDisplay from "./FilterDisplay";
import { MainPageContext } from "../contexts/MainPageContext";
import { useContext } from "react";
import { useQueryClient } from "@tanstack/react-query";

function FilterDisplayContainer() {
  const { filters, dispatch } = useContext(MainPageContext);
  const queryClient = useQueryClient();

  const regionData = queryClient.getQueryData(["regions"]) || [];

  const filteredRegion = regionData.filter((region) =>
    filters.final.region.includes(region.id)
  );

  return (
    <div className="flex mt-4 gap-3 items-center">
      {filteredRegion.map((region) => (
        <FilterDisplay key={region.id} id={region.id} type="region">
          {region.name}
        </FilterDisplay>
      ))}
      <button
        className="flex gap-1 font-medium"
        onClick={() => dispatch({ type: "empty" })}
      >
        გასუფთავება
      </button>
    </div>
  );
}

export default FilterDisplayContainer;
