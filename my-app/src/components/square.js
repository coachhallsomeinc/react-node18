import { useState } from 'react';

function Square({ value, onSquareClick }) {

    const myVar = "Hello";
    const [history, setHistory] = useState([Array(9).fill(null)]);

    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }

  export default Square;