import SearchBar from "../UI/SearchBar";
import ServicesDropdownMenu from "../UI/ServicesDropdownMenu";

const Navbar = () => {
  return (
    <header className="w-full flex bg-slate-600 flex-col px-8 py-5">
      <div className="flex flex-row justify-between w-full">
        <a href="/">
          <img
            src="../src/assets/imgs/localvibe-logo.png"
            alt="website logo"
            className="w-24 h-8 cursor-pointer"
          />
        </a>
        <div className="w-1/2">
          <SearchBar />
        </div>
        <button className=" w-16">
          <i className="fa-brands fa-google"></i> Login
        </button>
      </div>
      <div>
        <ServicesDropdownMenu />
      </div>
    </header>
  );
};

export default Navbar;
