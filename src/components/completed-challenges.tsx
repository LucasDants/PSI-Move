import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContexts'

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext)

    return (
        <div className="flex items-center justify-between my-14 pb-4 border-b-2 font-medium">
            <span className='text-xl'>Desafios completos</span>
            <span className='text-2xl'>{String(challengesCompleted).padStart(2, "0")}</span>
        </div>
    )
}