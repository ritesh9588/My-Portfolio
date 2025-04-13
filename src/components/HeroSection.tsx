
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Server, Database } from 'lucide-react';
import pic from '@/components/pic.jpeg'
const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-portfolio-lightGray"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">Ritesh Chopade</span>
            </h1>
            
            <p className="text-portfolio-gray text-lg sm:text-xl max-w-xl">
              Computer Engineering Student at R. C. Patel Institute of Technology, Shirpur
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white rounded-md py-6"
                asChild
              >
                <a href="#contact">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10 rounded-md py-6"
                asChild
              >
                <a href="#projects">
                  View Projects
                </a>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-lg shadow-2xl overflow-hidden animate-fade-in">
                <img 
                  src={pic} 
                  alt="Computer development workspace" 
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

export default HeroSection;
