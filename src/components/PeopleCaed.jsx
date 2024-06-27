import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";

const PeopleCaed = ({ img, title, description, raised, goal, progressBar }) => {
  return (
    <>
      <div className="bg-white p-5 flex flex-col gap-4 rounded-lg">
        <Image src={img} alt="" className="w-full rounded-lg" />
        <h3 className="text-xl font-medium"> {title}</h3>
        <p className="text-sm text-black/50">{description}</p>
        <ul className="flex gap-3">
          <li className="text-sm">Raised : <span className="font-medium">{raised}</span></li>
          <li className="text-sm">Goal : <span className="font-medium">{goal}</span></li>
        </ul>
        <div><ProgressBar bgColor="#FF7A00" height="12px" completed={progressBar} maxCompleted={100} labelSize="10px"/></div>
        <div>
          <button className="bg-[#FF7A00] px-5 py-3 rounded-full text-xs text-white">DONATION NOW</button>
        </div>
      </div>
    </>
  );
};

export default PeopleCaed;
