import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";

const VolunteersCard = ({ img, title, sTitle }) => {
  return (
    <>
      <div className="relative">
        <div className="flex flex-col justify-center items-center">
          <Image src={img} alt="" className="w-full rounded-md" />
          <div className="w-64 p-4 bg-white shadow-md text-center -mt-8 rounded-md">
            <h4 className="text-xl font-medium">{title}</h4>
            <h5 className="text-sm">{sTitle}</h5>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 p-4 absolute top-9">
          <FaFacebookF className="text-[#FF7A00] border-2 border-[#FF7A00] p-2 rounded-full h-10 w-10 bg-white" />
          <FaTwitter className="text-[#FF7A00] border-2 border-[#FF7A00] p-2 rounded-full h-10 w-10 bg-white" />
          <FaSkype className="text-[#FF7A00] border-2 border-[#FF7A00] p-2 rounded-full h-10 w-10 bg-white" />
          <FaLinkedinIn className="text-[#FF7A00] border-2 border-[#FF7A00] p-2 rounded-full h-10 w-10 bg-white" />
        </div>
      </div>
    </>
  );
};

export default VolunteersCard;
