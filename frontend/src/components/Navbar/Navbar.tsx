import SearchBar from "../UI/SearchBar";
import ServicesDropdownMenu from "../UI/ServicesDropdownMenu";
import Button from "../UI/Button";
const Navbar = () => {
  return (
    <header className="w-full flex bg-slate-600 flex-col px-8 py-5">
      <div className="flex flex-row justify-between w-full">
        <a href="/" className="flex items-center justify-center">
          <img
            src="../src/assets/imgs/localvibe-logo.png"
            alt="website logo"
            className="w-36 h-12 cursor-pointer"
          />
        </a>
        <div className="w-1/2">
          <SearchBar />
        </div>
        <div className=" w-24 flex flex-row items-center text-white border-2 border-white rounded px-1 text-lg hover:bg-gray-100/30">
          <a href="/login" className="w-full h-full">
            <Button desc={"Log In"} />
          </a>
        </div>
      </div>
      <div className="mt-3">
        <ServicesDropdownMenu />
      </div>
    </header>
  );
};

export default Navbar;
