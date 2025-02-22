import React, { useState } from "react";
import "./show-pokemon.css";
export default function ShowPokemon() {
  const [number, setNumber] = useState<number>();
  const validateNumber = (number: number | undefined) => {
    if (!number || number > 250 || number < 1 || number === undefined) {
      return false;
    }
    return true;
  };
  return (
    <>
      <h1>Pokemon Game</h1>
      <div className="card">
        <p>Enter any number between 1 - 250 and get the pokemon details</p>
        <div>
          <input
            type="number"
            className="number-input"
            placeholder="Number between 1-5"
            onChange={(e: any) => {
              setNumber(e.target.value);
            }}
          />
        </div>

        <div className="pokemon-img">
          <img
            className="img"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${number}.png`}
            style={{
              visibility: validateNumber(number) ? "visible" : "hidden",
            }}
          />
        </div>
      </div>
    </>
  );
}
