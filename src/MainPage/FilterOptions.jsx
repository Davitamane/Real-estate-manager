import { useState } from "react";
import BedroomButton from "../UI/BedroomButton";
import Button from "../UI/Button";
import Input from "../UI/Input";
import SelectButton from "./SelectButton";
import { useQuery } from "@tanstack/react-query";
import { getRealEstates } from "../services/apiQuery";

function Region() {
  return (
    <div className="absolute z-10 bg-white border border-gray-300 mt-2 p-5 rounded-xl w-217 shadow-md flex flex-col gap-4">
      region
    </div>
  );
}
function SpanPrice() {
  const [minNumber, setMinNumber] = useState("");
  const [maxNumber, setMaxNumber] = useState("");
  const moreThan =
    minNumber !== "" &&
    maxNumber !== "" &&
    Number(minNumber) >= Number(maxNumber);
  return (
    <div className="absolute ml-40 z-10 bg-white border border-gray-300 mt-2 p-5 rounded-xl w-116 shadow-md flex flex-col gap-5 transition-all duration-300">
      <div className="flex text-md font-semibold">
        <h1>ფასის მიხედვით</h1>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between gap-6 relative">
          {" "}
          <Input.Addons
            onChange={setMinNumber}
            number={minNumber}
            error={moreThan}
          />
          <Input.Addons
            onChange={setMaxNumber}
            number={maxNumber}
            error={moreThan}
          />
        </div>
      </div>
    </div>
  );
}
function SpanSize() {
  const [minNumber, setMinNumber] = useState("");
  const [maxNumber, setMaxNumber] = useState("");
  const moreThan =
    minNumber !== "" &&
    maxNumber !== "" &&
    Number(minNumber) >= Number(maxNumber);

  return (
    <div className="absolute ml-40 z-10 bg-white border border-gray-300 mt-2 p-5 rounded-xl w-116 shadow-md flex flex-col gap-5 transition-all duration-300">
      <div className="flex text-md font-semibold">
        <h1>ფართობის მიხედვით</h1>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between gap-6 relative">
          <Input.Addons
            onChange={setMinNumber}
            number={minNumber}
            error={moreThan}
          />
          <Input.Addons
            onChange={setMaxNumber}
            number={maxNumber}
            error={moreThan}
          />
        </div>
        {moreThan && (
          <p className="absolute mt-1 z-10 top-26 left-1- text-xs text-red-500">
            ჩაწერეთ ვალიდური მონაცემები
          </p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-y-2 gap-x-6">
        <h1 className="flex justify-center my-2 font-semibold">მინ. მ²</h1>
        <h1 className="flex justify-center my-2 font-semibold">მაქს. მ²</h1>
        {/* 1 line */}
        <SelectButton
          text="30 მ²"
          onClick={() => setMinNumber(30)}
          numberInput={minNumber}
          number={30}
        />
        <SelectButton
          text="50 მ²"
          onClick={() => setMaxNumber(50)}
          numberInput={maxNumber}
          number={50}
        />
        {/* 2 line */}

        <SelectButton
          text="50 მ²"
          onClick={() => setMinNumber(50)}
          numberInput={minNumber}
          number={50}
        />
        <SelectButton
          text="70 მ²"
          onClick={() => setMaxNumber(70)}
          numberInput={maxNumber}
          number={70}
        />
        {/* 3 line */}
        <SelectButton
          text="70 მ²"
          onClick={() => setMinNumber(70)}
          numberInput={minNumber}
          number={70}
        />
        <SelectButton
          text="90 მ²"
          onClick={() => setMaxNumber(90)}
          numberInput={maxNumber}
          number={90}
        />
        {/* 4 line */}
        <SelectButton
          text="90 მ²"
          onClick={() => setMinNumber(90)}
          numberInput={minNumber}
          number={90}
        />
        <SelectButton
          text="110 მ²"
          onClick={() => setMaxNumber(110)}
          numberInput={maxNumber}
          number={110}
        />
        {/* 5 line */}
        <SelectButton
          text="110 მ²"
          onClick={() => setMinNumber(110)}
          numberInput={minNumber}
          number={110}
        />
        <SelectButton
          text="130 მ²"
          onClick={() => setMaxNumber(130)}
          numberInput={maxNumber}
          number={130}
        />
      </div>
      <div className="flex justify-end gap-3">
        <Button
          onClick={() => {
            //   dispatch({ type: "select" });
            //   setOpen("");
          }}
          locked={moreThan}
        >
          არჩევა
        </Button>
      </div>
    </div>
  );
}
function Count() {
  const estateQuery = useQuery({
    queryKey: ["realEstates"],
    queryFn: getRealEstates,
  });

  const bedrooms = [];
  estateQuery.data.map((estate) => {
    return (
      !bedrooms.includes(estate.bedrooms) && bedrooms.push(estate.bedrooms)
    );
  });
  console.log(bedrooms.sort());

  return (
    <div className="absolute ml-150 z-10 bg-white border border-gray-300 mt-2 p-5 rounded-xl shadow-md flex flex-col gap-4">
      <div className="flex text-md font-semibold">
        <h1>საძინებლების რაოდენობა</h1>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {bedrooms.sort().map((number) => (
          <BedroomButton number={number} key={number} />
        ))}
      </div>
      <div className="flex justify-end gap-3">
        <Button
          onClick={() => {
            //   dispatch({ type: "select" });
            //   setOpen("");
          }}
        >
          არჩევა
        </Button>
      </div>
    </div>
  );
}

function FilterOptions() {
  return (
    <div className="absolute z-10 bg-white mt-2 p-5 rounded-xl w-217 shadow-md flex flex-col gap-4">
      <div className="flex flex-col gap-6">
        {/* {data.map((el) => (
          <FilterCard data={el} key={el.id} type={type} />
        ))} */}
      </div>
      <div className="flex justify-end">
        <div className="flex justify-end gap-3">
          <Button
            onClick={() => {
              //   dispatch({ type: "select" });
              //   setOpen("");
            }}
          >
            არჩევა
          </Button>
        </div>
      </div>
    </div>
  );
}
FilterOptions.Region = Region;
FilterOptions.SpanPrice = SpanPrice;
FilterOptions.SpanSize = SpanSize;
FilterOptions.Count = Count;

export default FilterOptions;
