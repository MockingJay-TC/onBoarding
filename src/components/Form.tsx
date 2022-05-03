import { useState } from "react";
import BankInfo from "./BankInfo";
import BusinessInfo from "./BusinessInfo";
import PersonalInfo from "./PersonalInfo";

const Form = () => {
  const [page, setPage] = useState(0);
  const FormTitles = ["Business Details", "Bank Details", "Personal Info"];

  const PageDisplay = () => {
    if (page === 0) {
      return <BusinessInfo />;
    } else if (page === 1) {
      return <BankInfo />;
    } else {
      return <PersonalInfo />;
    }
  };
  return (
    <div className="flex items-center h-full w-full">
      {/* form-container */}
      <div className="w-7/12 bg-gray-300 h-full relative">
        {/* header */}
        <div className="absolute bg-white w-full h-5/6 top-[50%] translate-y-[-50%] left-[10%] z-50 rounded-xl p-28 shadow-md">
          <div>
            <h1 className="text-4xl font-bold text-sunshine tracking-wide">
              {FormTitles[page]}
            </h1>
            <p className="text-gray-700 tracking-wide text-lg">
              Configuring your application
            </p>
          </div>

          {/* body */}
          <div className="my-10">{PageDisplay()}</div>

          {/* footer */}
          <div className="max-w-sm space-x-6 ">
            <button
              className="btn"
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button
              className="btn"
              disabled={page === FormTitles.length - 1}
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* progressbar */}
      <div className="h-full w-5/12 bg-sunshine text-white flex items-center justify-center">
        <div className="max-w-sm space-y-16">
          <div>
            <h1 className="text-4xl font-semibold">Business Detials</h1>
            <p className="text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo doloremque magni asperiores? Cumque, numquam
              voluptatibus.
            </p>
          </div>
          <div>
            <h1 className="text-4xl font-semibold">Bank Detials</h1>
            <p className="text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo doloremque magni asperiores? Cumque, numquam
              voluptatibus.
            </p>
          </div>
          <div>
            <h1 className="text-4xl font-semibold">Personal Detials</h1>
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
