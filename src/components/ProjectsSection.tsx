
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  category: string;
}

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Subtitle Generator using Python ',
      description: 'A Subtitle Generator in Python automatically creates subtitles from audio or video using speech recognition and timestamp alignment techniques.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      technologies: ['Python'],
      liveLink: '#',
      githubLink: '#',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Weather App ',
      description: 'A Weather App using React fetches real-time weather data from APIs and displays temperature, conditions, and forecasts with a user-friendly UI.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      technologies: ['React', 'Tailwind CSS', 'Weather API'],
      liveLink: '#',
      githubLink: '#',
      category: 'frontend'
    },
    
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="bg-portfolio-lightGray py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-portfolio-gray mb-4">{project.description}</p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-portfolio-lightGray text-portfolio-blue px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                 
                  
                  {project.githubLink && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 text-portfolio-gray border-portfolio-gray hover:bg-portfolio-gray/10"
                      asChild
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" /> Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
