import HeroCard from "./HeroCard";

const HeroSection = () => {
  return (
    <>
      <div className="bg-[url('/Heroimg.png')] bg-cover bg-center">
        <div className="container mx-auto px-4">
          <div className="text-white text-center md:py-48 py-16 space-y-6">
            <h4 className="text-[#FF7A00] text-2xl font-medium">
              We are here to support you every steps
            </h4>
            <h1 className="xl:text-6xl text-5xl font-medium lg:px-40">
              Donations Even If It Is A Small Can Bring Bigger
            </h1>
            <p className="xl:text-lg lg:px-52">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullar
              bandit herderite Faubus. Suspends herderite torpids dui, eget
              utricles era consequent ut. Sed ac veldt abaculis, condiment
              newly. Integer pulvinar elemental abaculis. Phasellus non torpids
              in nisi semper.
            </p>
            <button className="bg-[#FF7A00] px-7 py-3 rounded-full">
              Discover More
            </button>
          </div>
        </div>
      </div>
      <HeroCard />
    </>
  );
};

export default HeroSection;
