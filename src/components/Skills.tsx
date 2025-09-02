import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Users, Lightbulb } from 'lucide-react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['React', 'HTML5', 'CSS3', 'JavaScript'],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Database,
      title: 'Data & Backend',
      skills: ['Python', 'SQL', 'Data Analysis', 'Flask'],
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: Users,
      title: 'Soft Skills',
      skills: ['Team Leadership', 'Communication', 'Problem Solving', 'Project Management', 'Mentoring'],
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      skills: ['IoT Development', 'Mobile Apps', 'Hackathon Participation', 'Rapid Prototyping', 'Tech Research'],
      color: 'from-orange-400 to-red-400'
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`glass-effect rounded-2xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 group ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 bg-gradient-to-r ${category.color} bg-opacity-10 rounded-full text-sm font-medium text-white border border-opacity-20 border-white hover:scale-105 transition-transform duration-200`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;