import React from 'react'
import {useLocation, useParams, NavLink, Outlet} from 'react-router-dom'


export default function Produto() {

  const params = useParams()
  // const location = useLocation()
  // console.log(location)
  // const search = new URLSearchParams(location.search)
  // console.log(search.get('query_param')) //query params ?query_param=verde

  return (
    <div>
      <h1>Produto {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink> {' - '}
        <NavLink to="avaliacao">Avaliação</NavLink> {' - '}
        <NavLink to="customizado">Descrição</NavLink>
      </nav>
      <Outlet /> 
    </div>
  )
}
