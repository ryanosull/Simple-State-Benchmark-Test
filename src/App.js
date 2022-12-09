import React, {useState} from "react";
import './App.css';
import Child from "./Child";

function App() {

  // let x = new Date()
  // console.log(x.getMilliseconds())

  const [endTime, setEndTime] = useState(0)

  let d = new Date()

  const startTime = d.getMilliseconds()

  // function handleParentClick() {
  //   // let d = new Date()
  //   startTime
  //   console.log(d.getMilliseconds())
  //   console.log('parent button clicked!')
  //   console.log(d.getMilliseconds())
  // };


  function handleParentClick() {    
    console.log(d.getMilliseconds())
    console.log('parent button clicked!')
    console.log(d.getMilliseconds())
  };


  // for (let i = 0; i < 100; i++ ) {
  //   console.log(handleParentClick())
  // }

  function handleChildClick() {
    console.log('child button clicked!')
  };

  function handleGrandchildClick () {
    console.log('grandchild button clicked!')
  };

  return (
    <div className="App" style={{backgroundColor: "#606869", height: "300px"}}  >
      <br/>
      <h1>Simple Prop and Event Benchmark Test</h1>
      <br/>
      <br/>
      <button onClick={handleParentClick} >Parent button</button>
      <br/>
      <br/>
      <Child handleChildClick={handleChildClick} handleGrandchildClick={handleGrandchildClick} />
      <br/>
    </div>
  );
}

export default App;
