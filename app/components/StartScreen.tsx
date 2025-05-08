import React from 'react'
import memoji from '@/public/memoji.png'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

const StartScreen = () => {
  return (
    <div className='flex flex-row items-center justify-center'>
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <div className='flex flex-row w-full h-full items-center justify-end'>
                <div className='flex flex-col w-[60%] h-full justify-center pl-5 pr-20 pt-5 pb-5'>
                    <p className='font-bold text-[50px]'>
                        Hi, I&apos;m Seojin!
                    </p>
                    <p className='text-[20px] text-gray-400 mt-5'>
                        I&apos;m a Final Year Computer Science student with a strong background in coding and passion for AI and Robotics. I am looking myself to become
                    </p>
                    <div className='text-[20px] text-green-100 font-bold mb-5'>
                        <Typewriter
                            onInit={(typewriter) => {
                                const phrases = [
                                'Software Engineer',
                                'Web Developer',
                                'Robotics Engineer',
                                'Researcher'
                                ];

                                const loop = () => {
                                phrases.forEach((phrase) => {
                                    typewriter
                                    .typeString(phrase)
                                    .pauseFor(20)
                                    .deleteAll();
                                });

                                typewriter.callFunction(loop); // loop again after finishing all phrases
                                };

                                loop();
                                typewriter.start();
                            }}
                        />
                    </div>
                </div>
                <div className='flex items-center justify-center profile-memoji bg-green-100 rounded-full w-[40%]'>
                    <div className='w-[40%] h-auto flex items-center justify-center'>
                        <Image
                            src={memoji}       
                            alt="Profile Memoji"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    // <div className='flex items-center justify-center profile-memoji rounded-full'>
    //     <img
    //         src={Memoji_figure}
    //         alt="Profile Memoji"
    //         width="70%"
    //     />
    //     {/* </div> */}
    // </div>
  )
}

export default StartScreen