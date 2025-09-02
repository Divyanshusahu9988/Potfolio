import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Download, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Content */}
        <div className={`space-y-8 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Divyanshu Sahu
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-300 font-light">
              Data Science & Computer Science Student
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 leading-relaxed">
              Building innovative solutions and exploring cutting-edge technologies
            </p>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/Divyanshusahu9988"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 glass-effect rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/divyanshu-sahu08/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 glass-effect rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/sahu12divyanshu/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 glass-effect rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 group-hover:text-pink-400 transition-colors" />
              Instagram
            </a>
            <a
              href="/dist/assets/resume.pdf"
              download="Divyanshu_Sahu_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className={`flex justify-center ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
          <div className="relative animate-float">
            <div className="w-80 h-80 rounded-full overflow-hidden glass-effect p-4 animate-glow">
              <img
                src="/dist/assets/photo.jpg"
                alt="Divyanshu Sahu"
                className="w-full h-full rounded-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </div>
    </section>
  );
};

export default Hero;