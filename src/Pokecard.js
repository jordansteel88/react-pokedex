import React from "react";
import "./Pokecard.css";
// import "./defaults"

const API_BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

const Pokecard = ( {id, name, type, base_experience} ) => {
  let imgSrc = `${API_BASE_URL}/${id}.png`;

  return (
    <div className="Pokecard">
      <h3 className="Pokecard-name">{name}</h3>
      <img className="Pokecard-image" src={imgSrc} alt="Pokemon"></img>
      <p className="Pokecard-data">Type: {type}</p>
      <p className="Pokecard-data">EXP: {base_experience}</p>
    </div>
  )
}

export default Pokecard;