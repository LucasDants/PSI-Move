import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContexts";

import { CountdownButton } from "./countdown-button";


export function Countdown() {
  const { minutes, seconds } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className="flex items-center font-semibold">
        <div className="flex flex-1 items-center justify-evenly text-center text-[8.5rem] bg-white rounded-md shadow-sm">
          <span className="flex-1 border-r-2">{minuteLeft}</span>
          <span className="flex-1">{minuteRight}</span>
        </div>
        <span className="font-[6.25rem] mx-2">:</span>
        <div className="flex flex-1 items-center justify-evenly text-center text-[8.5rem] bg-white rounded-md shadow-sm">
          <span className="flex-1 border-r-2"> {secondLeft}</span>
          <span className="flex-1">{secondRight}</span>
        </div>
      </div>
      <div>
        <CountdownButton />
      </div>
    </div>
  );
}
