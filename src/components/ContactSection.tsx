
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, you would send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
      variant: "default",
    });
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-portfolio-blue" />,
      title: 'Email',
      value: 'riteshchopade5@gmail.com',
      link: 'riteshchopade5@gmail.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-portfolio-blue" />,
      title: 'Phone',
      value: '+91 9588655892',
      link: '+91 9588655892'
    },
    {
      icon: <MapPin className="h-6 w-6 text-portfolio-blue" />,
      title: 'Location',
      value: 'Shirpur',
    }
  ];

  return (
    <section id="contact" className="bg-portfolio-lightGray py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-portfolio-gray text-lg">
            Have a project in mind or want to discuss potential opportunities? 
            I'd love to hear from you! Send me a message and I'll respond as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="lg:col-span-2 bg-gradient-to-br from-portfolio-blue to-portfolio-darkBlue text-white p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-8">
                Fill out the form and I'll get back to you as soon as possible. You can also reach me directly using the information below.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    className="flex items-start hover:opacity-80 transition-opacity"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-white/10 p-3 rounded-full mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/70">{item.title}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 p-8">
            <h3 className="text-2xl font-bold text-portfolio-dark mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-portfolio-gray">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    required
                    className="border-portfolio-gray/30 focus:border-portfolio-blue"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-portfolio-gray">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="border-portfolio-gray/30 focus:border-portfolio-blue"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-portfolio-gray">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Project Inquiry"
                  required
                  className="border-portfolio-gray/30 focus:border-portfolio-blue"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-portfolio-gray">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project, requirements, and timeline..."
                  required
                  className="min-h-32 border-portfolio-gray/30 focus:border-portfolio-blue"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-portfolio-blue hover:bg-portfolio-darkBlue text-white py-6"
              >
                <Send className="mr-2 h-5 w-5" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
