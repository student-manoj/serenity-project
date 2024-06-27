import { DonationData } from "@/utils/DonationData";
import Image from "next/image";

const DonationChildrenSection = () => {
  return (
    <>
      <div className="bg-[url('/DonationChildrenBgImage.png')] bg-center bg-cover">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col justify-center items-center space-y-4 text-white">
            <div className="text-[#FF9301]">Donation For Children</div>
            <div className="font-bold text-3xl text-center flex gap-2">
              AWESOME <span className="text-[#FF9301]"> FUNFACTS</span>
            </div>
            <p className="lg:w-[621px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              autem voluptatem obcaecati consectetur adipisicing
            </p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 pt-16 text-white">
            {DonationData.slice(0, 4).map((val) => (
              <div
                key={val.id}
                className="flex flex-col gap-4 justify-center items-center"
              >
                <Image src={val.img} alt="Image" />
                <div className="text-[#FF7A00] text-5xl font-semibold">
                  {val.reting}
                </div>
                <div className="text-[28px] font-medium">{val.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationChildrenSection;
