import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: 'awd55dadw8',
        },
        {
          name: 'Frank',
          id: '564as65dy8',
        },
        {
          name: 'Jacky',
          id: 'awd564as65',
        },
        {
          name: 'Andrei',
          id: '564as65dba',
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
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
