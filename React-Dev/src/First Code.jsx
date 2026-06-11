
import React from 'react'
import { useState } from 'react'
const x = 10 
const y = 20 
const z = 30
const names = ["Alice", "Bob", "Charlie ", "David", "Eve"]
const isLoggedIn = false

const style = {
  color: 'blue',
  fontSize: '24px',
  fontWeight: 'bold',
}


const FirstCode = () => {
  const [count , setCount] =useState(0)
  const [val, setVal]   = useState('')
  const handleCount =() =>{
      setCount(count+Number(val))
  }
  return (
    <>
      <h1 className="font-sans text-blue-500 text-4xl ">
      App</h1>
      <p className="font-sans text-gray-500 text-lg">
        The sum of {x} and {y} is {x + y}.
      </p>
      <p style={style}>
        The product of {x} and {z} is {x * z}.
      </p>

      <ul start = {1}>
        {names.map((name, index) => (
          <li style={{ listStyleType: 'decimal' , color: 'green' }} key={index} >
            {index+1}. {name}
          </li>
        ))}
      </ul> 
      { isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
      <div>
        <input type="text" placeholder='hii' value={val} onChange={e.target.value} />
        <button onClick={handleCount}>ADD</button>
      </div>
    </>
  )
}

export default FirstCode;