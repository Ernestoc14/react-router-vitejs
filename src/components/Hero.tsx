const Hero = () => {
  return (
    <header className="bg-center bg-hero bg-cover bg-no-repeat py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-3/4 sm:gap-16 gap-6">
      <div className="flex flex-1 flex-col gap-10">
        {/* <img src="/2-yz.jpg" alt="logo" className="object-contain" /> */}
        <h1 className="sm:text-6xl text-5xl text-gray-300 lg:max-w-lg font-bold leading-[120%]">
          Fuel your passion,
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-800 to-blue-500">
            {" "}
            ride the adrenaline
          </span>{" "}
          of Motocross
        </h1>
      </div>
      <div className="relative w-full h-[50vh] lg:flex-1 justify-center">
        <img src="/yz125.jpg" alt="anime" className="object-contain" />
      </div>
    </header>
  );
};

export default Hero;
