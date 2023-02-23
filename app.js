function App() {
  const [seconds, setSeconds] = React.useState(5);
  const [minutes, setMinutes] = React.useState(1);
  const [toggle, setToggle] = React.useState(true);
  //React.useEffect(() => {
  //const count =
  //}, []);

 const handleClick=()=>{
setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
}

const addMinute=()=>{
    setMinutes((prevMinutes)=>prevMinutes+1)
}
const subtractMinute=()=>{
    setMinutes((prevMinutes)=>prevMinutes-1)
}
const addSecond=()=>{
    setSeconds((prevSeconds)=>prevSeconds+1)
}
const subtractSecond=()=>{
    setSeconds((prevSeconds)=>prevSeconds-1)
}

  function checkZ() {
    if (seconds == -1) {
      setMinutes((prevMinutes) => prevMinutes - 1);
      setSeconds(59);
    } else if (seconds == 0 && minutes == 0) {
      clearInterval(count);
    }
  }

  return (
    <div id="container" className="text-center">
      <h1>{minutes + ":" + seconds}</h1>
      {checkZ()}
      <button className="btn btn-primary" onClick={handleClick}>
        On/Off
      </button>
      <button onClick={addMinute}>Minute +</button>
      <button onClick={subtractMinute}>Minute -</button>
      <button onClick={addSecond}>Second +</button>
      <button onClick={addSecond}>Second -</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
