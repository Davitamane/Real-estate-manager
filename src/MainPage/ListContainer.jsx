import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getRealEstates } from "../services/apiQuery";
import { useContext } from "react";
import { MainPageContext } from "../contexts/MainPageContext";

function ListContainer() {
  const { filters } = useContext(MainPageContext);

  const estateQuery = useQuery({
    queryKey: ["realEstates"],
    queryFn: getRealEstates,
  });
  if (estateQuery.isLoading) return null;

  const filteredTasks = estateQuery.data.filter((estate) => {
    const { region, priceRange, area, bedrooms } = filters.final;

    const matchingRegion =
      !region.length || region.includes(estate.city.region.id);

    const matchingPrice =
      !priceRange.length ||
      (estate.price >= priceRange[0] && estate.price <= priceRange[1]);

    const matchingArea =
      !area.length ||
      (estate.area >= area[0] && estate.area <= area[1]);

    const matchingBedrooms =
      !bedrooms.length || bedrooms.includes(estate.bedrooms);

    return matchingRegion && matchingPrice && matchingArea && matchingBedrooms;
  });

  // console.log(filteredTasks);

  return (
    <div className="w-full grid my-10 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filteredTasks.map((estate) => {
        return <Card data={estate} key={estate.id} />;
      })}
    </div>
  );
}

export default ListContainer;
