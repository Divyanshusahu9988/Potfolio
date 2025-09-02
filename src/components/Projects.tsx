import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string;
  features: string[];
  githubLink?: string;
}

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      title: 'Hotel Management System',
      description: 'Complete hotel management solution with booking, customer management, and billing features.',
      tech: 'Python Tkinter GUI',
      features: ['Room Booking', 'Customer Database', 'Billing System', 'Report Generation'],
      githubLink: 'https://github.com/Divyanshusahu9988/Hotel-Management-System'
    },
    {
      title: 'Billing & Inventory System',
      description: 'Comprehensive billing and inventory management system with secure login functionality.',
      tech: 'Python Tkinter',
      features: ['User Authentication', 'Inventory Tracking', 'Automated Billing', 'Sales Reports'],
      githubLink: 'https://github.com/Divyanshusahu9988/Billing-and-Inventory-System'
    },
    {
      title: 'Glassmorphism Calculator',
      description: 'Modern calculator with stunning glassmorphism UI design and smooth animations.',
      tech: 'HTML, CSS, JS',
      features: ['Glass Effect UI', 'Responsive Design', 'Smooth Animations', 'Scientific Functions'],
      githubLink: 'https://github.com/Divyanshusahu9988/Glassmorphism-Calculator'
    },
    {
      title: 'Smart ChatBoard',
      description: 'Interactive chat application with real-time messaging and modern UI.',
      tech: 'HTML, CSS, JS',
      features: ['Real-time Chat', 'User Management', 'Message History', 'Responsive Design'],
      githubLink: 'https://github.com/Divyanshusahu9988/Smart-Chatbot'
    },
    {
      title: 'Digital Clock (Glassmorphism)',
      description: 'Beautiful digital clock with glassmorphism design and multiple time zones.',
      tech: 'HTML, CSS, JS',
      features: ['Multiple Timezones', 'Glassmorphism UI', 'Alarm Function', 'Dark/Light Mode'],
      githubLink: 'https://github.com/Divyanshusahu9988/Digital-Clock'
    },
    {
      title: 'Typing Master Web App',
      description: 'Interactive typing practice application with progress tracking and games.',
      tech: 'HTML, CSS, JS',
      features: ['Typing Tests', 'Progress Tracking', 'Speed Analytics', 'Custom Texts'],
      githubLink: 'https://github.com/Divyanshusahu9988/Typing-Master-Web-App'
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative h-80 perspective-1000 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCard === index ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front Side */}
                <div className="absolute inset-0 glass-effect rounded-2xl p-6 backface-hidden">
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                    <div className="mt-auto">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-400 to-purple-400 bg-opacity-20 rounded-full text-sm text-cyan-400 font-medium">
                        {project.tech}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 glass-effect rounded-2xl p-6 backface-hidden rotate-y-180">
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-bold text-white mb-4">Features</h3>
                    <ul className="space-y-2 mb-6 flex-grow">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-3 mt-auto">
                      {project.githubLink ? (
                        <a 
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:scale-105 transition-transform duration-200"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      ) : (
                        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:scale-105 transition-transform duration-200">
                          <Github className="w-4 h-4" />
                          Code
                        </button>
                      )}
                      <button className="flex items-center gap-2 px-4 py-2 glass-effect rounded-lg hover:scale-105 transition-transform duration-200">
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Projects;