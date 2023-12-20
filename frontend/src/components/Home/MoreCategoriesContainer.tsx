import MoreCategoryItem from "./MoreCategoryItem";
const MoreCategoriesContainer = () => {
  return (
    <div className="py-4 flex flex-wrap">
      <ul className="flex flex-wrap items-center">
        <MoreCategoryItem
          desc="Coffee & Tea"
          img="fa-solid fa-mug-hot"
          url="coffee, tea"
        />
        <MoreCategoryItem
          desc="Food"
          img="fa-solid fa-utensils"
          url="food, restaurants"
        />
        <MoreCategoryItem
          desc="Arts & Entertainment"
          img="fa-solid fa-palette"
          url="arts, entertainment"
        />
        <MoreCategoryItem
          desc="Health & Medical"
          img="fa-solid fa-suitcase-medical"
          url="medical, health"
        />
        <MoreCategoryItem
          desc="Professional Services"
          img="fa-solid fa-square-check"
          url="professional services"
        />
        <MoreCategoryItem desc="Pets" img="fa-solid fa-paw" url="pets, vet" />
        <MoreCategoryItem
          desc="Real Estate"
          img="fa-solid fa-house"
          url="real estate"
        />
        <MoreCategoryItem
          desc="Hotels & Travel"
          img="fa-solid fa-hotel"
          url="hotels, travel"
        />
        <MoreCategoryItem
          desc="Local Services"
          img="fa-solid fa-street-view"
          url="local services"
        />
        <MoreCategoryItem
          desc="Event Planning & Services"
          img="fa-solid fa-calendar"
          url="events, planning services"
        />
        <MoreCategoryItem
          desc="Public Services"
          img="fa-solid fa-building-columns"
          url="public services"
        />
        <MoreCategoryItem
          desc="Financial Services"
          img="fa-solid fa-coins"
          url="financial services"
        />
        <MoreCategoryItem
          desc="Education"
          img="fa-solid fa-graduation-cap"
          url="education"
        />
        <MoreCategoryItem
          desc="Religious Organizations"
          img="fa-solid fa-person-praying"
          url="religion"
        />
        <MoreCategoryItem
          desc="Local Flavor"
          img="fa-solid fa-map-location-dot"
          url="local flavor"
        />
        <MoreCategoryItem
          desc="Mass Media"
          img="fa-solid fa-photo-film"
          url="mass media"
        />
      </ul>
    </div>
  );
};

export default MoreCategoriesContainer;
