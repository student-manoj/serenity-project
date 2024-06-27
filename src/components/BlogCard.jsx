import Image from "next/image";
import { FaUser, FaCalendar } from "react-icons/fa";
const BlogCard = ({ img, title, description, date, userName }) => {
  return (
    <>
      <div className="relative">
        <div className="">
          <Image src={img} alt="" className="w-full rounded-md" />
        </div>
        <div className="px-5">
          <div className="bg-white shadow-md p-7 flex flex-col gap-4 absolute top-[90%] left-0 right-10 rounded-md">
            <ul className="text-[#FF7A00] flex gap-8">
              <li className="flex gap-2 items-center">
                <FaUser />
                <span className="md:text-xs text-[11px]">{userName}</span>
              </li>
              <li className="flex gap-2 items-center">
                <FaCalendar />
                <span className="md:text-xs text-[11px]">{date}</span>
              </li>
            </ul>
            <h4 className="text-2xl font-medium">{title}</h4>
            <p className="text-base">{description}</p>
            <div className="">
              <button className="px-4 py-2 bg-[#FF7A00] rounded-full text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
