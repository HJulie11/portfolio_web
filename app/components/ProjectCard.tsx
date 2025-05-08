import React from 'react'

interface ProjectCardProps {
  name: string
  description: string
  html_url: string
  homepage?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, html_url, homepage }) => {
  return (
    <a
      href={html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <div className="relative group p-4 h-full flex flex-col transition duration-300 hover:shadow-xl overflow-hidden">
        {/* Animated top border */}
        <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-green-100 transition-all duration-500 ease-out" />

        {/* Animated bottom border */}
        <div className="absolute bottom-0 right-0 w-0 group-hover:w-full h-[2px] bg-green-100 transition-all duration-500 ease-out" />

        {/* Dissolve effect */}
        <div className="transition-opacity duration-500 group-hover:opacity-80">
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p className="text-gray-600 mb-4">{description || 'No description provided.'}</p>
          {homepage && (
            <div className="flex space-x-4">
              <a href={homepage} target="_blank" className="text-green-600 underline" onClick={(e) => e.stopPropagation()}>
                Live Demo
              </a>
            </div>
          )}
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
