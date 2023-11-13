import Navbar from "./Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="h-screen">
        <div className="h-1/2 w-full bg-hero-img bg-center bg-neutral-500 bg-blend-darken xl:bg-cover"></div>
        <h1>Discover the most interesting local places!</h1>
      </main>
    </>
  );
};

export default Home;
