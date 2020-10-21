import React, { useState, useRef } from 'react'

export default function Cart() {
  const [contar, setContar] = useState(0);
  const [notificacao, setNotificacao] = useState(null);
  const timeoutRef = useRef();

  function handleClick() {
    setNotificacao('Obrigado por comprar');

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
    setContar(contar + 1);
  }


  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
}
