import { motion } from "framer-motion";

const SignUp = () => {
  const signUpVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: [100, -50, 50, 0],
      transition: {
        type: "fade",
        mass: 0.4,
        delay: 1,
        duration: 2,
      },
    },
  };
  return (
    <motion.div
      variants={signUpVariants}
      initial="hidden"
      animate="visible"
      className="relative md:bg-white bg-transparent backdrop-blur-sm px-6 pt-10 pb-8 md:shadow-boxie sm:mx-auto sm:max-w-lg sm:rounded-xl sm:px-10"
    >
      <div className="mx-auto max-w-md">
        <h1 className="font-semibold md:text-3xl text-xl text-sunshine tracking-wide leading-10">
          Sign Up
        </h1>
        <div className="divide-y divide-gray-300/50">
          <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
            <p className="text-gray-400">
              Imperial Shuttle is here for you to help you in choosing the best
              car for your convinence.
            </p>
            <div className="space-y-4">
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
            <div>Already having an account?</div>
            <p>
              Perfect for learning how the framework works, prototyping a new
              idea, or creating a demo to share online.
            </p>
          </div>
          <div className="pt-5 text-base font-semibold leading-7">
            <div className="text-xl py-3 px-4 text-center bg-corn text-white transition duration-100 delay-70 hover:shadow-lg shadow-sm cursor-pointer rounded-lg hover:scale-100 hover:tracking-wider">
              Start Onboarding
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUp;
