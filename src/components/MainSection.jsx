"use client";

import logo from "../../public/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import { TfiSearch } from "react-icons/tfi";
import { SlUser } from "react-icons/sl";
import Image from "next/image";
import { useRef, useState } from "react";
import PeopleSection from "./PeopleSection";
import VolunteerSection from "./VolunteerSection";
import EventsSection from "./EventsSection";
import VolunteersMeetSection from "./VolunteersMeetSection";
import TestimonialstSection from "./TestimonialstSection";
import DonationChildrenSection from "./DonationChildrenSection";
import BlogSection from "./BlogSection";

const MainSection = () => {
  const [nav, setNav] = useState(false);

  const Home = useRef();
  const About = useRef();
  const Donation = useRef();
  const Contact = useRef();
  const Events = useRef();
  const Blog = useRef();

  const scrollHandler = (elmRef) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };

  return (
    <>
      <div className="left-[480px] hidden justify-center gap-8 md:flex bg-white shadow-lg cursor-pointer">
        <div className="container mx-auto px-4">
          <div className=" flex justify-between items-center py-5">
            <Image src={logo} alt="" className="h-10 lg:h-12" />
            <div className="flex lg:gap-10 md:gap-4 items-center pt-3">
              <div onClick={() => scrollHandler(Home)} className="hover:text-[#FF7A00]">Home</div>
              <div onClick={() => scrollHandler(About)} className="hover:text-[#FF7A00]">About</div>
              <div onClick={() => scrollHandler(Donation)} className="hover:text-[#FF7A00]">Donation</div>
              <div onClick={() => scrollHandler(Events)} className="hover:text-[#FF7A00]">Events</div>
              <div onClick={() => scrollHandler(Blog)} className="hover:text-[#FF7A00]">Blog</div>
              <div onClick={() => scrollHandler(Contact)} className="hover:text-[#FF7A00]">Contact</div>
            </div>
            <div className="pt-2 flex items-center gap-6">
              <TfiSearch />
              <SlUser />
              <button className="bg-[#FF7A00] py-2 lg:px-6 px-4 rounded-full text-white">Donate Now</button>
            </div>
          </div>
        </div>
      </div>

      <div onClick={() => setNav(!nav)} className="flex justify-between cursor-pointer items-center text-3xl duration-500 md:hidden sticky top-0 bg-white shadow-lg z-30 py-4 container mx-auto px-4">
        <Image src={logo} alt="Logo" />
        {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      {nav && (
        <div onClick={() => setNav(false)} className="fixed top-16 z-30 h-screen w-full text-[#FF7A00] backdrop-blur-xl">
          <div className="flex flex-col items-center justify-center gap-8 py-3 text-xl">
            <div className="cursor-pointer text-lg font-semibold">Home</div>
            <div onClick={() => scrollHandler(About)} className="cursor-pointer text-lg font-semibold">About</div>
            <div onClick={() => scrollHandler(Project)} className="cursor-pointer text-lg font-semibold">Project</div>
            <div onClick={() => scrollHandler(Contact)} className="cursor-pointer text-lg font-semibold">Contact</div>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4">
        <div ref={Home} className="flex flex-col"><HeroSection /></div>
        <div ref={About}><AboutSection /></div>
        <div ref={Donation}><PeopleSection /></div>
        <div ref={Contact} className="pt-10"><VolunteerSection /></div>
        <div ref={Events}>
          <EventsSection />
          <VolunteersMeetSection />
          <TestimonialstSection />
          <DonationChildrenSection />
        </div>
        <div ref={Blog}><BlogSection /></div>
      </div>
    </>
  );
};

export default MainSection;
