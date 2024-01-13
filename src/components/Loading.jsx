import React from "react";
import GetImg from "./GetImg";
import UseAppContext from "../hooks/UseAppContext";

const Loading = () => {
  const { state } = UseAppContext();
  return (
    <div className=" fixed top-0 right-0 h-[100%] w-[100%] backdrop-blur-[5px] z-[40] flex items-center justify-center cursor-wait select-none">
      <div className="bg-[#88dbf7] p-5 px-10 rounded-[10px] max-w-[300px] flex flex-col items-center justify-center">
        <div className="spinner">
          <GetImg name="spinner" style="w-[160px]" />
        </div>
        <h4 className="py-5 mt-5 font-semibold font-roboto text-[24px] text-center">
          {state.loadingLabel}
        </h4>
      </div>
    </div>
  );
};

export default Loading;
