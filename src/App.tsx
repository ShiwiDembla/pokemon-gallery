import { useState } from "react";
import "./App.css";
import ShowPokemon from "./components/show-pokemon/show-pokemon";
import VirtualizedListExample from "./components/pokemon-gallery/pokemon-gallery";

function App() {
  return (
    <>
      {/* <div className="card"> */}
      {/* <ShowPokemon /> */}
      {/* </div> */}
      <VirtualizedListExample />
    </>
  );
}

export default App;
