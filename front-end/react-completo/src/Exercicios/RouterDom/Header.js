import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Header() {

  const location = useLocation()

  React.useEffect(() => {

    console.log("mudou de rota")

  }, [location])

  return (
    <header>
      <h1>ESTE É O HEADER DO SITE</h1>
      <nav style={{ display: "flex", justifyContent: "space-around", padding: " 0 60vw 0 0" }}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="sobre">Sobre</NavLink>
        <NavLink to="login">Login</NavLink>
      </nav>
    </header>
  )
}
