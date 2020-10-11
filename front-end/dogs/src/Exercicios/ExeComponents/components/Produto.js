import React from 'react'

export default function Produto({ nome, propriedades }) {
  return (
    <div style={{ borderWidth: '2px', borderColor: 'black', borderStyle: "solid", marginBottom: '10px', padding: '5px' }}>
      <h3>{nome}</h3>
      <ul>
        {propriedades.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  )
}
