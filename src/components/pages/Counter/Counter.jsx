import React, { useState } from 'react';
import './Counter.css';
export const Counter = () => {


  const [count, setCount] = useState(0);
  const [color, setColor] = useState('black');

  const handleIncrement = () => {
    setCount(count + 1);
    if (count === 9) {
      setColor('red');
    }
  };

  return (
    <div className="counter">
      <h1 style={{ color }}><p>Contador:</p> {count}</h1>
      <button onClick={handleIncrement}>Incrementar</button>
    </div>
  )
}

