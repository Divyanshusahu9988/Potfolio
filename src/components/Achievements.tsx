import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Zap, Star, Target } from 'lucide-react';

const Achievements: React.FC = () => {
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

  const achievements = [
    {
      icon: Trophy,
      title: 'Active Hackathon Participant',
      description: 'Participates in 4-5 hackathons every year in various organizations',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      icon: Zap,
      title: 'Innovation Enthusiast',
      description: 'Constantly exploring new technologies and pushing boundaries',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: Star,
      title: 'Tech Community Contributor',
      description: 'Active member in tech bootcamps and development communities',
      color: 'from-cyan-400 to-blue-400'
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Passionate about finding innovative solutions to complex challenges',
      color: 'from-green-400 to-emerald-400'
    }
  ];

  return (
    <section ref={sectionRef} id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`glass-effect rounded-2xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-r ${achievement.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 bg-gradient-to-r ${achievement.color} bg-opacity-20 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>

                {/* Animated Badge */}
                <div className="flex justify-end">
                  <div className={`px-4 py-2 bg-gradient-to-r ${achievement.color} bg-opacity-10 rounded-full border border-opacity-20 border-white animate-pulse`}>
                    <span className="text-sm font-medium text-white">Verified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="glass-effect rounded-2xl p-8 inline-block">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Trophy className="w-8 h-8 text-yellow-400 animate-bounce" />
              <h3 className="text-2xl font-bold text-white">Hackathon Journey</h3>
              <Trophy className="w-8 h-8 text-yellow-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
            </div>
            <p className="text-lg text-gray-300">
              Consistently participating in <span className="text-cyan-400 font-semibold">4-5 hackathons annually</span> across various organizations,
              demonstrating commitment to innovation and continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;