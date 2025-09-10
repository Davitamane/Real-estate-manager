import { FaLocationDot } from "react-icons/fa6";
import SmallInfo from "../UI/SmallInfo";
import { IoBed } from "react-icons/io5";
import { BiSolidArea } from "react-icons/bi";
import { BsFillSignpostFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import Card from "../MainPage/Card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRealEstate } from "../services/apiQuery";
import { useState } from "react";
import DeleteModal from "../ListingPage/DeleteModal";

function ListingPage() {
  const { id } = useParams();
  const [modal, setModal] = useState(false);

  const dataQuery = useQuery({
    queryKey: ["real-estate", id],
    queryFn: () => getRealEstate(id),
  });
  // console.log(dataQuery.data);
  const data = dataQuery.data;
  if (dataQuery.isLoading) return null;

  return (
    <>
      <div className="p-20 w-full">
        <div className="flex w-full gap-16">
          {/* first half */}
          <div className="flex w-1/2 flex-col">
            <div className="absolute m-8 text-xs font-bold text-white py-1.5 px-4 bg-gray-900/50 rounded-full">
              {data.is_rental ? "ქირავდება" : "იყიდება"}
            </div>
            <img
              src={data.image}
              className="w-full rounded-t-2xl h-128 object-cover object-center"
            />
            <p className="flex w-full justify-end text-sm text-gray-500 my-2">
              გამოქვეყნების თარიღი{" "}
              {new Date(data.created_at).toLocaleDateString("en-GB")}
            </p>
          </div>
          {/* Second half */}
          <div className="flex mt-5 flex-col w-1/3">
            <h1 className="font-bold text-3xl">
              {data.price.toLocaleString()} ₾
            </h1>
            {/* info container */}
            <div className="text-gray-400 mt-5 flex flex-col gap-3">
              <SmallInfo>
                <FaLocationDot />
                <p>
                  {data.city.name}, {data.address}
                </p>
              </SmallInfo>
              <SmallInfo>
                <BiSolidArea />
                <p>ფართი {data.area} მ²</p>
              </SmallInfo>
              <SmallInfo>
                <IoBed />
                <p>საძინებელი {data.bedrooms}</p>
              </SmallInfo>
              <SmallInfo>
                <BsFillSignpostFill />
                <p>საფოსტო ინდექსი {data.zip_code}</p>
              </SmallInfo>
            </div>
            {/* description */}
            <div className="text-gray-400 my-8 text-sm">{data.description}</div>
            {/* agent */}
            <div className="p-4 border rounded-md border-gray-300 flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <img
                  src={data.agent.avatar}
                  className="size-15 rounded-full object-cover object-center"
                />
                <div>
                  <p>
                    {data.agent.name} {data.agent.surname}
                  </p>
                  <p className="text-sm text-gray-500">აგენტი</p>
                </div>
              </div>
              {/* agent info */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <CiMail className="size-4" />
                  <p>{data.agent.email}</p>
                </div>
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <MdOutlinePhoneInTalk className="size-4" />
                  <p>{data.agent.phone}</p>
                </div>
              </div>
            </div>
            <button
              className="px-4 py-2 mt-3 border-gray-500 rounded-lg border w-fit text-xs text-gray-500 hover:bg-gray-500 hover:text-white transition-all duration-300"
              onClick={() => setModal(true)}
            >
              ლისტინგის წაშლა
            </button>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h1 className="font-extrabold text-xl px-20">
          ბინები მსგავს ლოკაციაზე
        </h1>
        <div className="relative flex items-center">
          <button className="absolute left-6 z-20 transition duration-500 p-2 rounded-full hover:shadow-xl">
            <FaArrowLeft className="size-5" />
          </button>

          <div className="w-full grid my-10 gap-4 grid-cols-4 mx-20">
            {/* <Card />
            <Card />
            <Card />
            <Card /> */}
          </div>

          <button className="absolute right-6 z-20 p-2 transition duration-500 rounded-full hover:shadow-xl">
            <FaArrowRight className="size-5" />
          </button>
        </div>
        <DeleteModal modal={modal} setModal={setModal} id={id} />
      </div>
    </>
  );
}

export default ListingPage;
