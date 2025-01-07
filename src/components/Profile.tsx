/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface ProfileProps {
    username: string;
    userImage: string;
}

export function Profile(props: ProfileProps) {
    const { level } = useContext(ChallengesContext)
    return (
        <div className="flex items-center">
            <Avatar className='w-20 h-20'>
                <AvatarImage src={props.userImage} />
                <AvatarFallback>{props.username[0]}</AvatarFallback>
            </Avatar>
            <div className='ml-6'>
                <strong className='text-2xl font-semibold'>{props.username}</strong>
                <p className='flex text-md mt-2'>
                    <img className='mr-2' src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}