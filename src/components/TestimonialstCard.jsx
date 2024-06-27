import Image from "next/image";

const TestimonialstCard = ({ img, icon, description, title, stitle }) => {
  return (
    <>
      <div className="bg-white p-7 rounded-md shadow-card">
        <div className=" grid grid-cols-4 gap-6 place-items-center">
          <div className="col-span-1"><Image src={img} alt="" /></div>
          <div className="col-span-3 space-y-4">
            <p>{description}</p>
            <Image src={icon} alt="icon" />
          </div>
        </div>
        <div className="pt-6">
          <h3 className="text-xl font-medium text-[#FF7A00]">{title}</h3>
          <h4 className="text-xs w-24 text-center">{stitle}</h4>
        </div>
      </div>
    </>
  );
};

export default TestimonialstCard;
