import logo from './logo.svg';
import './App.css';
import MyButton from './components/my-button';
import { useState } from 'react';
// import Square from './components/square';

export default function App() {

  function sayHello(){
    console.log("hey square")
  }

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
        <MyButton></MyButton>
        <Square value={"X"} onSquareClick={sayHello} />
      </header>
      
    </div>
  );
}

function Square({ value, onSquareClick }) {

  const myVar = "Hello";
  const [history, setHistory] = useState([Array(9).fill(null)]);

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}


