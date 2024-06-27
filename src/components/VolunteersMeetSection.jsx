import { VolunteersData } from "@/utils/VolunteersData";
import Heading from "./Heading";
import VolunteersCard from "./VolunteersCard";

const VolunteersMeetSection = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <Heading
          title="Our Volunteers"
          titleName="Meet With Volunteers"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati consectetur adipisicing"
        />
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 pt-14">
          {VolunteersData.slice(0, 4).map((vla) => (
            <VolunteersCard key={vla.id} {...vla} />
          ))}
        </div>
      </div>
    </>
  );
};

export default VolunteersMeetSection;
