import React, { useState, useEffect, useRef } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        <div className={`glass-effect rounded-2xl p-8 lg:p-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="space-y-6 text-lg leading-relaxed text-gray-300">
            <p>
              Hello! I'm <span className="text-cyan-400 font-semibold">Divyanshu Sahu</span>, a passionate Computer Science student from the Global Institute of Technology, Jaipur.
            </p>
            
            <p>
              Outside of the classroom, I'm actively involved in hackathons and bootcamps, constantly experimenting with new technologies and pushing the boundaries of what's possible. I thrive on problem-solving and embracing new challenges in the ever-evolving tech landscape.
            </p>
            
            <p>
              My journey in technology is driven by curiosity and a desire to create meaningful impact. I love exploring the intersection of <span className="text-purple-400 font-semibold">DevOps</span>, <span className="text-purple-400 font-semibold">software development</span>, and emerging technologies, always seeking innovative solutions to complex problems.
            </p>
            
            <p>
              My goal is to pursue a career in <span className="text-cyan-400 font-semibold">software engineering</span> and make impactful contributions to the tech industry while continuously learning and growing.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-xl opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

export default About;