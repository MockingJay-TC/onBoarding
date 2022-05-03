import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const BusinessInfo = () => {
  return (
    <div className="flex justify-between ">
      <div className="space-y-6 py-4 2xl:py-8 text-base leading-7 text-gray-600 max-w-md">
        <div className="3xl:space-y-4 space-y-2">
          <label className="inline-block w-full border-2 border-sunshine/40 rounded-xl">
            <input type="text" placeholder="Business Name" className="input" />
          </label>
          <label className="inline-block w-full border-2 border-sunshine/40 rounded-xl">
            <input
              type="text"
              placeholder="Business Location"
              className="input"
            />
          </label>
          <label className="inline-block w-full border-2 border-sunshine/40 rounded-xl">
            <input type="text" placeholder="Account Type" className="input" />
          </label>
          <label className="inline-block w-full border-2 border-sunshine/40 rounded-xl">
            <input type="text" placeholder="Password" className="input" />
          </label>
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
  );
};

export default BusinessInfo;
