import React from "react";
import { GoPerson } from "react-icons/go";
import { RiTeamFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const OnBoard = () => {
  const navigate = useNavigate();
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
          <div className="board border-corn shadow-md">
            <GoPerson className="text-3xl text-corn" />
            <h2 className="text-2xl font-bold my-4 text-gray-700">
              For Individual
            </h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
              excepturi!
            </p>
          </div>
          <div className="board">
            <RiTeamFill className="text-3xl text-corn" />
            <h2 className="text-2xl font-bold my-4 text-gray-700">
              For Corporate
            </h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
              excepturi!
            </p>
          </div>
        </div>
        <div
          onClick={() => navigate("/form")}
          className="mx-16 my-8 py-2 text-center bg-corn rounded-xl text-xl text-white cursor-pointer hover:shadow-xl transition"
        >
          Create Business
        </div>
      </div>
    </div>
  );
};

export default OnBoard;
