import React from 'react'
import Input from './components/Input'
import useForm from './hooks/useForm'

export default function InputComponents() {

  const cep = useForm('cep')
  const email = useForm('email')
  const nome = useForm()
  const sobrenome = useForm(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (cep.validate() && email.validate() && nome.validate()) {
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
        type="text"
        label="CEP"
        placeholder="00000-000"
        required
        {...cep}
      />
      <Input
        id="nome"
        type="text"
        label="Nome"
        required
        {...nome}
      />
      <Input
        id="sobrenome"
        type="text"
        label="Sobrenome"
        {...sobrenome}
      />
      <Input
        id="email"
        type="email"
        label="E-mail"
        placeholder="exemplo@exemplo.com"
        required
        {...email}
      />

      <button type="submit">Enviar</button>
    </form>
  )
}
