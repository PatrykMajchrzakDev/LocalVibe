import SearchBar from "../UI/SearchBar";
import ServicesDropdownMenu from "../UI/ServicesDropdownMenu";
import Button from "../UI/Button";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full flex flex-col px-8 py-5">
      <div className="flex flex-row justify-center w-full ">
        <div className="absolute left-0 ml-8">
          <a href="/" className="flex items-center justify-center">
            <img
              src="../src/assets/imgs/localvibe-logo.png"
              alt="website logo"
              className="w-32 cursor-pointer"
            />
          </a>
        </div>

        <div className="w-1/2">
          <SearchBar />
        </div>
        <div className="absolute right-0 mr-8">
          <div className="flex flex-row items-center text-white border-2 border-white rounded text-lg hover:bg-gray-100/30">
            <Button label={"Log In"} url={"/login"} size={"medium"} />
          </div>
        </div>
      </div>
      <div className=" text-white flex justify-center">
        <ServicesDropdownMenu />
      </div>
    </header>
  );
};

export default Navbar;
