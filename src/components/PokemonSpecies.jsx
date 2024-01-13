import React, { useState } from "react";
import { UseAppContext, UseFetch } from "../hooks";
import GetImg from "./GetImg";
import { eggColor } from "../constant";
import PokemonAbilities from "./PokemonAbilities";
import { ExtractId } from "../function/ExtractId";

const PokemonSpecies = ({ id }) => {
  const { state } = UseAppContext();
  const pokemon = state.pokemon?.[id];
  const species = pokemon?.species;
  const {
    base_happiness,
    capture_rate,
    growth_rate,
    habitat,
    pal_park_encounters,
    pokedex_numbers,
    egg_groups,
  } = species;
  species?.url &&
    UseFetch({
      url: `https://pokeapi.co/api/v2/pokemon-species/${id}`,
      successAction: { type: "FETCH_SPECIES_SUCCESS" },
    });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 py-10 w-full gap-x-4 gap-y-16">
      <div className="w-full">
        {pokemon?.abilities && (
          <div className="max-w-[400px] w-full mx-auto">
            <h4 className="flex items-center gap-2 uppercase text-[20px] font-roboto font-semibold">
              <GetImg name="ability" style="w-[20px]" />
              Abilities
            </h4>
            <div className="pt-5 flex items-center gap-4 flex-wrap">
              {pokemon?.abilities?.map((abilities, index) => {
                const id = ExtractId(abilities.ability.url);
                return (
                  <React.Fragment key={id}>
                    <PokemonAbilities
                      id={id}
                      is_hidden={abilities.is_hidden}
                      index={index}
                    />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        )}
        {!species.url && (
          <>
            <div className="mt-10 max-w-[400px] w-full mx-auto uppercase">
              <h4 className="flex items-center gap-2 uppercase text-[20px] font-roboto font-semibold">
                <GetImg name="info" style="w-[20px]" />
                Species Info
              </h4>
              <div className="w-full flex flex-wrap gap-5 mt-3">
                <div className="flex items-center gap-2 bg-[#d1d1d1] pl-2 rounded-full text-[14px]">
                  <GetImg name="butterflyNet" style="w-[20px]" />
                  <p>Capture Rate</p>
                  <span className="bg-[#0496C7] text-white py-1 px-2 rounded-r-full">
                    {capture_rate}%
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#d1d1d1] pl-2 rounded-full text-[14px]">
                  <GetImg name="happyFace" style="w-[20px]" />
                  <p>Base Happiness</p>
                  <span className="bg-[#0496C7] text-white py-1 px-2 rounded-r-full">
                    {base_happiness}%
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#d1d1d1] pl-2 rounded-full text-[14px]">
                  <GetImg name="growUp" style="w-[20px]" />
                  <p>Grow Up</p>
                  <span className="bg-[#0496C7] text-white py-1 px-2 rounded-r-full">
                    {growth_rate?.name}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#d1d1d1] pl-2 rounded-full text-[14px]">
                  <GetImg name="pond" style="w-[20px]" />
                  <p>Habit</p>
                  <span className="bg-[#0496C7] text-white py-1 px-2 rounded-r-full">
                    {habitat?.name}
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {!species?.url && (
        <div className="w-full flex items-center flex-col">
          <div className="max-w-[400px] w-full">
            <div className="w-full">
              <h4 className="flex items-center gap-2 uppercase text-[20px] font-roboto font-semibold">
                <GetImg name="park" style="w-[20px]" />
                Pal Park Encounters
              </h4>
              <div className="flex items-center justify-between w-full mt-5 bg-[#0496c78c] py-1 px-2 border-l-[5px] rounded-sm border-[#0496C7] font-roboto uppercase">
                <p>{pal_park_encounters[0]?.area?.name}</p>
                <p>{pal_park_encounters[0]?.rate}%</p>
              </div>
            </div>
            <div className="mt-10 w-full">
              <h4 className="flex items-center gap-2 uppercase text-[20px] font-roboto font-semibold">
                <GetImg name="pokeball" style="w-[20px]" />
                Pokedex Numbers
              </h4>
              <div className="mt-3 max-h-[200px] overflow-y-auto rounded-md">
                {pokedex_numbers.map((pokedex, index) => (
                  <div
                    key={pokedex.pokedex.name}
                    className="flex items-stretch w-full justify-between bg-[#0496c78c]"
                  >
                    <div className="flex items-stretch gap-2">
                      <span className="px-2 flex items-center justify-center text-white bg-[#0496C7]">
                        {index + 1}
                      </span>
                      <p className="text-black font-roboto py-1">
                        {pokedex.pokedex.name.replace("-", " ")}
                      </p>
                    </div>
                    <span className="bg-[#d1d1d1] w-[30px] text-[12px] items-center justify-center flex">
                      {pokedex.entry_number}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 max-w-[400px] w-full flex flex-col items-center sm:items-start">
            <div className="flex items-center flex-col">
              <h4 className="flex items-center gap-2 uppercase text-[20px] font-roboto font-semibold">
                <GetImg name="eggs" style="w-[20px]" />
                Egg Groups
              </h4>
              <div className="flex items-center justify-center mt-3">
                {egg_groups.map((egg, index) => {
                  const borderBottomColor = eggColor?.[egg.name];
                  return (
                    <div
                      key={egg.name}
                      className={`bg-[#d1d1d1] py-1 px-2 ${
                        index + 1 < egg_groups.length &&
                        "border-r border-gray-500"
                      } border-b-[5px]`}
                      style={{ borderBottomColor }}
                    >
                      {egg.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonSpecies;
