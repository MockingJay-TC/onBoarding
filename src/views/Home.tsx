import SignUp from "../components/SignUp";
import Slider from "../components/SimpleSlider";

const Home = () => {
  return (
    <div className="home">
      <img
        src="assets/images/blur.svg"
        alt=""
        className="hidden md:block opacity-40 h-full absolute -z-10"
      />
      <div className="absolute inset-0 bg-back bg-center">
        {/* Main Conents */}
        <div className=" flex items-center h-full z-50">
          <Slider />
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Home;