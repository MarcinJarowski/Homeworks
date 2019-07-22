import React, { Component } from "react";
import styles from "./Pokedex.module.css";
import { StarBorder } from "@material-ui/icons";

const {
  pokedex,
  pokedexList,
  changePageButton,
  buttonsWrapper,
  infoBox,
  infoList,
  imgHolder,
  buttonHolder,
  listElement
} = styles;

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonsArray: [],
      isLoaded: false,
      favourites: this.props.favouritesArrayProps
    };
  }
  fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          pokemonsArray: data.results,
          nextArrayUrl: data.next,
          prevArrayUrl: data.previous
        });
      });
  }
  componentDidMount() {
    this.fetchData("https://pokeapi.co/api/v2/pokemon/");
  }
  componentWillReceiveProps({ favouritesArrayProps }) {
    this.setState({ favourites: favouritesArrayProps });
  }

  render() {
    var {
      isLoaded,
      pokemonsArray,
      nextArrayUrl,
      prevArrayUrl,
      pokemonName,
      pokemonWeight,
      pokemonHeight,
      pokemonPic,
      pokemonTypes,
      pokemonAttack,
      pokemonDefense,
      pokemonSpeed
    } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className={pokedex}>
          <ul className={pokedexList}>
            {pokemonsArray.map(pokemon => {
              return (
                <li
                  className={listElement}
                  key={Math.random()}
                  onClick={() => {
                    fetch(pokemon.url)
                      .then(r => r.json())
                      .then(pokemon => {
                        let joinTypes = pokemon.types
                          .map(o => o.type.name)
                          .join(" ");
                        this.setState({
                          pokemonName: pokemon.name,
                          pokemonHeight: pokemon.height,
                          pokemonWeight: pokemon.weight,
                          pokemonPic: pokemon.sprites.front_default,
                          pokemonTypes: joinTypes,
                          pokemonSpeed: pokemon.stats[0].base_stat,
                          pokemonAttack: pokemon.stats[4].base_stat,
                          pokemonDefense: pokemon.stats[3].base_stat
                        });
                      });
                  }}
                >
                  {pokemon.name}
                  {this.state.favourites.map(obj =>
                    obj.pokemonName === pokemon.name ? (
                      <StarBorder key={Math.random()} />
                    ) : null
                  )}
                </li>
              );
            })}
          </ul>
          <div className={buttonsWrapper}>
            <button
              className={changePageButton}
              onClick={() => {
                if (prevArrayUrl == null) {
                  return null;
                } else {
                  this.fetchData(prevArrayUrl);
                }
              }}
            >
              PREV
            </button>
            <button
              className={changePageButton}
              onClick={() => this.fetchData(nextArrayUrl)}
            >
              NEXT
            </button>
          </div>
          <div className={infoBox}>
            <ul className={infoList}>
              <li>Name: {pokemonName || "choose pokemon"}</li>
              <li>Height: {pokemonHeight || "---"}</li>
              <li>Weight: {pokemonWeight || "---"}</li>
              <li>Types: {pokemonTypes || "---"} </li>
            </ul>
            <span className={imgHolder}>
              <img src={pokemonPic} alt="Pokemon img" />
              <span className={buttonHolder} title="Add to favourites!">
                {this.state.pokemonName === undefined ? null : (
                  <StarBorder
                    onClick={() => {
                      let favPokeInfo = {
                        pokemonName,
                        pokemonAttack,
                        pokemonPic,
                        pokemonSpeed,
                        pokemonDefense
                      };
                      this.props.addToFavouriteProps(favPokeInfo);
                    }}
                  />
                )}
              </span>
            </span>
          </div>
        </div>
      );
    }
  }
}

export default Pokedex;
