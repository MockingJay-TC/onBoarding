import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const BankInfo = ({ color }: { color: string }) => {
  const [money, setMoney] = useState<any>("");

  useEffect(() => {
    setMoney(localStorage.getItem("money"));
    console.log(money);
  }, [money, setMoney]);

  return (
    <>
      <div className={`text-${color}`}>
        <h1
          className={`text-3xl 3xl:text-4xl font-bold !text-${color} tracking-wide text-shadow-sm`}
        >
          {money} Details
        </h1>
        <p className="text-gray-700 tracking-wide text-md 3xl:text-lg">
          Configuring your application
        </p>
      </div>
      <div className="flex justify-between space-x-16">
        {money === "Bank" ? (
          <div className="space-y-6 py-4 2xl:py-8 text-base leading-7 text-gray-600 max-w-md">
            <div className="3xl:space-y-4 space-y-2">
              <label
                className={`inline-block w-full border-2 border-${color}/40 rounded-xl`}
              >
                <input type="text" placeholder="Bank Name" className="input" />
              </label>
              <label
                className={`inline-block w-full border-2 border-${color}/40 rounded-xl`}
              >
                <input
                  type="text"
                  placeholder="Bank Branch"
                  className="input"
                />
              </label>
              <label
                className={`inline-block w-full border-2 border-${color}/40 rounded-xl`}
              >
                <input
                  type="text"
                  placeholder="Bank Number"
                  className="input"
                />
              </label>
              <label
                className={`inline-block w-full border-2 border-${color}/40 rounded-xl`}
              >
                <input type="text" placeholder="Sort Code" className="input" />
              </label>
            </div>
          </div>
        ) : (
          <div className="space-y-6 py-4 2xl:py-8 text-base leading-7 text-gray-600 max-w-md">
            <div className="3xl:space-y-4 space-y-2">
              <label
                className={`inline-block w-full border-2 border-${color}/40 rounded-xl`}
              >
                <input
                  type="text"
                  placeholder="Momo Network"
                  className="input"
                />
              </label>
              <label
                className={`inline-block w-full border-2 border-${color}/40 rounded-xl`}
              >
                <input
                  type="text"
                  placeholder="Momo Number"
                  className="input"
                />
              </label>
            </div>
          </div>
        )}
        <div className="">
          <Player
            autoplay
            loop
            src="assets/money.json"
            className=" lotties"
          ></Player>
        </div>
      </div>
    </>
  );
};

export default BankInfo;
