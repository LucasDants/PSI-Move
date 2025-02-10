import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import { ChallengeHistory } from './challenge-history';


export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext)

    return (
        <>
            <div className="flex items-center justify-between my-14 pb-4 border-b-2 font-medium">
                <span className='text-xl'>Desafios completos</span>
                <span className='flex items-center justify-center gap-4 text-2xl'>
                    {String(challengesCompleted.length).padStart(2, "0")}
                    <ChallengeHistory />
                </span>
            </div >

        </>
    )
}