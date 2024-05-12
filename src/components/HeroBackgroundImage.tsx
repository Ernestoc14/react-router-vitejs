const HeroBackgroundImage = () => {
  return (
    <div
      className="relative w-full h-[90vh] bg-no-repeat bg-cover bg-center mb-10"
      style={{
        backgroundImage: "url('2-yz.jpg')",
        // backgroundSize: "auto",
        // backgroundPosition: "center",
      }}
    >
      <header className="py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-3/4 gap-6">
        <div className="flex flex-1 flex-col gap-10 pt-96 pl-64">
          <h1 className="text-6xl text-black lg:max-w-lg font-bold leading-[120%]">
            Explore the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-red-300">
              Diverse Machines
            </span>{" "}
            of Motocross
          </h1>
        </div>
      </header>
    </div>
  );
};

export default HeroBackgroundImage;
