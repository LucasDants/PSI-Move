import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContexts";
import { CountdownContext } from "../contexts/CountdownContexts";
import { Button } from "./ui/button";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completeChallenge()
    resetCountdown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }

  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-6 py-8 bg-white shadow-sm rounded-md">
      {activeChallenge ? (
        <div className="h-full flex flex-col">
          <header className="text-primary font-semibold text-xl border-b-2 px-8 pb-6">Ganhe {activeChallenge.amount} xp</header>
          <main className="flex-1 flex flex-col items-center justify-center">
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong className="font-semibold text-4xl mt-6 mb-4">Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer className="grid grid-cols-2 gap-4">
            <Button
              className="h-12 bg-destructive"
              type="button"
              onClick={handleChallengeFailed}
            >
              Falhei
            </Button>
            <Button
              className="h-12 bg-green-500"
              type="button"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </Button>
          </footer>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <strong className="text-2xl font-medium">
            Inicie um ciclo para receber desafios a serem completados
          </strong>
          <p className="flex flex-col items-center max-w-[70%] mt-12 text-gray-500">
            <img className="mb-4" src="icons/level-up.svg" alt="Level up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
