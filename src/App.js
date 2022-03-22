import logo from './logo.svg';
import './App.css';
import {add} from './utilities/Calculate';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(question =>console.log(question))
  },[])
  return (
    <div className="App">
      
      
    </div>
  );
}

export default App;
