import React from 'react'

export default function useLocalStorage(key, inicial) {

  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : inicial; //se local igual a null então salva vazio ""
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}