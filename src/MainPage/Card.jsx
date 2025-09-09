import { FaLocationDot } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { BiSolidArea } from "react-icons/bi";
import { BsFillSignpostFill } from "react-icons/bs";
import SmallInfo from "../UI/SmallInfo";
import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <Link to={`/ListingPage/${data.id}`}>
      <div className="w-full border rounded-2xl border-gray-300 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="absolute m-4 text-xs font-bold text-white py-1 px-3 bg-gray-700/50 rounded-full">
          {data.is_rental ? "ქირავდება" : "იყიდება"}
        </div>
        <img
          src={data.image}
          className="w-full h-48 object-cover object-center"
        />
        <div className="m-4">
          <h1 className="font-bold text-2xl">{data.price.toLocaleString()} ₾</h1>
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <FaLocationDot />
            <p>
              {data.city.name}, {data.address}
            </p>
          </div>
          <div className="flex gap-5 text-gray-500">
            <SmallInfo>
              <IoBed />
              <p>{data.bedrooms}</p>
            </SmallInfo>
            <SmallInfo>
              <BiSolidArea />
              <p>{data.area} მ²</p>
            </SmallInfo>
            <SmallInfo>
              <BsFillSignpostFill />
              <p>{data.zip_code}</p>
            </SmallInfo>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
