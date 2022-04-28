import SignUp from "../components/SignUp";
import Slider from "../components/SimpleSlider";

const Home = () => {
  return (
    <div className="home">
      <img
        src="assets/images/blur.svg"
        alt=""
        className="hidden md:block h-full opacity-50 absolute -z-10"
      />
      <div className="absolute inset-0 bg-grid bg-center">
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
