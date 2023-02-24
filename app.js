function App() {
  const [secondsS, setSecondsS] = React.useState(0);
  const [minutesS, setMinutesS] = React.useState(25);
  const [secondsB, setSecondsB] = React.useState(0);
  const [minutesB, setMinutesB] = React.useState(5);
  const [status, setStatus] = React.useState("off");
  const [session, setSession] = React.useState("Session");
  const [displaySec, setDisplaySec] = React.useState(secondsS);
  const [displayMin, setDisplayMin] = React.useState(minutesS);

  React.useEffect(() => {
    if (status == "on") {
      if (session == "Session") {
        const count = setInterval(() => {
          setSecondsS((prevSecondsS) => prevSecondsS - 1);
        }, 1000);

        return () => clearInterval(count);
      } else {
        const count = setInterval(() => {
          setSecondsB((prevSecondsB) => prevSecondsB - 1);
        }, 1000);

        return () => clearInterval(count);
      }
    }
  }, [status, session]);

  React.useEffect(() => {
    if (session == "Session") {
      setDisplaySec(secondsS);

      setDisplayMin(minutesS);
    } else {
      setDisplaySec(secondsB);

      setDisplayMin(minutesB);
    }
  });

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
      setMinutesS((prevMinutesS) => prevMinutesS - 1);
      setSecondsS(59);
    } else if (secondsB == -1) {
      setMinutesB((prevMinutesB) => prevMinutesB - 1);
      setSecondsB(59);
    } else if (secondsS == 0 && minutesS == 0 && session == "Session") {
      setSession("Break");
    } else if (secondsB == 0 && minutesB == 0 && session == "Break") {
      clearInterval(count);
    }
  }

  const reset = () => {
    setMinutesB(5);
    setMinutesS(25);
    setSecondsS(0);
    setSecondsB(0);
    setStatus("off");
  }

  return (
    <div id="container" className="text-center">
      {checkZ()}
      <h1>{minutesS + ":" + secondsS}</h1>
      <h1>{minutesB + ":" + secondsB}</h1>
      <div id="time-left">{session}</div>
      <h1>{displayMin + ":" + displaySec}</h1>

      <button id="start_stop" onClick={handleClick}>
        Start/Stop
      </button>

      <div id="session">
        <div id="session-label">Session Length</div>
        <div id="session-length">25</div>
        <button id="session-increment" onClick={addMinuteS}>
          Session minute +
        </button>
        <button id="session-decrement" onClick={subtractMinuteS}>
          Session minute -
        </button>
      </div>

      <div id="break">
        <div is="break-label">Break Length</div>
        <div id="break-length">5</div>
        <button id="break-increment" onClick={addMinuteB}>
          Break minute +
        </button>
        <button id="break-decrement" onClick={subtractMinuteB}>
          Break minute -
        </button>
      </div>
      <br />
      <button id="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
