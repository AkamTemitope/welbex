import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [formattedTime, setFormattedTime] = useState("00:00:00");

  const updateTimer = () => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    setFormattedTime(formattedTime);

    if (seconds > 0) {
      setSeconds(seconds - 1);
    } else {
      clearTimeout(timerId);
    }
  };

  const startTimer = () => {
    clearTimeout(timerId);
    setSeconds(Number(inputValue));
  };

  const stopTimer = () => {
    clearTimeout(timerId);
    setSeconds(0);
    setFormattedTime("00:00:00");
  };

  useEffect(() => {
    if (seconds > 0) {
      const id = setTimeout(updateTimer, 1000);
      setTimerId(id);
    } else {
      clearTimeout(timerId);
      setFormattedTime("00:00:00");
    }
    return () => clearTimeout(timerId);
  }, [seconds]);

  return (
    <section id="timer">
      <div className="container">
        <div>
          <input
            placeholder="Seconds"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.replace(/\D/g, ""))}
          />

          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
        </div>

        <br />
        <br />

        <span>{formattedTime}</span>
      </div>
    </section>
  );
};

export default Timer;
