import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'

export default function Home() {
  return (
    <div>
      <Head title="Home" description="Essa e a descrição da home"/>
      <h1>HOME</h1>
      <p>esta é a home</p>
      <Link to="produto/notebook">notebook</Link> |
      {' '}<Link to="produto/smarthphone">smarthphone</Link>
    </div>
  )
}
