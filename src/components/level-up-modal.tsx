
import Link from "next/link";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContexts";
import { Dialog, DialogClose, DialogContent, DialogFooter } from "./ui/dialog";

export function LevelUpModal() {
  const { level, isLevelUpModalOpen, closeLevelUpModal } = useContext(ChallengesContext)
  return (
    <Dialog open={isLevelUpModalOpen} onOpenChange={(open) => {
      if (!open) closeLevelUpModal()
    }}>
      <DialogClose />
      <DialogContent className="max-w-[25rem] px-0 pb-0">
        <div className="text-center relative px-12">
          <header className="text-primary text-[8.75rem] font-semibold bg-[url('/icons/levelup.svg')] bg-center bg-no-repeat bg-contain ">{level}</header>
          <strong className="text-4xl">Parabéns</strong>
          <p className="text-xl mt-1">Você alcançou um novo level.</p>
        </div>
        <DialogFooter>
          <Link
            className="w-full flex items-center justify-center h-20 text-[#2AA9E0] text-xl font-semibold border-t-2"
            target="__blank"
            href={`https://twitter.com/intent/tweet?text=Avancei para o nível ${level} no MoveIt. http://localhost:3000`}>
            Compartilhar no Twitter
            <img src="icons/twitter.svg" alt="twitter-icon" />
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
