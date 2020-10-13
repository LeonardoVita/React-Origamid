import React from 'react'

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

function ExecJSXArrays() {


  const dados = produtos.filter(
    ({ preco }) => Number(preco.replace("R$ ", "")) > 1500
  )

  return (
    <div>
      {
        dados.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.nome}</h2>
              <h4>preço: {item.preco}</h4>
              {item.cores.map((cor, i) => <div key={i} style={{ backgroundColor: cor, marginBottom: '5px' }}>{cor}</div>)}
            </div>
          )
        })
      }
    </div>
  )
}
export default ExecJSXArrays;