import React from "react";
import { Briefcase, Layers, Cpu, ExternalLink, Github, Monitor, Server, Database } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Flutter Flirt (OPC) Private Limited",
      period: "June 2025 - March 2026",
      description: [
        "Developed scalable and responsive web applications using React.js and Tailwind CSS.",
        "Integrated REST APIs using Axios and managed server state using TanStack Query.",
        "Built reusable UI components improving development efficiency and maintainability.",
        "Optimized application performance and ensured cross-browser compatibility.",
      ],
      skills: ["React.js", "Tailwind CSS", "Axios", "TanStack Query"],
    },
  ];

  const projects = [
    {
      title: "Nimma Kitchen",
      subtitle: "Multi-Panel Food Platform",
      description: "Frontend development for Admin and Cook panels of a multi-role food delivery platform. Implemented reusable API services and handled complex state management.",
      tech: ["React.js", "Tailwind CSS", "TanStack Query", "Axios"],
      icon: <Monitor className="text-purple-400" />,
      link: "#",
    },
    {
      title: "Yoga Services Platform",
      subtitle: "Live Booking & Payment System",
      description: "A comprehensive yoga services platform where users can explore various sessions, book appointments, and make secure payments. Features a smooth user journey.",
      tech: ["React.js", "Tailwind CSS", "Axios", "Vercel"],
      icon: <Database className="text-blue-400" />,
      link: "https://yoga-project-dun.vercel.app/",
    },
    {
      title: "College Management System",
      subtitle: "Multi-Role Web Application",
      description: "A comprehensive system with Admin, Teacher, Student, Parent, and Superadmin panels. Features real-time data visualization and skeleton loading.",
      tech: ["React.js", "Tailwind CSS", "TanStack Query", "Recharts"],
      icon: <Server className="text-pink-400" />,
      link: "#",
    },
    {
      title: "Career Recommendation System",
      subtitle: "ML-Based Suggestion Engine",
      description: "Predicts suitable career paths based on academic performance using Machine Learning models. Integrated with a Flask backend.",
      tech: ["Flask", "Machine Learning", "HTML/CSS", "Bootstrap"],
      icon: <Cpu className="text-emerald-400" />,
      link: "#",
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white" style={{ background: "radial-gradient(ellipse at 50% 50%, #0d0d1a 0%, #0a0a14 100%)", paddingTop: "100px" }}>
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 pb-24">
        
        {/* Page Header */}
        <div className="mb-20 text-center">
          <h2 className="text-sm uppercase tracking-[0.4em] text-pink-500 font-bold mb-4">Journey</h2>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Work & Innovation</h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            A track record of building performant web applications and solving complex problems with modern technology.
          </p>
        </div>

        {/* Work Experience Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
              <Briefcase className="text-purple-400" size={28} />
            </div>
            <h3 className="text-3xl font-bold tracking-tight">Professional Experience</h3>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative">
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-0 group-hover:opacity-10 transition duration-500" />
                
                <div className="relative bg-[#1a1a2e]/50 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl overflow-hidden">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">{exp.role}</h4>
                      <div className="flex items-center gap-2 text-gray-400 font-medium">
                        <span className="text-purple-400">@</span> {exp.company}
                      </div>
                    </div>
                    <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-gray-300">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-4 text-gray-400 leading-relaxed">
                        <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.skills.map(skill => (
                      <span key={skill} className="text-xs font-bold tracking-widest uppercase px-3 py-1 bg-purple-500/10 text-purple-300 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div>
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <Layers className="text-blue-400" size={28} />
              </div>
              <h3 className="text-3xl font-bold tracking-tight">Featured Projects</h3>
            </div>
            <a href="https://github.com" target="_blank" className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <span className="text-sm font-bold">VIEW ALL ON GITHUB</span>
              <Github size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group flex flex-col bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.08] transition-all hover:-translate-y-2">
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </div>
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <ExternalLink size={20} className="text-gray-500 group-hover:text-white transition-colors" />
                    </a>
                  )}
                </div>
                
                <h4 className="text-xl font-bold mb-1">{project.title}</h4>
                <p className="text-sm font-semibold text-purple-400 mb-4">{project.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold tracking-tighter px-2 py-1 bg-black/30 text-gray-400 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

