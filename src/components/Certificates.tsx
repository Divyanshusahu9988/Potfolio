import React, { useState, useEffect, useRef } from 'react';
import { Award, Calendar, Building } from 'lucide-react';

const Certificates: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const certificates = [
    {
      title: 'Internship Certificate',
      organization: 'Zeetron Networks Pvt. Ltd.',
      duration: 'June 16 – Aug 14, 2025',
      type: 'Internship Program',
      description: 'Completed comprehensive internship program focusing on network technologies and software development.',
      color: 'from-blue-400 to-cyan-400',
      link: 'https://drive.google.com/file/d/1GDy41xNAiKCoSP9-KhvhLPxMB0ypPQRf/view?usp=drivesdk'
    },
    {
      title: 'DSA with C Programming',
      organization: 'GIT Jaipur',
      duration: 'July 2024',
      type: 'Training Certificate',
      description: 'Intensive training program covering Data Structures and Algorithms using C Programming language.',
      color: 'from-green-400 to-emerald-400',
      link: 'https://drive.google.com/file/d/1GMI1DzdANrHj6k8J8D2sdRqEQpU7b6hY/view?usp=drivesdk'
    }
  ];

  return (
    <section ref={sectionRef} id="certificates" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Certificates & Training
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`glass-effect rounded-2xl p-8 cursor-pointer transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group relative overflow-hidden ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Certificate Icon */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${cert.color} bg-opacity-20 rounded-xl transition-transform duration-300 ${hoveredCard === index ? 'scale-110' : ''}`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                    <p className="text-cyan-400 font-medium">{cert.type}</p>
                  </div>
                </div>

                {/* Organization */}
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-5 h-5 text-gray-400" />
                  <span className="text-lg font-semibold text-white">{cert.organization}</span>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{cert.duration}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* View Certificate Button */}
                <div className="mb-6">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${cert.color} bg-opacity-20 hover:bg-opacity-30 text-white font-medium rounded-lg border border-opacity-30 border-white transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                  >
                    <Award className="w-4 h-4" />
                    View Certificate
                  </a>
                </div>

                {/* Verified Badge */}
                <div className="flex justify-between items-center">
                  <div className={`px-4 py-2 bg-gradient-to-r ${cert.color} bg-opacity-10 rounded-full border border-opacity-20 border-white`}>
                    <span className="text-sm font-medium text-white">Verified</span>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} bg-opacity-20 rounded-full flex items-center justify-center transition-transform duration-300 ${hoveredCard === index ? 'rotate-12' : ''}`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r ${cert.color} rounded-full blur-xl opacity-20 transition-opacity duration-500 ${hoveredCard === index ? 'opacity-40' : ''}`}></div>
            </div>
          ))}
        </div>

        {/* Achievement Summary */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="glass-effect rounded-2xl p-8 inline-block">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Award className="w-8 h-8 text-yellow-400 animate-pulse" />
              <h3 className="text-2xl font-bold text-white">Professional Development</h3>
              <Award className="w-8 h-8 text-yellow-400 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <p className="text-lg text-gray-300">
              Committed to <span className="text-cyan-400 font-semibold">continuous learning</span> through 
              internships and specialized training programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;