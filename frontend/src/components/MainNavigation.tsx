import SearchBar from "./UI/SearchBar";
import ServicesDropdownMenu from "./UI/ServicesDropdownMenu";
import Button from "./UI/Button";
import UserLocation from "../types/UserLocation";

type NavigationStyles = {
  textColor?: string;
};

type navigationProps = {
  userLocationInfo: UserLocation | null;
  navigationStyles: NavigationStyles;
};

const MainNavigation: React.FC<navigationProps> = ({
  userLocationInfo,
  navigationStyles,
}) => {
  console.log(navigationStyles.textColor);
  return (
    <header className="z-50 flex flex-col px-8 py-5 w-full absolute top-0 left-0">
      <div className="flex-col md:flex-row justify-center flex md:justify-center w-full">
        <div className="py-5 flex justify-between md:absolute left-0 md:ml-8 md:py-0 xl:ml-32">
          <a href="/" className="flex items-center justify-center">
            <img
              src="assets/imgs/localvibe-logo.png"
              alt="website logo"
              className="w-36 cursor-pointer"
            />
          </a>
          <i className="fa-solid fa-bars text-white text-4xl md:hidden"></i>
        </div>

        <div className="w-full md:w-1/2">
          <SearchBar userLocation={userLocationInfo} />
        </div>
        <div className="hidden md:block md:absolute right-0 md:mr-8 xl:mr-32">
          <div className="flex flex-row items-center text-white border-2 border-white rounded text-lg hover:bg-gray-100/30">
            <Button label={"Log In"} url={"/places"} size={"medium"} />
          </div>
        </div>
      </div>
      <div
        className={` ${navigationStyles.textColor} flex justify-center w-full`}
      >
        <ServicesDropdownMenu />
      </div>
    </header>
  );
};

export default MainNavigation;
