import React from 'react'
import {useState} from 'react'
const App = () => {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')
  return (
    
    <>
        <div>App</div>
        <input type="text" placeholder='Enter a value' value={inputValue} onChange={(e) => setInputValue(e.target.value)} 
      />

      <button onClick={() => {
        setCount(count + Number(inputValue));
        setInputValue('');
      }}>
        +
      </button>

      <button onClick={() => {
        setCount(count - Number(inputValue));
        setInputValue('');
      }}>
        -
      </button>

      <button onClick={() => {
        setCount(0);
        setInputValue('');
      }}>
        Reset 🔁
      </button>

      <h1>{count}</h1>
    </>
  );
};

export default App