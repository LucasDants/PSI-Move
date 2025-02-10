import Cookies from 'js-cookie';
import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from "../../challenges.json";
import { LevelUpModal } from "../components/level-up-modal";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: { challenge: string, xp: number, completedAt: string }[];
  activeChallenge: Challenge | null;
  experienceToNextLevel: number;
  isLevelUpModalOpen: boolean
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number
  currentExperience: number
  challengesCompleted: { challenge: string, xp: number, completedAt: string }[]
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level); // ?? n existir
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? []);
  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set("level", String(level))
    Cookies.set("currentExperience", String(currentExperience))
    Cookies.set("challengesCompleted", JSON.stringify(challengesCompleted))

  }, [level, currentExperience, challengesCompleted])

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true)
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex] as Challenge;
    setActiveChallenge(challenge);

    if (!navigator.userAgent.includes("Safari")) {
      new Audio("/notification.mp3").play()
    }

    if (Notification.permission === "granted") {
      new Notification("Novo desafio!", {
        body: `valendo ${challenge.amount}xp!`,
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount, description } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(prev => [...prev, { challenge: description, xp: amount, completedAt: new Date().toISOString() }]);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        isLevelUpModalOpen,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal
      }}
    >
      {children}
      <LevelUpModal />
    </ChallengesContext.Provider>
  );
}
