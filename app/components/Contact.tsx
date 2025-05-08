import React from 'react'
import linkedin_logo from '@/public/logos/linkedin-logo-2013-1.svg'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
            <p className='font-bold text-[50px] text-green-100'>
            Contact
            </p>
            <p className='text-sm text-gray-400 mt-5'>
            Feel free to reach out to me via email or LinkedIn!
            </p>
            <div className='flex flex-row items-center justify-center mt-5'>
                <a href="mailto:hseojin0711@gmail.com" className='flex text-[50px] text-gray-400 items-center justify-center'>
                    📧<span className='flex text-[20px] text-gray-400 ml-5 items-center justify-center'>hseojin0711@gmail.com</span>
                </a>
                <div className='w-[20%]'></div>
                <a href='https://www.linkedin.com/in/julie-hong-b0703722b/' target='_blank' rel='noopener noreferrer' className='flex w-[20%] text-[50px] text-gray-400 items-center justify-center'>
                    <Image
                        src={linkedin_logo}
                        alt="LinkedIn"
                        layout="intrinsic"
                    />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact