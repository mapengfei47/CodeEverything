import React, { useState } from 'react';

const HooksDemo01 = () =>{
  const [count,setCount] = useState(0)

  return (
    <div>
      <h1>React Hooks Demo</h1>
      <div>{ count }</div>
      <button onClick={() => setCount(count + 1)}>点击增加Count</button>
    </div>
  )
}

export default HooksDemo01

