import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const PersonalInfo = ({ color }: { color: string }) => {
  return (
    <>
      <div className={`text-${color}`}>
        <h1
          className={`text-3xl 3xl:text-4xl font-bold !text-${color} tracking-wide text-shadow-sm`}
        >
          Personal Details
        </h1>
        <p className="text-gray-700 tracking-wide text-md 3xl:text-lg">
          Configuring your application
        </p>
      </div>
      <div className="flex justify-between space-x-16">
        <div className="space-y-6 py-4 2xl:py-8 text-base leading-7 text-gray-600 max-w-md">
          <div className="3xl:space-y-4 space-y-2">
            <label
              className={`inline-block w-full border-2 border-${color}/40 rounded-xl`}
            >
              <input
                type="text"
                placeholder="Certificate of Incoporation No"
                className="input"
              />
            </label>
            <label
              className={`inline-block w-full border-2 border-${color}/40 rounded-xl`}
            >
              <input type="text" placeholder="Company Tin" className="input" />
            </label>
            <label
              className={`inline-block w-full border-2 border-${color}/40 rounded-xl`}
            >
              <input
                type="text"
                placeholder="Contact Person"
                className="input"
              />
            </label>
            <label
              className={`inline-block w-full border-2 border-${color}/40 rounded-xl`}
            >
              <input
                type="text"
                placeholder="Ghana Card No"
                className="input"
              />
            </label>
          </div>
        </div>
        <div className="">
          <Player
            autoplay
            loop
            src="assets/phone.json"
            className=" lotties"
          ></Player>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
