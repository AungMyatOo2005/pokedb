import React from "react";
import { UseFetch } from "../hooks";
import PokemonCard from "./PokemonCard";

const PokemonEvolutions = ({ evolutionId, evolutions }) => {
  if (!evolutionId) return;
  UseFetch({
    url: `https://pokeapi.co/api/v2/evolution-chain/${evolutionId}`,
    successAction: { type: "FETCH_EVOLUTION_SUCCESS" },
  });
  return (
    <div className="w-full mt-10">
      <h1 className="w-full text-center font-roboto font-semibold text-[28px]">
        Evolutions
      </h1>
      <div
        className={`flex items-center gap-1 ss:gap-2 sm:gap-3 md:gap-5 justify-center py-10`}
      >
        {evolutions?.map((evolution, index) => {
          const [pokemonId, { evolution_details }] = evolution;
          const minLevel = evolution_details[0]?.min_level || 1;

          return (
            <React.Fragment key={pokemonId}>
              {index > 0 && (
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-semibold text-[12px] ss:text-[14px] sm:text-[16px] md:text-[18px] text-center">
                    {evolution_details[0]?.trigger?.name.replace("-", " ")}
                  </h3>
                  <div className="font-bold text-[18px] xs:text-[22px] ss:text-[32px] sm:text-[42px] md:text-[52px] arrow font-VT">
                    <span>&gt;</span>
                    <span>&gt;</span>
                    <span>&gt;</span>
                  </div>
                </div>
              )}
              <div>
                <h3 className="w-full text-center py-2 font-semibold text-[14px] xs:text-[16px] ss:text-[20px]">
                  Level {minLevel}+
                </h3>
                <div onClick={() => scrollTo(0, 0)}>
                  <PokemonCard
                    id={pokemonId}
                    delay={`${index * 2 - 1}s`}
                    evolutionCardStyle="w-[90px] xs:w-[120px] ss:w-[150px] sm:w-[200px] md:w-[250px]"
                    evolutionImgBoxStyle="h-[90px] xs:h-[120px] ss-[h-150px] sm:h-[150px] md:h-[200px] px-[5px] sm:px-[15px] md:px-[20px] py-[5px] sm:py-[10px] md:py-[15px]"
                    evolutionPokemonNameStyle="text-[12px] ss:text-[14px] sm:text-[18px]"
                    evolutionTypeStyle="flex-col sm:flex-row"
                    evolutionTypeBoxStyle="py-[1px] sm:py-[2px] px-[2px] sm:px-2 border-2 sm:border-4"
                  />
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonEvolutions;
