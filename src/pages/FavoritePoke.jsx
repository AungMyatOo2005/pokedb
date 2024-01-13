import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import BackPage from "../components/BackPage";

const FavoritePoke = () => {
  const [pokemonIds, setPokemonIds] = useState([]);
  useEffect(() => {
    const lsData = JSON.parse(localStorage.getItem("FAV_POKE"));
    setPokemonIds(lsData ? lsData.reverse() : []);
  }, [setPokemonIds]);
  return (
    <>
      <BackPage />
      {!!pokemonIds.length ? (
        <div className="grid md:grid-cols-5 grid-cols-1 xxs:grid-cols-2 ss:grid-cols-3 sm:grid-cols-4 gap-x-5 gap-y-10 px-5 ss:px-10 py-10">
          {pokemonIds.map((id) => (
            <PokemonCard key={id} id={id} />
          ))}
        </div>
      ) : (
        <h1 className="w-full mt-10 text-[22px] px-2 text-[#0496C7] text-center">
          There is no favorite pokemon!
        </h1>
      )}
    </>
  );
};

export default FavoritePoke;
