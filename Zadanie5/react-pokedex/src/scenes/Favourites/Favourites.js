import React, { Component } from "react";
import styles from "./Favourites.module.css";
import { Clear } from "@material-ui/icons";

const {
  favSceneWrapper,
  favPokeTable,
  statsSection,
  imgHolder,
  teamStatsWrapper,
  teamStatsList,
  pokeStats
} = styles;

class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: this.props.favouritesArrayProps,
      pokemonStats: {
        pokemonAttack: 0,
        pokemonSpeed: 0,
        pokemonDefense: 0
      }
    };
  }

  componentWillReceiveProps({ favouritesArrayProps }) {
    this.setState({ favourites: favouritesArrayProps });
  }

  render() {
    return (
      <div className={favSceneWrapper}>
        <h1>Your team</h1>
        <ul className={favPokeTable}>
          {this.state.favourites.map(favPokeInfo => {
            return (
              <li
                onMouseEnter={() =>
                  this.setState({
                    pokemonStats: {
                      pokemonAttack: favPokeInfo.pokemonAttack,
                      pokemonDefense: favPokeInfo.pokemonDefense,
                      pokemonSpeed: favPokeInfo.pokemonSpeed
                    }
                  })
                }
                title="check stats"
                className={imgHolder}
                key={Math.random()}
              >
                <img
                  src={favPokeInfo.pokemonPic}
                  alt="favPoke img"
                  onMouseLeave={() =>
                    this.setState({
                      pokemonStats: {
                        pokemonAttack: 0,
                        pokemonDefense: 0,
                        pokemonSpeed: 0
                      }
                    })
                  }
                />
                <span title="Remove from favourites">
                  <Clear
                    onClick={() => {
                      this.props.removeFromFavouriteProps(favPokeInfo);
                    }}
                  />
                </span>
              </li>
            );
          })}
        </ul>
        <div className={statsSection}>
          <span className={teamStatsWrapper}>
            <h3>Team Stats</h3>
            <ul className={teamStatsList}>
              <li>Defense: {this.props.sumStatsProps.teamDefense}</li>
              <li>Attack: {this.props.sumStatsProps.teamAttack}</li>
              <li>Speed: {this.props.sumStatsProps.teamSpeed}</li>
            </ul>
          </span>
          <span className={pokeStats}>
            <h3>Pokemon Stats</h3>
            <ul className={teamStatsList}>
              <li>Defense: {this.state.pokemonStats.pokemonDefense || 0}</li>
              <li>Attack: {this.state.pokemonStats.pokemonAttack || 0}</li>
              <li>Speed: {this.state.pokemonStats.pokemonSpeed || 0}</li>
            </ul>
          </span>
        </div>
      </div>
    );
  }
}

export default Favourites;
