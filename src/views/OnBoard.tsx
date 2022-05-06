import { useState } from "react";
import { GoPerson } from "react-icons/go";
import { RiTeamFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const OnBoard = () => {
  const navigate = useNavigate();
  const [select, setSelected] = useState("");

  const radioChange = (e: any) => {
    setSelected(e.target.value);
  };

  const createBusiness = () => {
    localStorage.setItem("business", select);
    navigate("/form");
  };
  return (
    <div className="flex justify-center items-center h-[100%]  py-8">
      <div>
        <div className="text-center">
          <h1 className="text-3xl font-bold my-1 px-4">
            How are you planning to use Imperial Shuttle?
          </h1>
          <p className="text-gray-500 px-4">
            We'll streamline your setup experience accordingly.
          </p>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center px-16 py-4 my-4 space-y-4 md:space-y-0 mx-auto">
          {/* Individual */}
          <button className="board focus:border-sunshine border-2 focus:shadow-md transition text-gray-500 focus:text-sunshine">
            <label htmlFor="individual" className="cursor-pointer">
              <input
                value="individual"
                type="radio"
                className="hidden"
                id="individual"
                name="shuttle"
                onChange={(e) => radioChange(e)}
              />
              <GoPerson className="text-3xl" />
              <h2 className="text-2xl font-bold my-4 text-gray-700">
                For Individual
              </h2>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
                excepturi!
              </p>
            </label>
          </button>

          {/* Corporate */}
          <button className="board focus:border-corn border-2 focus:shadow-md transition text-gray-500 focus:text-corn">
            <label htmlFor="corporate" className="cursor-pointer">
              <input
                value="corporate"
                type="radio"
                className="hidden"
                id="corporate"
                name="shuttle"
                onChange={(e) => radioChange(e)}
              />
              <RiTeamFill className="text-3xl " />
              <h2 className="text-2xl font-bold my-4 text-gray-700">
                For Corporate
              </h2>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
                excepturi!
              </p>
            </label>
          </button>
        </div>
        <div
          onClick={() => createBusiness()}
          className="mx-16 my-8 py-3 text-center bg-corn rounded-xl text-xl text-white cursor-pointer hover:shadow-xl transition"
        >
          Create Business
        </div>
      </div>
    </div>
  );
};

export default OnBoard;
