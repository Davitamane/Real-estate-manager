import { FaLocationDot } from "react-icons/fa6";
import photo from "../assets/download.jpeg";
import SmallInfo from "../UI/SmallInfo";
import { IoBed } from "react-icons/io5";
import { BiSolidArea } from "react-icons/bi";
import { BsFillSignpostFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";

function ListingPage() {
  return (
    <div className="p-20 w-full">
      <div className="flex w-full gap-16">
        {/* first half */}
        <div className="flex w-1/2 flex-col">
          <div className="absolute m-8 text-xs font-bold text-white py-1.5 px-4 bg-gray-900/50 rounded-full">
            იყიდება
          </div>
          <img src={photo} className="w-full rounded-t-2xl" />
          <p className="flex w-full justify-end text-sm text-gray-500 my-2">
            გამოქვეყნების თარიღი 08/08/25
          </p>
        </div>
        {/* Second half */}
        <div className="flex mt-5 flex-col w-1/3">
          <h1 className="font-bold text-3xl">80, 458 ₾</h1>
          {/* info container */}
          <div className="text-gray-400 mt-5 flex flex-col gap-3">
            <SmallInfo>
              <FaLocationDot />
              <p>თბილისი, ი. ჭავჭავაძის 53</p>
            </SmallInfo>
            <SmallInfo>
              <BiSolidArea />
              <p>ფართი 55 მ²</p>
            </SmallInfo>
            <SmallInfo>
              <IoBed />
              <p>საძინებელი 2</p>
            </SmallInfo>
            <SmallInfo>
              <BsFillSignpostFill />
              <p>საფოსტო ინდექსი 2525</p>
            </SmallInfo>
          </div>
          {/* description */}
          <div className="text-gray-400 my-8 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            excepturi reprehenderit eligendi eos similique, autem aliquid
            sapiente nihil iusto. Doloribus necessitatibus optio temporibus at
            laudantium quos enim nemo, dolor dignissimos.
          </div>
          {/* agent */}
          <div className="p-4 border rounded-md border-gray-300 flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <img src={photo} className="size-15 rounded-full" />
              <div>
                <p>სოფიო ვინცხა</p>
                <p className="text-sm text-gray-500">აგენტი</p>
              </div>
            </div>
            {/* agent info */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 text-gray-500 text-xs">
                <CiMail className="size-4" />
                <p>sophio.gelovani@redberry.ge</p>
              </div>
              <div className="flex items-center gap-1 text-gray-500 text-xs">
                <MdOutlinePhoneInTalk className="size-4" />
                <p>577 777 777</p>
              </div>
            </div>
          </div>
          <button className="px-4 py-2 mt-3 border-gray-500 rounded-lg border w-fit text-xs">ლისტინგის წაშლა</button>
        </div>
      </div>
    </div>
  );
}

export default ListingPage;
