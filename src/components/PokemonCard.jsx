import React from "react";
import { UseAppContext } from "../hooks";
import UseFetch from "../hooks/UseFetch";
import { getColorByType } from "../constant";
import { Link } from "react-router-dom";

const PokemonCard = ({
  id,
  delay,
  evolutionCardStyle,
  evolutionImgBoxStyle,
  evolutionTypeStyle,
  evolutionPokemonNameStyle,
  evolutionTypeBoxStyle,
}) => {
  const { state } = UseAppContext();
  state.pokemon?.[id]?.name ||
    UseFetch({
      url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      successAction: {
        type: "FETCH_POKEMON_SUCCESS",
      },
    });
  if (state.pokemon?.[id]?.name) {
    const { name, artwork, types: rawType } = state.pokemon?.[id];
    const type = rawType.map((type) => type.type.name);
    const animationDelay = delay ? delay : `${Math.random() * 50}s`;
    return (
      <Link to={`/pokemon/${id}`}>
        <div
          className={`bg-[#d1d1d1] rounded-md border-4 border-[#0496C7]  mx-auto hover:scale-[1.01] cursor-pointer transition-all shadow-[3px_3px_10px_2px_rgb(0,0,0,0.5)] poke-card relative overflow-hidden ${
            evolutionCardStyle ?? "w-full max-w-[250px]"
          }`}
        >
          <div className="shine" style={{ animationDelay }}></div>
          <div
            className={` rounded-md relative card-img-box ${
              evolutionImgBoxStyle ?? "h-[200px] px-[20px] py-[15px]"
            }`}
          >
            <img
              src={artwork}
              className="w-[100%] h-[100%] object-contain img-stroke"
            />
          </div>
          <p
            className={`w-full text-center font-roboto uppercase text-black py-2 ${evolutionPokemonNameStyle}`}
          >
            {name.replace("-", " ")}
          </p>
          <div
            className={`w-full flex items-center justify-center gap-2 pb-3 ${evolutionTypeStyle}`}
          >
            {type.map((typename) => {
              const borderColor = getColorByType(typename);
              return (
                <p
                  key={typename}
                  style={{ borderColor }}
                  className={` rounded-md text-[14px] bg-[#d1d1d1] font-roboto text-center ${
                    evolutionTypeBoxStyle ?? "py-[2px] px-2 border-4"
                  }`}
                >
                  {typename}
                </p>
              );
            })}
          </div>
        </div>
      </Link>
    );
  }
};

export default PokemonCard;
