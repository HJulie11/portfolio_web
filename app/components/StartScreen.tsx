import React from 'react'
import memoji from '@/public/memoji.png'
import Image from 'next/image'

const StartScreen = () => {
  return (
    <div className='flex flex-row h-full'>
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <div className='flex w-full h-full items-center justify-end'>
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