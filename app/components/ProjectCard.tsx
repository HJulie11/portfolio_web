import React from 'react'

interface ProjectCardProps {
  name: string
  description: string
  html_url: string
  homepage?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, html_url, homepage }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-4">{description || 'No description provided.'}</p>
      <div className="flex space-x-4">
        <a href={html_url} target="_blank" className="text-blue-600 underline">
          GitHub
        </a>
        {homepage && (
          <a href={homepage} target="_blank" className="text-green-600 underline">
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
