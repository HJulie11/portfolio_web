"use client"
import React, { useEffect, useState } from 'react'
import ThreeScene from "./components/ThreeScene";
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import { ScrollIndicator } from "./components/ScrollIndicator";
import Skills from "./components/Skills";
import ProjectCard from './components/ProjectCard';

const sections = [
  { id: 'startscene', name: 'Home' },
  { id: 'Skills', name: 'Skills' },
  { id: 'Projects', name: 'Projects' },
  { id: 'section4', name: 'Contact' }
]

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/HJulie11/Projects_Julie/contents"
        );
    
        if (!res.ok) {
          const errorBody = await res.text();
          console.error("GitHub API error:", res.status, errorBody);
          return;
        }
    
        const folders = await res.json();
    
        if (!Array.isArray(folders)) {
          console.error("Unexpected data format:", folders);
          return;
        }
    
        const projectFolders = folders.filter((item) => item.type === "dir");
    
        const projectData = await Promise.all(
          projectFolders.map(async (folder) => {
            try {
              return await (async () => {
                const readmeRes = await fetch(
                  `https://api.github.com/repos/HJulie11/Projects_Julie/contents/${folder.name}/README.md`
                );
      
                const readme = await readmeRes.json();
                const description = atob(readme.content || "");
      
                return {
                  id: Math.random(), // Generate a unique ID
                  name: folder.name,
                  description,
                  html_url: `https://github.com/HJulie11/Projects_Julie/tree/main/${folder.name}`, // Construct a GitHub URL
                };
              })();
            } catch (error) {
              console.error("Error fetching README for folder:", folder.name, error);
              return null;
            }
          }).filter(Boolean)
        );
    
        setProjects(projectData.filter((project): project is Project => project !== null));
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div id="root">
      <div className="w-full">
        {/* <div className="w-full bg-gradient-to-b absolute z-0"> */}
          <Header />
        {/* </div> */}
      </div>
      <div className="flex flex-row w-full h-full">
        <div className='h-full flex w-[20%] items-center justify-center'>
          <ScrollIndicator sections={sections} />
        </div>
        <div className="w-full h-full overflow-y-scroll scroll-smooth">
          <div className="w-full h-full" id="startscene">
            <StartScreen />
          </div>
          <div className="w-full h-full" id="Skills">
            <Skills />
          </div>
          {/* Projects cards goes here */}
          <div className='w-full h-full flex flex-col items-center justify-center' id="Projects">
            <h2 className='w-full text-2xl font-bold text-green-100 mb-10 items-start justify-center'>Projects</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'> 
              {projects.map((project) => (
                <div key={project.name} className="mb-6">
                  <ProjectCard
                    name={project.name}
                    description={project.description}
                    html_url={project.html_url}
                    homepage={project.homepage}
                  />
                </div>
              ))}
            </div>
            {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'> */}
          </div>
        </div>
      </div>
      {/* <ThreeScene /> */}
    </div>
  );
}
