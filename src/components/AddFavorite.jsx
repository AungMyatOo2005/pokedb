import React, { useEffect, useState } from "react";

const AddFavorite = ({ id }) => {
  const [lsData, setLsData] = useState([]);
  const isHave = lsData.find((lsId) => lsId === id) ? true : false;

  useEffect(() => {
    const pokeIds = JSON.parse(localStorage.getItem("FAV_POKE")) || [];
    setLsData(pokeIds);
  }, []);

  const handleLs = () => {
    if (!isHave) {
      const updateLsData = [...lsData, id];
      localStorage.setItem("FAV_POKE", JSON.stringify(updateLsData));
      setLsData(updateLsData);
    } else {
      const removeLsData = lsData.filter((lsId) => lsId !== id);
      localStorage.setItem("FAV_POKE", JSON.stringify(removeLsData));
      setLsData(removeLsData);
    }
  };
  return (
    <button
      className={`${
        isHave
          ? "bg-[#0496C7] text-white border-2 border-[#0496C7]"
          : "border-2 border-[#0496C7] text-black"
      } py-1 px-2 text-[12px] ss:text-[16px] sm:text-[18px] rounded-[3px] cursor-pointer transition-all hover:-translate-y-1 outline-none`}
      onClick={handleLs}
    >
      {isHave ? "Remove From Favorite" : "Add To Favorite"}
    </button>
  );
};

export default AddFavorite;
