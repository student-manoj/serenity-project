import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";

const EventsCard = ({ img, title, date, City }) => {
  return (
    <>
      <div className="bg-white rounded-md">
        <div>
          <Image src={img} alt="Image" className="w-full rounded-md" />
          <div className="p-5 flex flex-col gap-">
            <ul className="flex gap-5">
              <li className="flex gap-1 items-center">
                <CiCalendar className="text-[#FF7A00]" />
                <span className="text-[11px]">{date}</span>
              </li>
              <li className="flex gap-1 items-center">
                <IoLocationOutline className="text-[#FF7A00]" />
                <span className="text-[11px]">{City}</span>
              </li>
            </ul>
            <h4 className="text-xl font-medium py-4">{title}</h4>
            <button className="flex items-center gap-3">
              <span>Read More</span>
              <BsArrowRight className="h-8 w-14 text-[#FF7A00]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsCard;
