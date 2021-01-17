import { error } from 'jquery'
import React from 'react'

function reducer(state, action){
  switch(action){
    case "aumentar" : 
      return state + 1
    case "diminuir" : 
      return state - 1 
    default:
      throw new Error("Erro action não existe")
  }  
}


export default function Reducer() {
  const [state, dispatch] = React.useReducer(reducer,0)

  return (
    <div>
      <button onClick={() => dispatch("aumentar")}>+</button>
      <button onClick={() => dispatch("diminuir")}>-</button>
      <p>{state}</p>      
    </div>
  )
}
