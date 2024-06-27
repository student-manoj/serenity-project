import Image from "next/image";
import Heading from "./Heading";
import VolunteerImage from "../../public/VolunteerImage.png";
import ConatctFrom from "./ConatctFrom";

const VolunteerSection = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <Heading
          title="Our Volunteer"
          titleName="Become A Volunteer"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati consectetur adipisicing"
        />
        <div className="grid lg:grid-cols-2 gap-6 py-16 place-items-center">
          <Image src={VolunteerImage} alt="Volunteer Image" />
          <ConatctFrom />
        </div>
      </div>
    </>
  );
};

export default VolunteerSection;
