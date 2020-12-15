import React from 'react'
import './App.css';
import ClassCounterOne from './ClassCounterOne';
import ClassMouse from './ClassMouse';
import HookArray from './HookArray';
import HookCounter from './HookCounter';
import HookCounterOne from './HookCounterOne';
import HookCounttwo from './HookCounttwo';
import HookMouse from './HookMouse';
import HookObject from './HookObject';
import MouseContainer from './MouseContainer';

function App() {
  return (
    <div className="App">
      <HookCounter />
      <HookCounttwo />
      <HookObject />
      <HookArray />
      <ClassCounterOne />
      <HookCounterOne />
      <ClassMouse />
      {/*<HookMouse />*/}
      <MouseContainer/>
    </div>
  );
}

export default App;
