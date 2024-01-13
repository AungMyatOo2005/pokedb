import React from "react";
import { UseAppContext, UseFetch } from "../hooks";
import PokemonList from "../components/PokemonList";
import Pagination from "../components/Pagination";

const Home = () => {
  const { state } = UseAppContext();
  UseFetch({
    url: `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${state.itemLimit}`,
    successAction: { type: "FETCH_POKEMONS_SUCCESS" },
  });
  return (
    <>
      <PokemonList />
      <Pagination currentPage={1} />
    </>
  );
};

export default Home;
