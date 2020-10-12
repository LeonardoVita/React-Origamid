import React from 'react';
import ReactDOM from 'react-dom';
import ExecJSX1 from './Exercicios/ExecJSX1';
import ExecJSXArrays from './Exercicios/ExecJSXArrays';
import App from './App';
import ExecComponents from './Exercicios/ExeComponents/ExecComponents';
import ExeUseState from './Exercicios/ExeUseState/ExeUseState';
import ExeUseEffects from './Exercicios/ExeUseEffects/ExeUseEffects';
import UseContext from './Exercicios/UseContext/UseContext';

ReactDOM.render(
  <React.StrictMode>
    {/* <ExecJSX1 /> */}
    {/* <ExecJSXArrays /> */}
    {/* <App /> */}
    {/* <ExecComponents /> */}
    {/* <ExeUseState /> */}
    {/* <ExeUseEffects /> */}
    <UseContext />
  </React.StrictMode>,
  document.getElementById('root')
);


