import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='counter-container'>
      <h2 class="mb-3 text-center">Counter App : {count}</h2>
      <button onClick={increment} style={{ backgroundColor: 'green', color: 'white' }}>Increment</button>
      <button onClick={decrement} style={{ backgroundColor: 'red', color: 'white' }}>Decrement</button>
    </div>
  );
}

export default Counter;
