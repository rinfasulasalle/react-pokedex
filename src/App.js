// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import PokemonDetails from "./components/PokemonDetails";
import PokemonList from "./components/PokemonList";

const App = () => {
  return (
    <Router>
      <div>
        <SearchBar />
        <Routes>
          <Route path="/" />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
          <Route path="/listar" element={<PokemonList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
