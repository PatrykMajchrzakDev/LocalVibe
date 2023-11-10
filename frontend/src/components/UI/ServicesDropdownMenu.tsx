import DropdownMenuItem from "./DropdownMenuItem";
const ServicesDropdownMenu = () => {
  return (
    <>
      <nav className="w-1/2 flex justify-center mx-auto ">
        <ul className="w-full flex flex-row ml-7 h-10 items-center min-w-[470px]">
          <li className="relative group mr-6 h-10 flex items-center">
            <a href="#" className="">
              Restaurants <i className="fa-solid fa-caret-down"></i>
            </a>
            <div className="hidden w-[304px] rounded-r-lg rounded-bl-lg group-hover:flex flex-wrap absolute left-0 top-[107%] bg-white">
              <ul className="flex flex-wrap m-3">
                <DropdownMenuItem name={"Delivery"} url={"delivery"} />
                <DropdownMenuItem name={"Reservations"} url={"reservations"} />
                <DropdownMenuItem name={"Burgers"} url={"burgers"} />
                <DropdownMenuItem name={"Japanese"} url={"japanese"} />
                <DropdownMenuItem name={"Chinese"} url={"chinese"} />
                <DropdownMenuItem name={"Mexican"} url={"mexican"} />
                <DropdownMenuItem name={"Italian"} url={"italian"} />
                <DropdownMenuItem name={"Thai"} url={"thai"} />
              </ul>
            </div>
          </li>
          <li className="relative group mr-6 h-10 flex items-center">
            <a href="#">
              Home Services <i className="fa-solid fa-caret-down"></i>
            </a>
            <div className="hidden w-[304px] rounded-r-lg rounded-bl-lg group-hover:flex flex-wrap absolute left-0 top-[107%] bg-white">
              <ul className="flex flex-wrap m-3">
                <DropdownMenuItem name={"Contractors"} url={"contractor"} />
                <DropdownMenuItem name={"Landscaping"} url={"landscaping"} />
                <DropdownMenuItem name={"Electricians"} url={"electrician"} />
                <DropdownMenuItem name={"Locksmith"} url={"locksmith"} />
                <DropdownMenuItem name={"Home Cleaners"} url={"home+cleaner"} />
                <DropdownMenuItem name={"Movers"} url={"movers"} />
                <DropdownMenuItem name={"AC"} url={"air+conditioning"} />
                <DropdownMenuItem name={"Plumbers"} url={"plumber"} />
              </ul>
            </div>
          </li>

          <li className="relative group mr-6 h-10 flex items-center">
            <a href="#">
              Auto Services <i className="fa-solid fa-caret-down"></i>
            </a>
            <div className="hidden w-[304px] rounded-r-lg rounded-bl-lg group-hover:flex flex-wrap absolute left-0 top-[107%] bg-white">
              <ul className="flex flex-wrap m-3">
                <DropdownMenuItem name={"Auto Repair"} url={"auto+repair"} />
                <DropdownMenuItem name={"Car Dealers"} url={"car+dealer"} />
                <DropdownMenuItem
                  name={"Auto Detailing"}
                  url={"auto+detailing"}
                />
                <DropdownMenuItem name={"Oil Change"} url={"oil+change"} />
                <DropdownMenuItem name={"Body Shops"} url={"body+shop"} />
                <DropdownMenuItem name={"Parking"} url={"parking"} />
                <DropdownMenuItem name={"Car Wash"} url={"car+wash"} />
                <DropdownMenuItem name={"Towing"} url={"towing"} />
              </ul>
            </div>
          </li>
          <li className="relative group mr-6 h-10 flex items-center">
            <a href="#">
              More <i className="fa-solid fa-caret-down"></i>
            </a>
            <div className="hidden w-[304px] rounded-r-lg rounded-bl-lg group-hover:flex flex-wrap absolute left-0 top-[107%] bg-white">
              <ul className="flex flex-wrap m-3">
                <DropdownMenuItem name={"Dry Cleaners"} url={"dry+cleaner"} />
                <DropdownMenuItem name={"Hair Salons"} url={"hair+salon"} />
                <DropdownMenuItem name={"Phone Repair"} url={"phone+repair"} />
                <DropdownMenuItem name={"Gyms"} url={"gym"} />
                <DropdownMenuItem name={"Bars"} url={"bar"} />
                <DropdownMenuItem name={"Massage"} url={"massage"} />
                <DropdownMenuItem name={"Nightlife"} url={"nightlife"} />
                <DropdownMenuItem name={"Shopping"} url={"shopping"} />
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ServicesDropdownMenu;
