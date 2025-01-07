/* eslint-disable @next/next/no-img-element */
import { X } from "lucide-react";
import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContexts";
import { Button } from "./ui/button";


export function CountdownButton() {
  const {
    totalTime,
    time,
    isActive,
    hasFinished,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);
  const progressBar = 100 - (time * 100 / totalTime);


  return (
    <>
      {hasFinished ? (
        <div className="relative">
          <Button disabled className="w-full mt-8 h-20 text-xl font-semibold bg-white text-black">
            Ciclo encerrado
            <img src="/icons/check-circle.svg" alt="check-circle-icon" />
          </Button>
          <div className="absolute w-full bottom-0 h-1 rounded-sm bg-green-500" />
        </div>
      ) : isActive ? (
        <div className="relative">
          <Button
            type="button"
            className="w-full mt-8 h-20 text-xl font-semibold bg-white text-black hover:text-white hover:bg-destructive"
            onClick={resetCountdown}
          >
            Abandonar ciclo
            <X className="w-[1.25rem] h-[1.25rem]" />
          </Button>
          <div className="absolute bottom-0 h-1 rounded-sm bg-green-500" style={{ width: `${progressBar}%` }} />
        </div>
      ) : (
        <Button
          type="button"
          className="w-full mt-8 h-20 text-xl font-semibold"
          onClick={startCountdown}
        >
          Iniciar um ciclo
          <img src="/icons/play-arrow.svg" alt="play-icon" />
        </Button>
      )}
    </>
  );
}
