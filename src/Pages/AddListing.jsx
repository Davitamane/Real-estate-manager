import { useQuery } from "@tanstack/react-query";
import Checkbox from "../AddListing/Checkbox";
import Dropdown from "../UI/Dropdown";
import Input from "../UI/Input";
import { RiDeleteBin6Line } from "react-icons/ri";
import { getAgents, getCities, getRegions } from "../services/apiQuery";
import { CiImageOn } from "react-icons/ci";
import { useState } from "react";
import AgentDropdown from "../UI/AgentDropdown";
import Button from "../UI/Button";
import { Controller, useForm } from "react-hook-form";

function AddListing() {
  const [image, setImage] = useState(null);

  const citiesQuery = useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
  });
  const regionsQuery = useQuery({
    queryKey: ["regions"],
    queryFn: getRegions,
  });
  const agentsQuery = useQuery({
    queryKey: ["agents"],
    queryFn: getAgents,
  });

  const {
    register,
    // handleSubmit,
    // formState: { errors },
    // reset,
    // resetField,
    watch,
    control,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      address: "",
      image: "",
      region_id: "",
      description: "",
      city_id: null,
      zip_code: null,
      price: null,
      area: null,
      bedrooms: null,
      is_rental: null,
      agent_id: null,
    },
  });

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
  }
  const region = watch("region_id");
  console.log(region);

  // console.log(agentsQuery.data);
  if (citiesQuery.isLoading) return <div>Loading...</div>;

  return (
    <div className="mb-30">
      <h1 className="flex justify-center w-full text-2xl font-bold px-20 py-10">
        ლისტინგის დამატება
      </h1>
      <div className="mx-80 flex flex-col gap-16">
        {/* გარიგების ტიპი */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl">გარიგების ტიპი</h3>
          <Controller
            name="is_rental"
            control={control}
            render={({ field }) => (
              <Checkbox setState={field.onChange} value={field.value} />
            )}
          />
        </div>

        {/* მდებარეობა */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl">მდებარეობა</h3>
          <div className="grid grid-cols-2 gap-5">
            <Input text="მისამართი">
              <input
                type="text"
                className="w-full text-sm bg-white border border-gray-300 rounded-md resize-none focus:outline-none focus:border-2 px-4 py-3"
                {...register("address")}
              />
            </Input>
            <Input text="საფოსტო ინდექსი">
              <input
                type="number"
                className="w-full text-sm bg-white border border-gray-300 rounded-md resize-none focus:outline-none focus:border-2 px-4 py-3"
                {...register("zip_code")}
              />
            </Input>
            <Input text="რეგიონი">
              <Controller
                name="region_id"
                control={control}
                render={({ field }) => (
                  <Dropdown
                    data={regionsQuery.data}
                    setState={field.onChange}
                    value={field.value}
                  />
                )}
              />
            </Input>
            <Input text="ქალაქი">
              <Controller
                name="city_id"
                control={control}
                render={({ field }) => (
                  <Dropdown
                    data={citiesQuery.data}
                    setState={field.onChange}
                    value={field.value}
                  />
                )}
              />
            </Input>
          </div>
        </div>

        {/* ბინის დეტალები */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl">ბინის დეტალები</h3>
          <div className="grid grid-cols-2 gap-5">
            <Input text="ფასი">
              <input
                type="number"
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
          <Input text="აღწერა">
            <textarea className="w-full h-40 text-sm bg-white border border-gray-300 rounded-md resize-none focus:outline-none focus:border-2 p-4"></textarea>
          </Input>

          <Input text="ატვირთე ფოტო">
            <div
              className="w-full mx-auto border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer h-32"
              onClick={() => document.getElementById("imageInput").click()}
            >
              <input
                id="imageInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              {image ? (
                <div className="relative">
                  <img
                    src={URL.createObjectURL(image)}
                    className="w-20 h-20 mb-1 rounded-full object-cover object-center"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setImage(null);
                    }}
                    className="absolute -bottom-0.5 -right-0.5 bg-white p-1 rounded-full shadow hover:bg-gray-200 duration-200 ease-in-out"
                  >
                    <RiDeleteBin6Line className="text-gray-400" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center text-gray-500">
                  <CiImageOn className="w-8 h-8 mb-1" />
                  <p className="text-sm">ატვირთე ფოტო</p>
                </div>
              )}
            </div>
          </Input>
        </div>

        {/* აგენტი */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl">აგენტი</h3>
          <div className="grid grid-cols-2 gap-5">
            <Input text="აირჩიე" required={false}>
              <AgentDropdown data={agentsQuery.data} />
            </Input>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full flex justify-end gap-10">
          <Button styleType="secondary">გაუქმება</Button>
          <Button>დაამატე ლისტინგი</Button>
        </div>
      </div>
    </div>
  );
}

export default AddListing;
