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
    const matchingRegion =
      filters.final.region.length === 0 ||
      filters.final.region.includes(estate.city.region.id);


    // console.log(filters.final.region.includes(estate.city.region.id));

    // const matchingPrice =
    //   filters.final.priceRange === 0 ||
    //   (estate.price > filters.final.priceRange[0] &&
    //     estate.price < filters.final.priceRange[1]);

    // const matchingArea =
    //   filters.final.area === 0 ||
    //   (estate.area > filters.final.area[0] &&
    //     estate.area < filters.final.area[1]);

    // const matchingBedrooms =
    //   filters.final.bedrooms.length === 0 ||
    //   filters.final.bedrooms.includes(estate.bedrooms);

    return matchingRegion;
    // matchingArea || matchingBedrooms || matchingPrice ||
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
