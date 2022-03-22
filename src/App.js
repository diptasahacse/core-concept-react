import logo from './logo.svg';
import './App.css';
import {add} from './utilities/Calculate';
import { useEffect, useState } from 'react';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(questions =>setQuestions(questions))
  },[])
  return (
    <div className="App">
      {
        questions.map((question,index) => <MakeCard key={index} data={question}></MakeCard>)
      }
      
      
    </div>
  );
}


const MakeCard = (props)=>{
  let [fanswer, setAns] = useState('')
  const answerHandler = (ans)=>{
    setAns(ans);
  }
  const {questionName,options,answer} = props.data;
  return(
    <div>
      <h1>{questionName}</h1>
      {
        options.map((option,index) =><li key={index}><span>{index+1} </span>{option}</li>)
      }
      <button onClick={()=>answerHandler(answer)}>ans</button>
      {
        fanswer == '' ? <p></p>: <p>{fanswer}</p>

      }


    </div>
  );
}

export default App;
