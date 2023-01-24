import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef } from 'react';

import CounterApp from 'counter/App';
import useStore from 'container/Store'

function App() {
  const { count, increment, clear } = useStore()
  
  return (
    <div style={{ padding: 10 }}>
      <CounterApp />
      <h1>
        {count}
      </h1>
      <div style={{ display: 'flex' }}>
        <header>
          Container:
        </header>
        <div
          style={{
            color: 'blue',
            paddingLeft: 10,
            cursor: 'pointer',
            userSelect: 'none',
          }}
          onClick={clear}>
          ✕
        </div>
      </div>
    </div>
  );
}

export default App;
