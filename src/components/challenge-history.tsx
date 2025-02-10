import { DialogTitle } from '@radix-ui/react-dialog';
import dayjs from "dayjs";
import { HistoryIcon } from 'lucide-react';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import { Button } from './ui/button';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from "./ui/dialog";
import { ScrollArea } from './ui/scroll-area';

export function ChallengeHistory() {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <Dialog >
      <DialogClose />
      <DialogTrigger>

        <Button size="icon">
          <HistoryIcon className='h-[1.5rem] w-[1.5rem]' />
        </Button>

      </DialogTrigger>
      <DialogContent className="max-w-[50%]">
        <DialogHeader>
          <DialogTitle className="font-semibold">Desafios Completos</DialogTitle>

        </DialogHeader>
        <ScrollArea className='h-[50vh]'>
          <div className='flex flex-1 flex-col gap-4'>
            {challengesCompleted.map((challenge, index) => (
              <div key={index} className='flex items-center justify-between px-4 py-2 bg-white rounded-md shadow-sm'>
                <div className='flex items-center gap-4'>
                  <div>
                    <strong className='font-semibold text-lg'>{challenge.challenge}</strong>
                    <p className='text-sm text-gray-500'>Parabéns! Você completou o desafio e ganhou {challenge.xp} xp em {dayjs(challenge.completedAt).format("DD/MM/YYYY HH:mm:ss")}.</p>
                  </div>
                </div>
                <span className='text-green-500 text-nowrap'>+{challenge.xp} xp</span>
              </div>
            ))}
          </div>

        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

