import React from 'react'

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
}

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
}

const ExecJSX1 = () => {
  const dados = mario
  const comprasArray = dados.compras.map(item => parseInt(item.preco.replace('R$ ', '')))
  const total = comprasArray.reduce((total, item) => total + item)
  console.log({ comprasArray, total })

  return (
    <>
      <p>nome: {dados.cliente}</p>
      <p>idade: {dados.idade}</p>
      <p>situação: <span style={dados.ativa ? { color: "green" } : { color: 'red' }}> {dados.ativa ? 'ativo' : 'desativado'}</span> </p>
      <p>total gasto: {total}</p>
      <span style={total > 10000 ? {} : { display: 'none' }}>você está gastando demais</span>
    </>
  )
};

export default ExecJSX1