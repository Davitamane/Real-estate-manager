import photo from "../assets/download.jpeg";
import { FaLocationDot } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { BiSolidArea } from "react-icons/bi";
import { BsFillSignpostFill } from "react-icons/bs";
import SmallInfo from "../UI/SmallInfo";
import { Link } from "react-router-dom";

function Card() {
  return (
    <Link to="/ListingPage">
      <div className="w-full border rounded-2xl border-gray-300 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="absolute m-4 text-xs font-bold text-white py-1 px-3 bg-gray-700/50 rounded-full">
          ქირავდება
        </div>
        <img src={photo} className="w-full" />
        <div className="m-4">
          <h1 className="font-bold text-2xl">80 000 ₾</h1>
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <FaLocationDot />
            <p>თბილისი, ი. ჭავჭავაძის 45</p>
          </div>
          <div className="flex gap-5 text-gray-500">
            <SmallInfo>
              <IoBed />
              <p>2</p>
            </SmallInfo>
            <SmallInfo>
              <BiSolidArea />
              <p>55 მ²</p>
            </SmallInfo>
            <SmallInfo>
              <BsFillSignpostFill />
              <p>0160</p>
            </SmallInfo>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
