import WeatherDetails from "./WeatherDetails";
import { useUserLocationInfo } from "../pages/Root";
const Home = () => {
  const { userLocationInfo } = useUserLocationInfo();
  return (
    <main className="">
      <div className="h-[50vh]"></div>
      <div className="absolute top-0 left-0 w-full -z-10">
        <section className="h-[50vh]">
          <div className="h-full w-full bg-hero-img bg-center bg-stone-400 bg-blend-darken xl:bg-cover flex items-center justify-center">
            <h1 className="text-white text-5xl px-4 text-center">
              Discover the most interesting local places!
            </h1>
          </div>
        </section>
      </div>
      <section className="xl:max-w-7xl mx-auto">
        <WeatherDetails userLocation={userLocationInfo} />
      </section>
    </main>
  );
};

export default Home;
