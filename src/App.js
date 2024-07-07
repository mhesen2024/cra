import React from 'react';
import './App.css';
import Greetingrfc from './Compontents/Greetingrfc';
import Greetingrcc from './Compontents/Greetingrcc';


function App() {
  return (
    <div className="App">
      <div className='comp'>

<Greetingrfc name='abdalla' message='welcome'/>
<Greetingrcc name='ahmad' message='are you good'/>
      </div>
    </div>
  );
}

export default App;
