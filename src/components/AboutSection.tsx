
import React from 'react';
import { Zap, Code, Server, Layout, Database, Shield } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { 
      icon: <Code className="h-8 w-8 text-portfolio-blue" />, 
      title: 'Frontend Development', 
      description: 'Building responsive and interactive user interfaces with modern frameworks like React, Vue, and Angular.'
    },
    { 
      icon: <Layout className="h-8 w-8 text-portfolio-blue" />, 
      title: 'UI/UX Design', 
      description: 'Designing intuitive user experiences and attractive interfaces that engage users.'
    },
    { 
      icon: <Database className="h-8 w-8 text-portfolio-blue" />, 
      title: 'Database Management', 
      description: 'Working with various database systems including SQL, NoSQL, and GraphQL for efficient data handling.'
    },
  ];

  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-portfolio-gray text-lg">
          I'm a passionate Computer Engineering student pursuing my B.TECH. degree from R. C. Patel Institute of Technology.

My journey as a student started from my school in Malkapur.

When I'm not learning, you can find me hiking, reading tech blogs, or experimenting with new technologies. I'm always eager to learn and take on new challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-portfolio-lightGray p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-sm">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-portfolio-gray">{skill.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-portfolio-blue to-portfolio-accent p-8 md:p-12 rounded-lg text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">My Development Philosophy</h3>
              <p className="mb-6">
                I believe in creating clean, maintainable code that solves real problems. Every project
                begins with understanding the specific needs and goals, followed by careful planning and
                implementation using the most appropriate technologies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> User-centered design approach
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Performance-optimized solutions
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Secure and scalable architecture
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Continuous learning and improvement
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="rounded-lg shadow-xl overflow-hidden max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Person coding on laptop" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
