import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import AccountType from "./AccountType";

const BusinessInfo = ({ color }: { color: string }) => {
  return (
    <>
      <div className={`text-${color}`}>
        <h1
          className={`text-3xl 3xl:text-4xl font-bold !text-${color} tracking-wide text-shadow-sm`}
        >
          Business Details
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
                placeholder="Business Name"
                className="input"
              />
            </label>
            <label
              className={`inline-block w-full border-2 border-${color}/40 rounded-xl`}
            >
              <input
                type="text"
                placeholder="Business Location"
                className="input"
              />
            </label>

            <AccountType color={color} />
          </div>
        </div>
        <div className="">
          <Player
            autoplay
            loop
            src="assets/business.json"
            className=" lotties"
          ></Player>
        </div>
      </div>
    </>
  );
};

export default BusinessInfo;
