import {
  FaFacebookF,
  FaTwitter,
  FaSkype,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
const HeaderBar = () => {
  return (
    <>
      <div className="py-3 bg-[#011428] md:flex hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between text-white">
            <div className="lg:flex gap-6">
              <div className="text-sm">Connect with our charity</div>
              <div className="flex items-center gap-4">
                <FaFacebookF className="hover:text-[#FF7A00] duration-300" />
                <FaTwitter className="hover:text-[#FF7A00] duration-300" />
                <FaSkype className="hover:text-[#FF7A00] duration-300" />
                <FaLinkedinIn className="hover:text-[#FF7A00] duration-300" />
                <FaInstagram className="hover:text-[#FF7A00] duration-300" />
              </div>
            </div>
            <div className="lg:flex gap-6">
              <div className="flex items-center gap-2">
                <FaLocationDot />
                <span className="text-sm">74 H, Kolkata, PIN - 700004</span>
              </div>
              <div className="flex items-center gap-2">
                <TfiEmail />
                <span className="text-sm">Serenityspark@support.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBar;
