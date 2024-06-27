import { PeopleData } from "@/utils/PeopleData";
import Heading from "./Heading";
import PeopleCaed from "./PeopleCaed";

const PeopleSection = () => {
  return (
    <>
      <div className="bg-[#ff7b0006] py-16">
        <div className="container mx-auto px-4">
          <Heading title="Help The People" titleName="Our Popular Causes"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati consectetur adipisicing"
          />
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 pt-14">
            {PeopleData.slice(0, 4).map((val) => (
              <PeopleCaed key={val.id} {...val} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PeopleSection;
