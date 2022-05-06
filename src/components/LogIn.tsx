import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  const onBoarding = () => {
    console.log("Clicked");
    navigate("/onboard");
  };
  const signUpVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: [50, 0],
      transition: {
        type: "fade",
        duration: 1.5,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="md:mt-[20%] xl:mt-[2%] md:pb-8 xl:mr-10">
      <motion.div
        variants={signUpVariants}
        initial="hidden"
        animate="visible"
        className="relative md:bg-white bg-transparent backdrop-blur-sm px-6 pt-8 pb-8 md:shadow-boxie sm:mx-auto max-w-lg sm:rounded-xl sm:px-10 "
      >
        <div className="mx-auto xl:max-w-xs 2xl:max-w-sm 3xl:max-w-md">
          <h1 className="font-semibold md:text-3xl text-xl text-sunshine tracking-wide leading-10">
            Log In
          </h1>
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-4 2xl:py-8 text-base leading-7 text-gray-600">
              <p className="text-gray-600">
                Imperial Shuttle is here for you to help you in choosing the
                best car for your convinence.
              </p>
              <div className="3xl:space-y-4 space-y-2">
                <label className="inline-block w-full border-2 border-corn/40 rounded-xl">
                  <input type="email" placeholder="Email" className="input" />
                </label>
                <label className="inline-block w-full border-2 border-corn/40 rounded-xl">
                  <input
                    type="password"
                    placeholder="Password"
                    className="input"
                  />
                </label>
              </div>
              <div>
                Not a partner?{" "}
                <Link to="/" className="text-sunshine font-semibold">
                  Signup{" "}
                </Link>
                now
              </div>
              <p>Perfect for learning how the framework works.</p>
            </div>
            <div className="3xl:pt-5 pt-3 text-base font-semibold 3xl:leading-7 leading-7">
              <div
                onClick={() => onBoarding()}
                className="text-xl py-2 3xl:py-3 3xl:px-4 px-2 text-center bg-corn text-white transition duration-100 delay-70 hover:shadow-lg shadow-sm cursor-pointer rounded-lg hover:scale-100 3xl:hover:tracking-wider hover:tracking-wide"
              >
                Log in
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LogIn;
