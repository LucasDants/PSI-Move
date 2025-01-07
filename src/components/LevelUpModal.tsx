import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContexts";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)
  return (
    <div className="">
      <div className="">
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
      <a
        className=""
        target="__blank"
        href={`https://twitter.com/intent/tweet?text=Avancei para o nível 2 no MoveIt. http://localhost:3000`}>
        Compartilhar no Twitter
        <img src="icons/twitter.svg" alt="twitter-icon" />
      </a>
    </div>
  );
}
