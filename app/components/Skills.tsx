import Image from 'next/image'
import React from 'react'

// logo figure import
import react_logo from '@/public/logos/react.png'
import aws_s3_logo from '@/public/logos/aws s3.svg'
import blender_logo from '@/public/logos/blender.png'
import cpp_logo from '@/public/logos/C++.svg.png'
import docker_logo from '@/public/logos/docker.png'
import figma_logo from '@/public/logos/figma.png'
import fusion_360 from '@/public/logos/fusion-360-product-design-extension-2023-simplified-badge-75x75.webp'
import git_logo from '@/public/logos/git_logo.png'
import html_css_js_logo from '@/public/logos/HTML-CSS-JS-Logo.png'
import java_logo from '@/public/logos/Java.png'
import mongodb_logo from '@/public/logos/mongodb.svg'
import mujoco_logo from '@/public/logos/mujoco.png'
import python_logo from '@/public/logos/Python.svg.png'
import pytorch_logo from '@/public/logos/pytorch.png'
import ros2_logo from '@/public/logos/ros2.png'
import vercel_logo from '@/public/logos/vercel.png'

const Skills = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <h2 className='w-full text-2xl font-bold text-green-100 mb-10 items-start justify-center'>Skills</h2>
        <div className='flex flex-row items-center justify-center mb-5'>
            <div className='flex flex-col items-center justify-center mr-5'>
                <Image
                    src = {mujoco_logo}
                    alt = "MuJoCo"
                    width={50}
                    height={50}

                />
                <p className='text-sm mt-5'>MuJoCo</p>
            </div>
            <div className='flex flex-col items-center justify-center mr-5'>
                <Image
                    src = {python_logo}
                    alt = "Python"
                    width={50}
                    height={50}
                />
                <p className='text-sm mt-5'>Python</p>
            </div>
            <div className='flex flex-col items-center justify-center mr-5'>
                <Image
                    src = {cpp_logo}
                    alt = "C++"
                    width={50}
                    height={50}
                />
                <p className='text-sm mt-5'>C++</p>
            </div>
            <div className='flex flex-col items-center justify-center mr-5'>
                <Image
                    src = {java_logo}
                    alt = "Java"
                    width={50}
                    height={50}
                />
                <p className='text-sm mt-5'>Java</p>
            </div>
            <div className='flex flex-col items-center justify-center mr-5'>
                <Image
                    src = {git_logo}
                    alt = "Git"
                    width={50}
                    height={50}
                />
                <p className='text-sm mt-5'>Git</p>
            </div>
            <div className='flex flex-col items-center justify-center mr-5'>
                <Image
                    src = {ros2_logo}
                    alt = "ROS2"
                    width={50}
                    height={50}
                />
                <p className='text-sm mt-5'>ROS2</p>
            </div>
            <div className='flex flex-col items-center justify-center mr-5'>
                <Image
                    src = {mongodb_logo}
                    alt = "MongoDB"
                    width={50}
                    height={50}
                />
                <p className='text-sm mt-5'>MongoDB</p>
            </div>
            <div className='flex flex-col items-center justify-center mr-5'>
                <Image
                    src = {docker_logo}
                    alt = "Docker"
                    width={50}
                    height={50}
                />
                <p className='text-sm mt-5'>Docker</p>
            </div>
        </div>
    </div>
  )
}

export default Skills