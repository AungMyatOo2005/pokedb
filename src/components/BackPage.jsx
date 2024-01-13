import React from "react";
import GetImg from "./GetImg";
import { useNavigate } from "react-router-dom";

const BackPage = () => {
  const navigator = useNavigate();
  return (
    <button
      className=" absolute top-3 left-6 hover:translate-y-[-2px] transition-all"
      onClick={() => navigator(-1)}
    >
      <GetImg name="arrow" style="w-[30px]" />
    </button>
  );
};

export default BackPage;
