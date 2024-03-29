const Footer = () => {
  return (
    <footer className="pb-5 md:h-[25vh] flex flex-col bg-defaultGray">
      <div className="flex justify-center items-center p-5">
        <a href="/" className="">
          <img
            src="../assets/imgs/localvibe-logo.png"
            alt="website logo"
            className="w-40 cursor-pointer"
          />
        </a>
      </div>
      <section className="flex flex-col md:flex md:flex-row w-full xl:container xl:mx-auto">
        <div className="pb-10 flex flex-col gap-4 justify-center items-center w-full md:w-1/2">
          <p className="text-lg font-medium">Contact informations</p>
          <div className="flex flex-row">
            <div className="w-1/3">
              <ul>
                <li>
                  <i className="fa-solid fa-user"></i> Creator:
                </li>
                <li>
                  {" "}
                  <i className="fa-solid fa-envelope"></i> Email:
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i> Phone:
                </li>
                <li>
                  <i className="fa-brands fa-github"></i> Socials:
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <ul>
                <li>Patryk Majchrzak</li>
                <li>patrykmajchrzakdev@gmail.com</li>
                <li>+48 536970905</li>
                <li className="hover:underline">
                  <a href="https://github.com/PatrykMajchrzakDev">GitHub</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4  justify-center items-center w-full md:w-1/2">
          <p className="text-lg font-medium">Navigation</p>
          <ul className="flex gap-2 flex-col">
            <li className="hover:underline">
              <a href="/">Home</a>
            </li>
            <li className="hover:underline">
              <a href="#">Restaurants</a>
            </li>
            <li className="hover:underline">
              <a href="#">Home Services</a>
            </li>
            <li className="hover:underline">
              <a href="#">Auto Services</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
