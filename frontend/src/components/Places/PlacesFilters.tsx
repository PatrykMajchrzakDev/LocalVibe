const PlacesFilters = () => {
  const currentMinutes =
    new Date().getMinutes() < 9
      ? `0${new Date().getMinutes()}`
      : `${new Date().getMinutes()}`;
  const currentTime = `${new Date().getHours()}:${currentMinutes}`;

  return (
    <div className="lg:h-[80vh] lg:w-[20%] xl:w-[20%] py-5">
      {/* Wrapper */}
      <div className="w-4/5 mx-auto">
        {/* Filter paragraph */}
        <div className="">
          <p className="font-semibold text-lg py-3 border-b-2 border-defaultGray text-center">
            Filters
          </p>
        </div>
        {/* Suggested filter */}
        <div className="pt-5">
          <p className="font-semibold">Suggested</p>
          <div className="flex items-center">
            <p className="pr-2">{`Open? ${currentTime}`}</p>
            <div className="flex py-3 items-center">
              <input type="checkbox" />
            </div>
          </div>
        </div>
        <div className="w-4/5 border-b-2 mx-auto border-defaultRed p-2"></div>
        {/* Price level filter */}
        {/* <div className="pt-5">
          <p className="font-semibold">Price level</p>
          <div className="flex items-center pt-2">
            <div className="rounded-md border-[2px] flex w-full">
              <button className="w-1/3 text-center hover:bg-gray-200 text-sm">
                $
              </button>
              <button className="w-1/3 text-center hover:bg-gray-200 text-sm">
                $$
              </button>
              <button className="w-1/3 text-center hover:bg-gray-200 text-sm">
                $$$
              </button>
            </div>
          </div>
        </div> */}
        {/* <div className="w-4/5 mx-auto border-b-2 border-defaultRed p-2 pt-5"></div> */}
        {/* Minimum rating */}
        <div>
          <div className="pt-5">
            <p className="font-semibold">Minimum rating</p>
            <div className="flex items-center">
              <div className="flex py-3 w-full">
                <input
                  className="w-full rounded-md placeholder:text-center placeholder:italic border-2 text-center"
                  type="text"
                  placeholder="min"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/5 mx-auto border-b-2 border-defaultRed p-2 pt-5"></div>
        {/* Minimum votes */}
        <div>
          <div className="pt-5">
            <p className="font-semibold">Minimum votes</p>
            <div className="flex items-center">
              <div className="flex py-3 w-full">
                <input
                  className="w-full rounded-md placeholder:text-center placeholder:italic border-2 text-center"
                  type="text"
                  placeholder="min"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacesFilters;
