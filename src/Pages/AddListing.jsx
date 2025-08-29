import { useQuery } from "@tanstack/react-query";
import Checkbox from "../AddListing/Checkbox";
import Dropdown from "../UI/Dropdown";
import Input from "../UI/Input";
import { getCities, getRegions } from "../services/apiQuery";

function AddListing() {
  const citiesQuery = useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
  });
  const regionsQuery = useQuery({
    queryKey: ["regions"],
    queryFn: getRegions,
  });

  console.log(regionsQuery.data);
  if (citiesQuery.isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="flex justify-center w-full text-2xl font-bold px-20 py-10">
        ლისტინგის დამატება
      </h1>
      <div className="mx-80 flex flex-col gap-16">
        {/* გარიგების ტიპი */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl">გარიგების ტიპი</h3>
          <Checkbox />
        </div>

        {/* მდებარეობა */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl">მდებარეობა</h3>
          <div className="grid grid-cols-2 gap-5">
            <Input text="მისამართი">
              <input
                type="text"
                className="w-full text-sm bg-white border border-gray-300 rounded-md resize-none focus:outline-none focus:border-2 px-4 py-3"
              />
            </Input>
            <Input text="საფოსტო ინდექსი">
              <input
                type="number"
                className="w-full text-sm bg-white border border-gray-300 rounded-md resize-none focus:outline-none focus:border-2 px-4 py-3"
              />
            </Input>
            <Input text="რეგიონი">
              <Dropdown data={regionsQuery.data} />
            </Input>
            <Input text="ქალაქი">
              <Dropdown data={citiesQuery.data} />
            </Input>
          </div>
        </div>

        {/* ბინის დეტალები */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl">ბინის დეტალები</h3>
          <div className="grid grid-cols-2 gap-5">
            <Input text="ფასი">
              <input
                type="text"
                className="w-full text-sm bg-white border border-gray-300 rounded-md resize-none focus:outline-none focus:border-2 px-4 py-3"
              />
            </Input>
            <Input text="ფართობი">
              <input
                type="number"
                className="w-full text-sm bg-white border border-gray-300 rounded-md resize-none focus:outline-none focus:border-2 px-4 py-3"
              />
            </Input>
            <Input text="საძინებლების რაოდენობა">
              <input
                type="number"
                className="w-full text-sm bg-white border border-gray-300 rounded-md resize-none focus:outline-none focus:border-2 px-4 py-3"
              />
            </Input>
          </div>
        </div>

        {/* აგენტი */}
        <div></div>
      </div>
    </div>
  );
}

export default AddListing;
