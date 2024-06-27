import Image from "next/image";
import logo from "../../public/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#011428] py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 text-white">
            <div className="space-y-4">
              <Image src={logo} alt="Logo" />
              <p>
                Wimply dummy text of the priatype industry orem Ipsum has
                Maecenas quis eros at ante lacinia efficitur.
              </p>
              <div className="flex items-center gap-2">
                <FaLocationDot />
                <span className="text-sm">74 H, Kolkata, PIN - 700004</span>
              </div>
              <div className="flex items-center gap-2">
                <TfiEmail />
                <span className="text-sm">Serenityspark@support.com</span>
              </div>
              <div className="flex gap-4">
                <FaFacebookF className="text-[#FF7A00] border-2 border-[#FF7A00] p-2 rounded-full h-10 w-10 bg-white" />
                <FaTwitter className="text-[#FF7A00] border-2 border-[#FF7A00] p-2 rounded-full h-10 w-10 bg-white" />
                <FaSkype className="text-[#FF7A00] border-2 border-[#FF7A00] p-2 rounded-full h-10 w-10 bg-white" />
                <FaLinkedinIn className="text-[#FF7A00] border-2 border-[#FF7A00] p-2 rounded-full h-10 w-10 bg-white" />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-[#FF7A00] text-2xl">About</h4>
              <h5 className="">Home</h5>
              <h5 className="">Donation</h5>
              <h5 className="">About Us</h5>
              <h5 className="">Events</h5>
              <h5 className="">Features</h5>
            </div>
            <div className="space-y-4">
              <h4 className="text-[#FF7A00] text-2xl">Quick Links</h4>
              <h5 className="">Causes</h5>
              <h5 className="">About</h5>
              <h5 className="">New camping</h5>
              <h5 className="">Site map</h5>
              <h5 className="">Storise</h5>
            </div>
            <div className="space-y-4">
              <h4 className="text-[#FF7A00] text-2xl">Subscribe Us</h4>
              <h5 className="">Subscribe To Our Newsletter!</h5>
              <div className="relative">
                <input
                  placeholder="Email Address"
                  className="bg-[#FF7A00] py-2 px-4 w-72 rounded-full focus:outline-none text-white"
                />
                <FaTelegramPlane className="text-[#FF7A00] p-2 rounded-full h-8 w-8 bg-white absolute top-[3px] right-3" />
              </div>
              <h5>
                Contrary to popular belief, Lorem Ipsum is srandom text. It has
                roots in
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FF7A00] text-center">
        <div className="text-white py-8">
          Copyrights 2024 SERENITY SPARK ALL rights reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
