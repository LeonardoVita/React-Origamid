import React from 'react'
import Checkbox from './components/Checkbox'
import Input from './components/Input'
import Radio from './components/Radio'
import Select from './components/Select'

export default function InputComponents() {

  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [cep, setCep] = React.useState('')
  const [produto, setProduto] = React.useState('')
  const [cor, setCor] = React.useState('Vermelho')
  const [fruta, setFruta] = React.useState('')
  const [linguagem, setLinguagem] = React.useState([])
  const [termos, setTermos] = React.useState([])

  const [error, setError] = React.useState(null)


  function validadeCep(value) {
    if (value.length === 0) {
      setError('Preencha um valor')
      return false
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('preencha um cep válido')
      return false
    } else {
      setError(null)
      return true
    }
  }

  function handleBlur({ target }) {
    // const regex = /^\d{5}-?\d{3}$/
    // const validate = regex.test(target.value)
    validadeCep(target.value)
  }

  function handleChange({ target }) {
    if (error) validadeCep(target.value)
    setCep(target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (validadeCep(cep)) {
      console.log('enviou')
    } else {
      console.log('erro no envio')
    }

  }


  return (
    <form onSubmit={handleSubmit}>

      {/* VALIDAÇAO DE FORMULARIOS */}
      <h2>Validação de formularios</h2>

      <Input
        id="cep"
        label="CEP"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        placeholder="00000-000"
      />
      {error && <p style={{ color: 'red', fontSize: "14px" }}>*{error}</p>}



      <button type="submit">Enviar</button>
    </form>
  )
}
