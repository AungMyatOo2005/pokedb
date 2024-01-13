import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { UseAppContext } from "./hooks";
import PokemonPage from "./pages/PokemonPage";
import Loading from "./components/Loading";
import PokemonDetails from "./pages/PokemonDetails";
import ErrorView from "./components/ErrorView";
import FavoritePoke from "./pages/FavoritePoke";
const App = () => {
  const { state } = UseAppContext();
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page/:pg" element={<PokemonPage />} />
          <Route path="/pokemon/:query" element={<PokemonDetails />} />
          <Route path="/favPoke" element={<FavoritePoke />} />
        </Routes>
        {!!state?.loading.length && <Loading />}
        {state.isError && <ErrorView />}
      </Router>
    </div>
  );
};

export default App;
