import React from "react";
import { UseAppContext } from "../hooks";
import PokemonCard from "./PokemonCard";
import { useNavigate } from "react-router-dom";

const PokemonList = () => {
  const { state } = UseAppContext();
  const navigator = useNavigate();
  if (!state.results) return;
  return (
    <>
      <button
        className={`bg-[#0496C7] text-white
         py-1 px-2 text-[12px] ss:text-[16px] sm:text-[18px] rounded-[3px] cursor-pointer transition-all hover:-translate-y-1 outline-none absolute top-3 left-6`}
        onClick={() => navigator("/favPoke")}
      >
        Favorite Pokemon
      </button>
      <div className="grid md:grid-cols-5 grid-cols-2 xxs:grid-cols-2 ss:grid-cols-3 sm:grid-cols-4 gap-x-5 gap-y-10 px-5 ss:px-10 py-10">
        {state.results.map((id) => (
          <PokemonCard key={id} id={id} />
        ))}
      </div>
    </>
  );
};

export default PokemonList;
