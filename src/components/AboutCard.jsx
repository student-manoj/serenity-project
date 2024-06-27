import Image from "next/image";

const AboutCard = ({ img, title, description }) => {
  return (
    <>
      <div className="shadow-lg rounded-md">
        <Image src={img} alt="image" className="w-full" />
        <div className="p-7">
          <h3 className="text-[22px] font-medium">{title}</h3>
          <p className="pt-4 text-[#4C4D56]">{description}</p>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
