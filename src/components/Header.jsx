import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseAppContext from "../hooks/UseAppContext";
const Header = () => {
  const { state, dispatch } = UseAppContext();
  const [text, setText] = useState("");
  const navigator = useNavigate();
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const handleSearch = () => {
    const query = text.toLocaleLowerCase().replace(/ /g, "-");
    query && navigator(`/pokemon/${query}`);
    setText("");
  };
  const handlePerPageChange = (e) => {
    dispatch({
      type: "PER_PAGE_CHANGE",
      count: e.target.value,
    });
  };
  return (
    <div className="w-full pb-5 pt-10">
      <h1 className="w-full text-[42px] header-text text-center tracking-[4px]">
        Pokémon
      </h1>
      <div className="flex items-center justify-center w-full mt-10 gap-5 ">
        <input
          name="search"
          type="text"
          className=" outline-none border-[#0496C7] bg-[#d1d1d1] border-2 py-1 px-3 rounded-md placeholder:text-gray-400"
          placeholder="Search Pokemon..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyUp={handleKeyUp}
        />
        <button
          className=" outline-none bg-[#0496C7] py-1 px-2 border-2 border-[#0496C7] rounded-md text-white"
          onClick={() => handleSearch()}
        >
          Search
        </button>
      </div>
      <div className="w-full flex items-center justify-center mt-[30px]  text-[18px]">
        <div className="border-[#0496C7] border-2 rounded-md">
          <label className="py-1 px-2">Items Per Page</label>
          <select
            value={state.itemLimit}
            onChange={handlePerPageChange}
            className="outline-none p-1 cursor-pointer bg-[#0496C7] transition-all text-white"
          >
            <option className="bg-white text-black">5</option>
            <option className="bg-white text-black">10</option>
            <option className="bg-white text-black">15</option>
            <option className="bg-white text-black">20</option>
            <option className="bg-white text-black">25</option>
            <option className="bg-white text-black">30</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
