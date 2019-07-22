import React from "react";
import Navbar from "./components/index";
import Pokedex from "./scenes/Pokedex/Pokedex";
import Favourites from "./scenes/Favourites/Favourites";

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: JSON.parse(localStorage.getItem("favourites")) || [],
      teamStats: {
        teamDefense: 0,
        teamAttack: 0,
        teamSpeed: 0
      }
    };
  }
  componentWillMount() {
    this.sumTeamStats();
  }
  componentDidUpdate() {
    localStorage.setItem("favourites", JSON.stringify(this.state.favourites));
  }
  sumTeamStats = () => {
    const { favourites } = this.state;
    let sumStats = favourites.reduce(
      (acc, curr) => {
        return {
          teamAttack: (acc.teamAttack += curr.pokemonAttack),
          teamDefense: (acc.teamDefense += curr.pokemonDefense),
          teamSpeed: (acc.teamSpeed += curr.pokemonSpeed)
        };
      },
      {
        teamAttack: 0,
        teamDefense: 0,
        teamSpeed: 0
      }
    );
    this.setState({ teamStats: sumStats });
  };
  addToFavouritesFunc = favPokeInfo => {
    let duplicate = this.state.favourites.filter(
      favPoke => favPoke.pokemonName === favPokeInfo.pokemonName
    );
    if (this.state.favourites.length < 6 && duplicate.length === 0) {
      this.setState(
        { favourites: [...this.state.favourites, favPokeInfo] },
        () => {
          this.sumTeamStats();
        }
      );
    } else {
      window.alert("Your team is full! Check your favourites!");
    }
  };

  removeFromFavouritesFunc = favPokeInfo => {
    if (this.state.favourites.length > 0) {
      this.setState(
        {
          favourites: this.state.favourites.filter(
            obj => obj.pokemonName !== favPokeInfo.pokemonName
          )
        },
        () => {
          this.sumTeamStats();
        }
      );
    }
  };
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/pokedex">
              <Pokedex
                addToFavouriteProps={this.addToFavouritesFunc}
                favouritesArrayProps={this.state.favourites}
              />
            </Route>
            <Route exact path="/favourites">
              <Favourites
                removeFromFavouriteProps={this.removeFromFavouritesFunc}
                favouritesArrayProps={this.state.favourites}
                sumStatsProps={this.state.teamStats}
              />
            </Route>
          </Switch>
          <Redirect exact from="/" to="/pokedex" />
        </div>
      </Router>
    );
  }
}

export default App;
