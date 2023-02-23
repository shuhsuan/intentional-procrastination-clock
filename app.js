function App() {
  const [secondsS, setSecondsS] = React.useState(5);
  const [minutesS, setMinutesS] = React.useState(0);
  const [secondsB, setSecondsB] = React.useState(0);
  const [minutesB, setMinutesB] = React.useState(5);
  const [status, setStatus] = React.useState("off");
  const [session, setSession] = React.useState("session");

  
    React.useEffect(() => {
      if (session == "session") {
      if (status == "on") {
        const count = setInterval(() => {
          setSecondsS((prevSecondsS) => prevSecondsS - 1);
        }, 1000);
  
        return () => clearInterval(count);
      }
    }
    else{
      if (status == "on") {
        const count = setInterval(() => {
          setSecondsB((prevSecondsB) => prevSecondsB - 1);
        }, 1000);

        return () => clearInterval(count);
      }
    }
    }, [status]);
  
    
  

  const handleClick = () => {
    if (status == "off") {
      setStatus("on");
    } else {
      setStatus("off");
    }
  };

  const addMinuteS = () => {
    setMinutesS((prevMinutesS) => prevMinutesS + 1);
  };
  const subtractMinuteS = () => {
    if (minutesS == 1) {
    } else {
      setMinutesS((prevMinutesS) => prevMinutesS - 1);
    }
  };

  const addMinuteB = () => {
    setMinutesB((prevMinutesB) => prevMinutesB + 1);
  };
  const subtractMinuteB = () => {
    if (minutesB == 1) {
    } else {
      setMinutesB((prevMinutesB) => prevMinutesB - 1);
    }
  };

  function checkZ() {
    if (secondsS == -1) {
      if (session == "session") {
        setMinutesS((prevMinutesS) => prevMinutesS - 1);
        setSecondsS(59);
      } else {
        setMinutesB((prevMinutesB) => prevMinutesB - 1);
        setSecondsB(59);
      }
    } else if (secondsS == 0 && minutesS == 0) {
      setSession("break");
    } else if (secondsB == 0 && minutesB == 0 && session == "break") {
      clearInterval(count);
    }
  }

  return (
    <div id="container" className="text-center">
      <h1>{minutesS + ":" + secondsS}</h1>
      <h1>{minutesB + ":" + secondsB}</h1>
      {checkZ()}
      <button onClick={handleClick}>Start/Stop</button>
      <div id="session">
        <button onClick={addMinuteS}>Session minute +</button>
        <button onClick={subtractMinuteS}>Session minute -</button>
      </div>
      <div id="break">
        <button onClick={addMinuteB}>Break minute +</button>
        <button onClick={subtractMinuteB}>Break minute -</button>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
