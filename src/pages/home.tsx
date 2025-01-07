import { GetServerSideProps } from "next";
import Head from "next/head";

import { CompletedChallenges } from "../components/completed-challenges";
import { Countdown } from "../components/countdown";
import { ExperienceBar } from "../components/experience-bar";
import { Profile } from "../components/profile";

import { ChallengeBox } from "../components/ChallengeBox";
import { ChallengesProvider } from "../contexts/ChallengesContexts";
import { CountdownProvider } from "../contexts/CountdownContexts";

//só a home page precisa do countdown e só alguns componentes dela precisam

interface HomeProps {
  username: string
  userImage: string
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>
      <div className="flex flex-col h-screen max-w-[1080px] mx-auto py-10 px-8">
        <Head>
          <title>Home | I like to move it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section className="flex-1 grid grid-cols-1 gap-24 content-center md:grid-cols-2">
            <div>
              <Profile username={props.username} userImage={props.userImage} />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

//so funciona no pages, manipular quais dados são passado da camada do next pra camada do frontend
// no método faz essa chamada no server node e antes da tela ser construída
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { username, userImage, level, currentExperience, challengesCompleted } = context.req.cookies;

  return {
    props: {
      username: username ?? '',
      userImage: userImage ?? '',
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0),

    },
  };
};
