import React from "react";
import GetImg from "./GetImg";
import { UseAppContext } from "../hooks";

const ErrorView = () => {
  const { dispatch } = UseAppContext();
  const handleDismiss = () => {
    dispatch({
      type: "DISMISS_ERROR",
    });
  };
  return (
    <div className="w-[100%] h-[100%] fixed top-0 left-0 z-[30] flex items-center justify-center">
      <div className="flex items-center flex-col gap-3 max-w-[200px] rounded-md bg-[#88dbf7] relative pt-5">
        <button
          className="w-[20px] absolute top-3 right-3"
          onClick={handleDismiss}
        >
          <GetImg name="close" style="w-full" />
        </button>
        <div className="py-4 px-10">
          <GetImg name="error" style="w-full" />
        </div>
        <h4 className="text-center font-roboto px-3 py-3 text-[18px]">
          An error occurred while fetching data!
        </h4>
      </div>
    </div>
  );
};

export default ErrorView;
