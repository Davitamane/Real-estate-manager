import FilterDisplay from "./FilterDisplay";
import { MainPageContext } from "../contexts/MainPageContext";
import { useContext } from "react";
import { useQueryClient } from "@tanstack/react-query";

function FilterDisplayContainer() {
  const { filters, dispatch } = useContext(MainPageContext);
  const queryClient = useQueryClient();

  const regionData = queryClient.getQueryData(["regions"]) || [];
  const priceData =
    filters.final.priceRange.length > 0 ? filters.final.priceRange : false;
  const areaData = filters.final.area.length > 0 ? filters.final.area : false;
  const bedroomsData =
    filters.final.bedrooms.length > 0 ? filters.final.bedrooms : false;

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
      {priceData && (
        <FilterDisplay type="price">
          {priceData[0]}₾ - {priceData[1]}₾
        </FilterDisplay>
      )}
      {areaData && (
        <FilterDisplay type="area">
          {areaData[0]} მ² - {areaData[1]} მ²
        </FilterDisplay>
      )}
      {bedroomsData &&
        bedroomsData.map((bedroom) => (
          <FilterDisplay key={bedroom} id={bedroom} type="bedrooms">
            {bedroom} საძინებელი
          </FilterDisplay>
        ))}
      {(filters.final.region.length > 0 ||
        priceData ||
        areaData ||
        bedroomsData) && (
        <button
          className="flex gap-1 font-medium"
          onClick={() => dispatch({ type: "empty" })}
        >
          გასუფთავება
        </button>
      )}
    </div>
  );
}

export default FilterDisplayContainer;
