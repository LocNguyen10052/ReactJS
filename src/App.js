import logo from './logo.svg';
import './App.css';
import {Component} from 'react'
class App extends Component {
  constructor(){
    super();
    this.state = {
      name:'loc'
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div>Hi {this.state.name}</div>
          <button>Change name</button>
        </header>
      </div>
    );
  }
}

export default App;
