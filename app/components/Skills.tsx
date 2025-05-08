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
    <div className='w-full h-screen flex flex-col items-center'>
        <h2 className='w-full text-2xl font-bold text-green-100 mb-10 items-start justify-center'>Skills</h2>
        <div className='flex flex-row items-center justify-center mb-5'>
            <div className='flex flex-col items-center justify-center mr-5'>
                <Image
                    src = {mujoco_logo}
                    alt = "MuJoCo"
                    height={50}

                />
                <p className='text-sm mt-5'>MuJoCo</p>
            </div>
            <div className='flex flex-col items-center justify-center mr-5'>
                <Image
                    src = {python_logo}
                    alt = "Python"
                    height={50}
                />
                <p className='text-sm mt-5'>Python</p>
            </div>
            <div className='flex flex-col items-center justify-center mr-5'>
                <Image
                    src = {cpp_logo}
                    alt = "C++"
                    height={50}
                />
                <p className='text-sm mt-5'>C++</p>
            </div>
            <div className='flex flex-col items-center justify-center mr-5'>
                <Image
                    src = {java_logo}
                    alt = "Java"
                    height={50}
                />
                <p className='text-sm mt-5'>Java</p>
            </div>
            <div className='flex flex-col items-center justify-center mr-5'>
                <Image
                    src = {ros2_logo}
                    alt = "ROS2"
                    height={50}
                />
                <p className='text-sm mt-5'>ROS2</p>
            </div>
            <div className='flex flex-col items-center justify-center mr-5'>
                <Image
                    src = {pytorch_logo}
                    alt = "PyTorch"
                    height={50}
                />
                <p className='text-sm mt-5'>PyTorch</p>
            </div>
            <div className='flex flex-col items-center justify-center mr-5'>
                <Image
                    src = {react_logo}
                    alt = "React"
                    height={50}
                />
                <p className='text-sm mt-5'>React</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <Image
                    src = {html_css_js_logo}
                    alt = "html/css/js"
                    height={50}
                />
                <p className='text-sm mt-5'>Web Dev</p>
            </div>
        </div>
        <div className='flex flex-row items-center justify-center mb-5'>
            <div className='flex flex-col items-center justify-center mr-5'>
                <Image
                    src = {git_logo}
                    alt = "Git"
                    height={50}
                />
                <p className='text-sm mt-5'>Git</p>
            </div>
            <div className='flex flex-col items-center justify-center mr-5'>
                <Image
                    src = {mongodb_logo}
                    alt = "MongoDB"
                    height={50}
                />
                <p className='text-sm mt-5'>MongoDB</p>
            </div>
            <div className='flex flex-col items-center justify-center mr-5'>
                <Image
                    src = {docker_logo}
                    alt = "Docker"
                    height={50}
                />
                <p className='text-sm mt-5'>Docker</p>
            </div>
            <div className='flex flex-col items-center justify-center mr-5'>
                <Image
                    src = {aws_s3_logo}
                    alt = "AWS S3"
                    height={50}
                />
                <p className='text-sm mt-5'>AWS S3</p>
            </div>
            <div className='flex flex-col items-center justify-center mr-5'>
                <Image
                    src = {blender_logo}
                    alt = "Blender"
                    height={50}
                />
                <p className='text-sm mt-5'>Blender</p>
            </div>
            <div className='flex flex-col items-center justify-center mr-5'>
                <Image
                    src = {fusion_360}
                    alt = "Fusion 360"
                    height={50}
                />
                <p className='text-sm mt-5'>Fusion 360</p>
            </div>
            <div className='flex flex-col items-center justify-center mr-5'>
                <Image
                    src = {figma_logo}
                    alt = "Figma"
                    height={50}
                />
                <p className='text-sm mt-5'>Figma</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <Image
                    src = {vercel_logo}
                    alt = "Vercel"
                    height={50}
                />
                <p className='text-sm mt-5'>Vercel</p>
            </div> 
        </div>
    </div>
  )
}

export default Skills