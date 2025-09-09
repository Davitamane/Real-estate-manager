import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getRealEstates } from "../services/apiQuery";

function ListContainer() {
  const estateQuery = useQuery({
    queryKey: ["realEstates"],
    queryFn: getRealEstates,
  });
  if (estateQuery.isLoading) return null;
  // console.log(estateQuery.data);

  return (
    <div className="w-full grid my-10 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {estateQuery.data.map((estate) => {
        return <Card data={estate} key={estate.id} />;
      })}
    </div>
  );
}

export default ListContainer;
