import { useContext, useState } from "react";
import BedroomButton from "../UI/BedroomButton";
import Button from "../UI/Button";
import Input from "../UI/Input";
import SelectButton from "./SelectButton";
import { useQuery } from "@tanstack/react-query";
import { getRealEstates, getRegions } from "../services/apiQuery";
import RegionContainer from "./RegionContainer";
import { MainPageContext } from "../contexts/MainPageContext";

function Region() {
  const regionsQuery = useQuery({
    queryKey: ["regions"],
    queryFn: getRegions,
  });
  const { dispatch, setOpen } = useContext(MainPageContext);

  return (
    <div className="absolute z-10 bg-white border border-gray-300 mt-2 p-5 rounded-xl w-217 shadow-md flex flex-col gap-4">
      <div className="flex text-md font-semibold">
        <h1>რეგიონის მიხედვით</h1>
      </div>
      {regionsQuery.isFetched && (
        <div className="grid grid-cols-3 gap-5">
          {regionsQuery.data.map((region) => (
            <RegionContainer data={region} key={region.id} />
          ))}
        </div>
      )}
      <div className="flex justify-end gap-3">
        <Button
          onClick={() => {
            dispatch({ type: "select" });
            setOpen("");
          }}
        >
          არჩევა
        </Button>
      </div>
    </div>
  );
}
function SpanPrice() {
  const { dispatch, setOpen, filters } = useContext(MainPageContext);
  const [minNumber, setMinNumber] = useState("");
  const [maxNumber, setMaxNumber] = useState("");
  const prices = [minNumber, maxNumber];
  console.log(
    filters.final.priceRange
    //  ? filters.final.priceRange[0] : ""
  );

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
        <h1 className="flex justify-center my-2 font-semibold">მინ. ფასი</h1>
        <h1 className="flex justify-center my-2 font-semibold">მაქს. ფასი</h1>
        {/* 1 line */}
        <SelectButton
          text="50,000 ₾"
          onClick={() => setMinNumber(50000)}
          numberInput={minNumber}
          number={50000}
        />
        <SelectButton
          text="100,000 ₾"
          onClick={() => setMaxNumber(100000)}
          numberInput={maxNumber}
          number={100000}
        />
        {/* 2 line */}
        <SelectButton
          text="100,000 ₾"
          onClick={() => setMinNumber(100000)}
          numberInput={minNumber}
          number={100000}
        />
        <SelectButton
          text="150,000 ₾"
          onClick={() => setMaxNumber(150000)}
          numberInput={maxNumber}
          number={150000}
        />
        {/* 3 line */}
        <SelectButton
          text="150,000 ₾"
          onClick={() => setMinNumber(150000)}
          numberInput={minNumber}
          number={150000}
        />
        <SelectButton
          text="200,000 ₾"
          onClick={() => setMaxNumber(200000)}
          numberInput={maxNumber}
          number={200000}
        />
        {/* 4 line */}
        <SelectButton
          text="200,000 ₾"
          onClick={() => setMinNumber(200000)}
          numberInput={minNumber}
          number={200000}
        />
        <SelectButton
          text="250,000 ₾"
          onClick={() => setMaxNumber(250000)}
          numberInput={maxNumber}
          number={250000}
        />
        {/* 5 line */}
        <SelectButton
          text="250,000 ₾"
          onClick={() => setMinNumber(250000)}
          numberInput={minNumber}
          number={250000}
        />
        <SelectButton
          text="300,000 ₾"
          onClick={() => setMaxNumber(300000)}
          numberInput={maxNumber}
          number={300000}
        />
      </div>
      <div className="flex justify-end gap-3">
        <Button
          onClick={() => {
            dispatch({ type: "toggle_price", payload: prices });
            dispatch({ type: "select" });
            setOpen("");
          }}
          locked={moreThan}
        >
          არჩევა
        </Button>
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
  const [selected, setSelected] = useState("");
  const { dispatch, setOpen } = useContext(MainPageContext);

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

  return (
    <div className="absolute ml-150 z-10 bg-white border border-gray-300 mt-2 p-5 rounded-xl shadow-md flex flex-col gap-4">
      <div className="flex text-md font-semibold">
        <h1>საძინებლების რაოდენობა</h1>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {bedrooms.sort().map((number) => (
          <BedroomButton
            number={number}
            key={number}
            setSelected={setSelected}
            selected={selected}
          />
        ))}
      </div>
      <div className="flex justify-end gap-3">
        <Button
          onClick={() => {
            dispatch({ type: "select" });
            setOpen("");
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
