import Hero from "./Hero";
import NavBar from "./NavBar";

function HomePage() {
  return (
    <main className="max-w-8xl h-screen mx-auto bg-[#0F1117] text-white">
      <section className="flex flex-col justify-center items-center">
        <Hero />
        <NavBar />
      </section>
    </main>
  );
}

export default HomePage;
