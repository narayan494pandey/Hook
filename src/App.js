import React from 'react'
import './App.css';
import ClassCounterOne from './ClassCounterOne';
import HookArray from './HookArray';
import HookCounter from './HookCounter';
import HookCounterOne from './HookCounterOne';
import HookCounttwo from './HookCounttwo';
import HookObject from './HookObject';

function App() {
  return (
    <div className="App">
      <HookCounter />
      <HookCounttwo />
      <HookObject />
      <HookArray />
      <ClassCounterOne />
      <HookCounterOne />
        
    </div>
  );
}

export default App;
