import React from "react";
import { useParams } from "react-router-dom";
import { UseAppContext, UseFetch } from "../hooks";
import { getColorByType } from "../constant";
import PokemonStatsCard from "../components/PokemonStatsCard";
import PokemonSpecies from "../components/PokemonSpecies";
import PokemonEvolutions from "../components/PokemonEvolutions";
import { ExtractId } from "../function/ExtractId";
import AddFavorite from "../components/AddFavorite";
import BackPage from "../components/BackPage";

const PokemonDetails = () => {
  const { state } = UseAppContext(); // Corrected function name
  const { query } = useParams();
  const id = /^\d+$/.test(query) ? query : state?.pokemonEntries?.[query];
  const pokemon = state?.pokemon?.[id];
  const species =
    !!pokemon?.species?.flavor_text_entries?.length && pokemon?.species;
  const evolutionId =
    species?.evolution_chain && ExtractId(species?.evolution_chain.url);
  const evolutions = pokemon?.evolutions;
  // const navigator = useNavigate();
  const stats = pokemon?.stats;
  pokemon?.name ||
    UseFetch({
      url: `https://pokeapi.co/api/v2/pokemon/${query}`,
      successAction: { type: "FETCH_POKEMON_SUCCESS" },
    });
  if (!pokemon) return;
  return (
    <div className="w-full flex flex-col items-center px-3 ss:px-8 md:px-20">
      <BackPage />
      <div className=" absolute top-3 right-6">
        <AddFavorite id={id} />
      </div>
      <h2 className="w-fit uppercase font-roboto font-semibold text-[22px] mt-5 bg-[#d1d1d1] py-1 px-3 border-x-[6px] border-[#0496C7]">
        {pokemon.name}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-10 w-full gap-x-5 gap-y-16">
        <div className="flex items-center justify-center">
          <div className="max-w-[500px] w-full flex flex-col items-center gap-10">
            <div className="flex items-center gap-5 justify-center w-full">
              <div className="w-[280px] h-[280px]">
                <img
                  src={pokemon.artwork}
                  className="w-[100%] h-[100%] object-contain"
                />
              </div>
              <div className="flex flex-col items-center gap-2 ">
                {pokemon.types.map((type) => {
                  const borderColor = getColorByType(type.type.name);
                  return (
                    <div
                      key={type.type.name}
                      className=" h-[70px] w-[70px] flex items-center justify-center rounded-full  poke-type relative bg-[#d1d1d1] border-[6px] shadow-[2px_2px_5px_1px_rgb(0,0,0,0.5)]"
                      style={{ borderColor }}
                    >
                      <span className="z-[30] uppercase text-[12px] text-black font-semibold font-roboto ">
                        {type.type.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            {!!species?.flavor_text_entries?.length && (
              <div className=" py-2 px-4 text-gray-200 flavor_text_entries">
                {species?.flavor_text_entries?.reduce((result, entry) => {
                  if (entry.language.name === "en") {
                    return entry.flavor_text;
                  }
                  return result;
                }, "")}
              </div>
            )}
          </div>
        </div>
        <div className="w-full">
          <PokemonStatsCard stats={stats} />
        </div>
      </div>
      <div className="w-full">
        <PokemonSpecies id={id} />
      </div>
      {evolutionId && (
        <div className="w-full">
          <PokemonEvolutions
            evolutionId={evolutionId}
            evolutions={evolutions}
          />
        </div>
      )}
    </div>
  );
};

export default PokemonDetails;
