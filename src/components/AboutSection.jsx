import { AboutData } from "@/utils/AboutData";
import AboutCard from "./AboutCard";
import Heading from "./Heading";
import aboutimg from "../../public/aboutimg.png";

import Image from "next/image";

import VideoPlayBtn from "./VideoPlayBtn";

const AboutSection = () => {
  return (
    <>
      <div>
        <div className="bg-[#ff7b0006] py-16">
          <div className="container mx-auto px-4">
            <Heading
              title="About Us"
              titleName="Who We Are"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati consectetur adipisicing"
            />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 pt-14">
              {AboutData.slice(0, 3).map((val) => (
                <AboutCard key={val.id} {...val} />
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[url('/Aboutbgimage.png')]">
          <div className="container mx-auto px-4 flex">
            <div className="grid lg:grid-cols-2 lg:gap-16 place-items-center py-24">
              <div className="relative">
                <div className="relative">
                  <Image src={aboutimg} alt="about image" />
                  <VideoPlayBtn />
                </div>
              </div>
              <div className="flex flex-col text-center 2xl:text-start xl:text-start lg:text-start gap-4 text-white lg:pt-0 pt-16">
                <h4 className="text-xl font-medium text-[#FF7A00]">
                  Helping People
                </h4>
                <h2 className="text-[42px] font-medium">
                  Fundraising Community
                </h2>
                <p className="text-lg">
                  Nulla fermentum turpis id nunc tincidunt, vitae hendrerit orci
                  viverra. Nulla facilisi. Duis tempor nisl nec dolor malesuada
                  viverra. Morbi id tempus nisi, a varius enim. Morbi eget augue
                  neque, un in ligula.
                </p>
                <div>
                  <button className="bg-[#FF7A00] py-2 px-6 rounded-full text-white">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
