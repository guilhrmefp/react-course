import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };

    console.log('1 - constructor');
  }

  componentDidMount() {
    console.log('3 - componentDidMount');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  render() {
    console.log('2 - render');

    return (
      <div className="App">
        <input
          type="text"
          className="search"
          placeholder="search monsters"
          onChange={(event) => {
            console.log(event);
          }}
        />
        {
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;

// https://jsonplaceholder.typicode.com/users