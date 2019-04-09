import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('World');

    const clickClick = () => {
      setCount(count + 1)
      setName('Liz')
    }
    return (
        <div>
          <h1>Hello {name}</h1>
          <p> you clicked {count} times </p>
          <button onClick={() => clickClick()}>
              Click Me
          </button>
        </div>
    )
}

const Example = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title =`You Clicked ${count} times`;
  })

  return (
    <div>
      <p>You clicked {count} times </p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Counter />
          <Example />
        </header>
      </div>
    );
  }
}

export default App;
