import React, { useState } from 'react';

function UseStateComponent(props){
  const [count,setCount] = useState(0)

  return (
    <div>
      <h1>React Hooks useStateDemo</h1>
      <div>当前Count：{ count }</div>
      <button onClick={() => setCount(count + 1)}>Count++</button>
    </div>
  )
}

export default UseStateComponent