import { EventsData } from "@/utils/EventsData";
import EventsCard from "./EventsCard";
import Heading from "./Heading";

const EventsSection = () => {
  return (
    <>
      <div className="bg-[#ff7b0006] py-16">
        <div className="container mx-auto px-4">
          <Heading
            title="Future Events"
            titleName="Latest Upcoming Events"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati consectetur adipisicing"
          />
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 pt-14">
            {EventsData.slice(0, 4).map((val) => (
              <EventsCard key={val.id} {...val} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsSection;
