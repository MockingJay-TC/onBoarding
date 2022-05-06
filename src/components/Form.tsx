import { useState, useEffect } from "react";
import BankInfo from "./BankInfo";
import BusinessInfo from "./BusinessInfo";
import PersonalInfo from "./PersonalInfo";
import { IoMdBusiness, IoMdPerson } from "react-icons/io";
import { BsBank } from "react-icons/bs";
import { Link } from "react-router-dom";

const Form = () => {
  const [color, setColor] = useState<any>();
  useEffect(() => {
    if (localStorage.getItem("business") === "individual") {
      setColor("sunshine");
    } else {
      setColor("corn");
    }
  }, []);

  const [page, setPage] = useState(0);

  const FormTitles = ["Business Details", "Bank Details", "Personal Info"];

  const PageDisplay = () => {
    if (page === 0) {
      return <BusinessInfo color={color} />;
    } else if (page === 1) {
      return <BankInfo color={color} />;
    } else {
      return <PersonalInfo color={color} />;
    }
  };
  return (
    <div className="flex items-center h-full w-full">
      {/* form-container */}
      <div className="w-7/12 bg-gray-300 h-full relative">
        <div className="absolute inset-0 bg-grid h-full z-10 bg-no-repeat bg-cover backdrop-blur-sm"></div>

        {/* header */}
        <div className="absolute bg-white w-full h-3/4 top-[50%] translate-y-[-50%] left-[10%] z-50 rounded-xl p-20 3xl:p-28 shadow-md">
          <div className="absolute -right-6 3xl:-right-8 space-y-32 top-[50%] translate-y-[-50%]">
            <div
              className={`w-12 h-12 3xl:w-16 3xl:h-16 flex justify-center items-center ${
                page >= 0 ? `bg-${color}` : "bg-white"
              } rounded-full shadow-xl transition drop-shadow-xl`}
            >
              <IoMdBusiness className="text-white text-2xl" />
            </div>

            <div
              className={`w-12 h-12 3xl:w-16 3xl:h-16 flex justify-center items-center ${
                page >= 1 ? `bg-${color}` : "bg-white"
              } rounded-full shadow-xl transition drop-shadow-xl`}
            >
              <BsBank
                className={`${
                  page >= 1 ? "text-white" : `text-${color}`
                } text-2xl transition`}
              />
            </div>
            <div
              className={`w-12 h-12 3xl:w-16 3xl:h-16 flex justify-center items-center ${
                page >= 2 ? `bg-${color}` : "bg-white"
              } rounded-full shadow-xl transition drop-shadow-xl`}
            >
              <IoMdPerson
                className={`${
                  page >= 2 ? "text-white" : `text-${color}`
                } text-2xl transition`}
              />
            </div>
          </div>

          {/* body */}
          <div className=" my-5 3xl:my-10">{PageDisplay()}</div>

          {/* footer */}
          <div className="max-w-sm space-x-3 3xl:space-x-6 ">
            <button
              className={`btn bg-${color}`}
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            {page === FormTitles.length - 1 ? (
              <button
                className={`btn bg-${color}`}
                onClick={() => console.log("submit")}
              >
                Submit
              </button>
            ) : (
              <button
                className={`btn bg-${color}`}
                disabled={page === FormTitles.length - 1}
                onClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>

      {/* progressbar */}
      <div
        className={`h-full w-5/12 bg-${color} text-white flex items-center justify-center relative`}
      >
        <h1 className="absolute top-[3%] right-[10%] 2xl:text-2xl 3xl:text-4xl font-semibold tracking-wider text-shadow-xl hover:scale-105 transition">
          <Link to="/">Imperial Shuttle</Link>
        </h1>
        <div className="3xl:max-w-sm space-y-20 max-w-xs">
          <div>
            <h1 className="3xl:text-4xl text-2xl font-semibold">
              Business Details
            </h1>
            <p className="text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo doloremque magni asperiores? Cumque, numquam
              voluptatibus.
            </p>
          </div>
          <div>
            <h1 className="3xl:text-4xl text-2xl font-semibold">
              Bank/Momo Details
            </h1>
            <p className="text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo doloremque magni asperiores? Cumque, numquam
              voluptatibus.
            </p>
          </div>
          <div>
            <h1 className="3xl:text-4xl text-2xl font-semibold">
              Personal Details
            </h1>
            <p className="text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo doloremque magni asperiores? Cumque, numquam
              voluptatibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
