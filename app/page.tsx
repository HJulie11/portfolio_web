"use client"
import React, { useEffect, useState } from 'react'
// import ThreeScene from "./components/ThreeScene";
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
// import { ScrollIndicator } from "./components/ScrollIndicator";
import Skills from "./components/Skills";
import ProjectCard from './components/ProjectCard';
import customDescription from '@/customProject.json';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { headers } from 'next/headers';

// const sections = [
//   { id: 'startscene', name: 'Home' },
//   { id: 'Skills', name: 'Skills' },
//   { id: 'Projects', name: 'Projects' },
//   { id: 'Contact', name: 'Contact' }
// ]

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
          "https://api.github.com/repos/HJulie11/Projects_Julie/contents", {
          headers: {
            Authorization: `token ${process.env.GITHIB_TOKEN}`,
          }}
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
    
        // const projectFolders = folders.filter((item) => item.type === "dir");
        const whitelist = customDescription.map(p => p.name);
        const projectFolders = folders.filter((item) => item.type === "dir" && whitelist.includes(item.name)); 
    
        const projectData = await Promise.all(
          projectFolders.map(async (folder) => {
            try {
              const readmeRes = await fetch(
                `https://api.github.com/repos/HJulie11/Projects_Julie/contents/${folder.name}/README.md`
              );
        
              const readme = await readmeRes.json();
              const fallbackDescription = atob(readme.content || "");
        
              // Look up this folder in the custom description list
              const custom = customDescription.find(p => p.name === folder.name);
        
              return {
                id: Math.random(),
                name: custom?.display_name || folder.name,          // ← Custom display name
                description: custom?.description || fallbackDescription, // ← Custom description
                html_url: `https://github.com/HJulie11/Projects_Julie/tree/main/${folder.name}`,
              };
            } catch (error) {
              console.error("Error fetching README for folder:", folder.name, error);
              return null;
            }
          })
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
      <div className="flex flex-col w-full h-full overflow-y-scroll scroll-smooth snap-y snap-mandatory">
        <div className="w-full snap-start h-screen" id="startscene">
          <Header />
          <StartScreen />
        </div>
  
        <div className="w-full flex items-center" id="Skills">
          <Skills />
        </div>
  
        <div className="w-full snap-start h-screen flex flex-col items-center justify-center" id="Projects">
          <h2 className='w-full text-2xl font-bold text-green-100 mb-10'>Projects</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto'>
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
        </div>
  
        <div className="w-full snap-start h-screen flex flex-col items-center justify-center" id="Contact">
          <Contact />
        </div>
  
        <div className="w-full snap-start h-screen flex flex-col items-center justify-center">
          <Footer />
        </div>
      </div>
    </div>
  );  
}
