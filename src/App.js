import './App.css';
import { useState } from 'react';

const Greeting = () => {
  const [n, setn] = useState("");
  const [uname, setUname] = useState("");
  const [dis, setDis] = useState({display: "none"});
  const [font, setFont] = useState({fontFamily: "sans-serif"});
  const [color, setColor] = useState({color: "green"});

  const handleClick = () => {
    setUname(n);
    if(n.length > 0){
      setDis({display: "block"});
    }
    else{
      setDis({display: "none"});
    }
    if(n == "Dave"){
      setFont({fontFamily: "serif"});
    }
    else{
      setFont({fontFamily: "sans-serif"})
    }
    if(n == "Sarah"){
      setColor({color: "red"});
    }
    else{
      setColor({color: "green"});
    }
  }

  console.log(n);

  return (
    <div>
      <input type='text' name='username' value = {n} onInput = {(event) => setn(event.target.value)}/>
      <button onClick = {handleClick}>Say Hello!</button>
      <h2 style={{...dis, ...font, ...color}}>Hello, {uname}!</h2>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Enter your name and click the button for a greeting!</h1>
      <Greeting />
    </div>
  );
}

export default App;
