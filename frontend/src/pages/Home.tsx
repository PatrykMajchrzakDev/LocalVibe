import { useState } from "react";
import WeatherDetails from "../components/weather/Weather";
import { useUserLocationInfo } from "./Root";
import CategoryCard from "../components/UI/CategoryCard";
import MoreCategoriesContainer from "../components/Home/MoreCategoriesContainer";

const Home = () => {
  const { userLocationInfo } = useUserLocationInfo();
  const [toggleMoreCategories, setToggleMoreCategories] = useState(false);
  const showMoreCategoriesHandler = () => {
    setToggleMoreCategories((current) => !current);
  };
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
      <section className="xl:max-w-7xl mx-auto text-categoriesLink">
        <WeatherDetails userLocation={userLocationInfo} />
      </section>
      <section className="xl:max-w-7xl mx-auto py-10 text-categoriesLink px-8">
        <h2 className="px-3 py-10 text-3xl text-center font-medium">
          Pick your service
        </h2>
        <ul className="flex flex-wrap items-center justify-center">
          <CategoryCard
            img="fa-solid fa-utensils"
            desc="Restaurants"
            src="restaurants, food"
          />
          <CategoryCard
            img="fa-solid fa-martini-glass-empty"
            desc="Nightlife"
            src="nightlife, bar"
          />
          <CategoryCard
            img="fa-solid fa-dumbbell"
            desc="Active Life"
            src="sport, recreation"
          />
          <CategoryCard
            img="fa-solid fa-house"
            desc="House and Garden"
            src="house, garden"
          />
          <CategoryCard
            img="fa-solid fa-cart-shopping"
            desc="Shopping"
            src="shopping"
          />
          <CategoryCard
            img="fa-solid fa-spa"
            desc="Beauty & Spas"
            src="spa, massage"
          />
          <CategoryCard
            img="fa-solid fa-car"
            desc="Automotive"
            src="car, repair"
          />
          <button
            className="flex items-center justify-center w-[calc(50%-16px)] border-[1px] border-bordersColor  shadow-sm m-2 px-2 py-10 md:w-[calc(25%-16px)] hover:shadow-md"
            onClick={showMoreCategoriesHandler}
          >
            <CategoryCard img="fa-solid fa-ellipsis" desc="More" />
          </button>
        </ul>
        {toggleMoreCategories && <MoreCategoriesContainer />}
      </section>
    </main>
  );
};

export default Home;
