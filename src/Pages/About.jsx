import React from "react";
import { GraduationCap, Code, Rocket, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Techno Bengal Institute of Technology",
      year: "2025",
      result: "CGPA: 8.38",
      icon: <GraduationCap size={24} className="text-purple-400" />,
    },
    {
      degree: "Class XII (WBCHSE)",
      institution: "Ballygunge Govt. High School",
      year: "2020",
      result: "Percentage: 84.8%",
      icon: <BookOpen size={24} className="text-blue-400" />,
    },
    {
      degree: "Class X (WBBSE)",
      institution: "Ballygunge Govt. High School",
      year: "2018",
      result: "Percentage: 90.71%",
      icon: <Award size={24} className="text-pink-400" />,
    },
  ];

  const skills = {
    "Web Development": ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "TanStack Query", "API Integration"],
    "Programming Languages": ["Java", "JavaScript"],
    "Core Skills": ["Data Structures & Algorithms", "Debugging", "Code Optimization", "Problem Solving", "Responsive Design", "SQL"],
    "Tools": ["Git/GitHub", "Figma", "VS Code", "Postman"],
  };

  const certifications = [
    { name: "Virtual Internship Program in Frontend Development", issuer: "CodeAlpha" },
    { name: "Web Design Course with HTML, CSS and WordPress", issuer: "Udemy" },
    { name: "SQL (Basic) Certification", issuer: "HackerRank" },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white" style={{ background: "radial-gradient(ellipse at 50% 50%, #1a0a2e 0%, #0d0d1a 70%, #0a0a14 100%)", paddingTop: "100px" }}>
      
      {/* Background blobs */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 pb-20">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-purple-400 font-bold mb-4">About Me</h2>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Frontend Developer <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Driven by Innovation.
            </span>
          </h1>
          <p className="max-w-3xl text-gray-400 text-lg leading-relaxed border-l-2 border-purple-500/50 pl-6 py-2">
            I am a passionate Frontend Developer specialized in React.js. I focus on building scalable, 
            high-performance web applications with a keen eye for clean design and seamless user experience. 
            My technical foundation is built on modern web standards and state management tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-purple-400" size={28} />
              <h3 className="text-2xl font-bold tracking-tight">Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l border-white/10 group">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-[#0d0d1a] border border-purple-400/50 flex items-center justify-center group-hover:border-purple-400 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all">
                    <span className="text-sm text-purple-400 font-medium mb-1 inline-block">{edu.year}</span>
                    <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                    <p className="text-gray-400 text-sm mb-2">{edu.institution}</p>
                    <p className="text-sm font-semibold text-pink-400">{edu.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Code className="text-blue-400" size={28} />
              <h3 className="text-2xl font-bold tracking-tight">Technical Arsenal</h3>
            </div>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <h4 className="text-sm uppercase tracking-widest text-blue-400 font-bold mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-blue-400/50 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                < Award className="text-pink-400" size={24} />
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-pink-500" />
                    <div>
                      <p className="text-sm font-medium">{cert.name}</p>
                      <p className="text-[12px] text-gray-400">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-24 p-8 md:p-12 rounded-[2rem] bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-white/10 text-center backdrop-blur-md">
          <Rocket className="mx-auto mb-6 text-purple-400 animate-bounce" size={40} />
          <h3 className="text-3xl font-bold mb-4">Let's build something amazing together</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full transition-all transform hover:scale-105"
          >
            Get In Touch
          </Link>

        </div>
      </div>
    </div>
  );
};

export default About;
