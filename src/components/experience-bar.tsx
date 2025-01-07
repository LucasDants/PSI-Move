import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContexts'
import { Progress } from './ui/progress'

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)
    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return (
        <header className="flex items-center w-full">
            <span>0 xp</span>
            <div className="flex-1 h-1 mx-2 relative">
                <Progress value={percentToNextLevel} max={100} />
                <span className="absolute top-3 -translate-x-2/4" style={{ left: `${percentToNextLevel}%` }}>{currentExperience} xp</span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}