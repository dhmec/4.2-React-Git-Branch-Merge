import React from 'react';
import ReactDOM from 'react-dom';
import HelloStudent from './components/HelloStudent';
import './index.css';
import HelloWorld from './components/HelloWorld';


ReactDOM.render(
  <React.StrictMode>
    <h1>React Git Branch Merge Practice</h1>
    <HelloWorld />
    <HelloStudent name='Dhar' />
    <HelloStudent name='Jigs' />
  </React.StrictMode>,
  document.getElementById('root')
);

  

