import React from "react";
import { UseAppContext, UseFetch } from "../hooks";
import PokemonList from "../components/PokemonList";
import Pagination from "../components/Pagination";
import { useParams } from "react-router-dom";

const PokemonPage = () => {
  const { state } = UseAppContext();
  const { pg } = useParams();
  const offset = state.itemLimit * (pg - 1);
  UseFetch({
    url: `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${state.itemLimit}`,
    successAction: { type: "FETCH_POKEMONS_SUCCESS" },
  });
  return (
    <>
      <PokemonList />
      <Pagination currentPage={Number(pg)} />
    </>
  );
};

export default PokemonPage;
