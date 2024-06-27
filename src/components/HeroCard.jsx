import { HeroCardData } from "@/utils/HeroCardData";
import Image from "next/image";

const HeroCard = () => {
  return (
    <>
      <div className="pb-16 pt-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {HeroCardData.slice(0, 3).map((val) => (
              <div
                key={val.id}
                className="shadow-card p-10 flex flex-col justify-center items-center rounded-lg"
              >
                <Image src={val.icon} alt="Icon" />

                <h3 className="text-2xl font-medium pt-5">{val.title}</h3>
                <p className="text-center pt-6">{val.description}</p>
                <div className="pt-11">
                  <button className="bg-[#FF7A00] px-7 py-3 rounded-full text-white">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCard;
