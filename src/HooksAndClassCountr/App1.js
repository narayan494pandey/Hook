import React from 'react'
import ClassCounterOne from './ClassCounterOne';
import ClassMouse from './ClassMouse';
import HookArray from './HookArray';
import HookCounter from './HookCounter';
import HookCounterOne from './HookCounterOne';
import HookCounttwo from './HookCounttwo';
//import HookMouse from './HookMouse';
import HookObject from './HookObject';
import IntervalClassCounter from './IntervalClassCounter';
import IntervalHookCounter from './IntervalHookCounter';
import MouseContainer from './MouseContainer';

function App1() {
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
      <IntervalClassCounter />
      <IntervalHookCounter />
    </div>
  );
}

export default App1;
