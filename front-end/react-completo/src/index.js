import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// EXERCICIOS

import ExecJSX1 from './Exercicios/ExecJSX1';
import ExecJSXArrays from './Exercicios/ExecJSXArrays';
import ExecComponents from './Exercicios/ExeComponents/ExecComponents';

//  HOOKS 

import ExeUseState from './Exercicios/Hooks/ExeUseState/ExeUseState';
import ExeUseEffects from './Exercicios/Hooks/ExeUseEffects/ExeUseEffects';
import UseContext from './Exercicios/Hooks/UseContext/UseContext';
import UseRef from './Exercicios/Hooks/UseRef/UseRef';
import ExeUseContext from './Exercicios/Hooks/ExeUseContext/ExeUseContex';
import CustomHooks from './Exercicios/Hooks/CustomHooks/CustomHooks'

// Inputs

import ExecInput from './Exercicios/ExecInput'


ReactDOM.render(
  <React.StrictMode>

    {/* <App /> */}
    {/* <ExecJSX1 /> */}
    {/* <ExecJSXArrays /> */}
    {/* <ExecComponents /> */}

    {/* <ExeUseState /> */}
    {/* <ExeUseEffects /> */}
    {/* <UseContext /> */}
    <UseRef />
    {/* <ExeUseContext /> */}
    {/* <CustomHooks /> */}

    {/* <ExecInput /> */}

  </React.StrictMode>,
  document.getElementById('root')
);


