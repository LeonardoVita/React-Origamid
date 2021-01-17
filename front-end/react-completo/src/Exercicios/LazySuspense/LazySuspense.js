import React from 'react'
// import Contato  from './Contato'

const Contato = React.lazy(( ) => import('./Contato'))

export default function LazySuspense() {
  return (
    <div>
      <React.Suspense fallback={<div>Carregando....</div>} >
        <Contato />
      </React.Suspense>
    </div>
  )
}
