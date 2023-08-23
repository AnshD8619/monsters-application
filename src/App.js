import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { FcNext, FcPrevious } from "react-icons/fc";
class App extends Component {
  constructor() {
    super();
    //Initializes State of application
    this.state = {
      monsters: [],
      searchString: "",
      offset: 0,
    };
  }
  componentDidMount() {
    console.log("mount on");
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${this.state.offset}`
    )
      .then((response) => response.json())
      .then((name) => this.setState({ monsters: name.results }));
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  OnNextButton = (event) => {
    console.log("here now" + this.state.offset);
    this.state.offset += 20;
    this.componentDidMount();
  };
  OnPrevButton = (event) => {
    if (this.state.offset == 0) {
      return;
    } else {
      this.state.offset -= 20;
      this.componentDidMount();
    }
  };
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const { OnNextButton, OnPrevButton } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Pokemon</h1>
        <SearchBox
          className={`search-box ${this.props.className}`}
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
        />
        <CardList monsters={filteredMonsters} />
        <div className="row">
          <button key="PrevButton" onClick={OnPrevButton}>
            <FcPrevious />
          </button>
          <button key="nextButton" onClick={OnNextButton}>
            <FcNext />
          </button>
        </div>
      </div>
    );
  }
}

export default App;
