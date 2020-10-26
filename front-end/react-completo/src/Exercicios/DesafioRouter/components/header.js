import React from 'react'
import { NavLink } from 'react-router-dom'


export default function header() {
  return (
    <div className="header">
      <nav>
        <NavLink style={{marginRight:"15px"}} to="/" end>
          <button>Produtos</button> 
        </NavLink>
        <NavLink to="/contato"><button>Contato</button></NavLink>
      </nav>
    </div>
  )
}
