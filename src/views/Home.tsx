import SignUp from "../components/SignUp";
import Slider from "../components/SimpleSlider";

const Home = () => {
  return (
    <div className="home overflow-hidden">
      
      <img
        src="assets/images/blur.svg"
        alt=""
        className="hidden 2xl:block absolute inset-0 bg-blur h-full -z-30 bg-no-repeat bg-cover opacity-40"
      />
      {/* <div className="absolute inset-0 bg-blur h-full z-10 bg-no-repeat bg-cover "></div> */}
      <div className="absolute inset-0 bg-grid h-full -z-30 bg-no-repeat opacity-70 bg-cover"></div>

      {/* Main Conents */}
      <div className="xl:flex items-center 2xl:pt-[8%] xl:pr-[5%]">
        <Slider />
        <SignUp />
      </div>
    </div>
  );
};

export default Home;
