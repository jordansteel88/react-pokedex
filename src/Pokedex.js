import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";
import defaults from "./defaults"
// import pokemonDefaults from "./defaults";

const Pokedex = () => {
  return (
    <div className="Pokedex">
      <h2 className="Pokedex-heading">Pokedex</h2>
      <div className="Pokedex-cards">
        {defaults.map(p => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            base_experience={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;