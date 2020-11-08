import { useState } from 'react'

function HookUseRules(props){
  const [name,setName] = useState('马小飞')
  const [age,setAge] = useState(18)
  const [job,setJob] = useState('前端Bug开发工程师')

  return (
    <div>
      <div>Name: { name }</div>
      <div>Age: { age }</div>
      <div>Job: { job }</div>
      <button onClick={() => setName('马飞飞')}>点击修改名字</button>
    </div>
  )
}

export default HookUseRules