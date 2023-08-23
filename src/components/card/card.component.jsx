import React, { Component } from "react";
import "./card.style.css";

class Card extends Component {
  render() {
    const { name} = this.props.monster;
    console.log(this.props.monster);
    return (
      <div className="card-container" key={name} >
      <a href = {`https://www.pokemon.com/us/pokedex/${name}`} target = "_blank" rel = "noreferrer">
        <img 
          src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
          alt={`monster ${name}`} height="150px" width="150px"
        />
        <h2>{name}</h2>
        </a>
      </div>
    );
  }
}
export default Card;
