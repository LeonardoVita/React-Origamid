import React from 'react'
import Radio from './components/Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

export default function ExecInputs() {

  const [questao, setQuestao] = React.useState(0)
  const [acertos, setAcertos] = React.useState(0)

  const [resposta, setResposta] = React.useState(0)


  function handleSubmit(e) {
    e.preventDefault()

    if (perguntas[questao].resposta === resposta) {
      setAcertos(acertos + 1)
      setQuestao(questao + 1)
      console.log('resposta correta')
    } else {
      setQuestao(questao + 1)
      console.log('respsota errada')
    }


  }
  console.log(perguntas.length)

  if (questao > perguntas.length - 1) {
    return <p>Você Acertou {acertos}!</p>
  }

  return (
    <form onSubmit={handleSubmit}>
      {perguntas.map((pergunta, index) => {

        if (index !== questao) return null

        return (
          <div key={pergunta.id}>
            <h4>{pergunta.pergunta}</h4>
            <Radio
              options={pergunta.options}
              value={resposta}
              setValue={setResposta}
              questao={questao}
            />
          </div>
        )
      })}
      <button type="submit">Proxima</button>
    </form>
  )
}
