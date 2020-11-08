import React, { useState } from 'react'



function HookUseRules(props) {

  let isMount = false;
  let name, age, setName, setAge;
  if (true) {
    // eslint-disable-next-line
    [name, setName] = useState('马小飞')
    // eslint-disable-next-line
    [age, setAge] = useState('18')

    isMount = true
  }

  const [job, setJob] = useState('前端Bug开发工程师')

  return (
    <div>
      {name ? (<div>Name: { name}</div>) : null}
      {age ? (<div>Age: { age}</div>) : null}
      <div>Job: {job}</div>
      <button onClick={() => setName('马飞飞')}>点击修改名字</button>
    </div>
  )
}

export default HookUseRules