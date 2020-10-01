import React, { useState } from "react";

import "./App.css";

function App() {
  const [value, setValue] = useState("0");
  const clickHandler = (e) => {
    setValue(value + "");
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          <code> write the functions that will make me work!</code>
          <div className='calculator'>
            <div>{value}</div>
            <div className='calculator-buttons'>
              <button className='button' onClick={clickHandler}>
                שורש
              </button>
              <button className='button'>X^2</button>
              <button className='button'>C</button>
              <button className='button delete'>Delete</button>

              <button className='button number'>7</button>
              <button className='button number'>8</button>
              <button className='button number'>9</button>
              <button className='button'>X</button>

              <button className='button number'>4</button>
              <button className='button number'>5</button>
              <button className='button number'>6</button>
              <button className='button'>-</button>

              <button className='button number'>1</button>
              <button className='button number'>2</button>
              <button className='button number'>3</button>
              <button className='button'>+</button>

              <button className='button number'>+/-</button>
              <button className='button number'>0</button>
              <button className='button number'>.</button>
              <button className='button equal'>=</button>
            </div>
          </div>
        </p>
      </header>
    </div>
  );
}

export default App;
