import React from "react";
import { Send, Mail, User, MessageCircle, Rocket, Laptop, Code } from "lucide-react";

const Contact = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white" style={{ background: "radial-gradient(circle at 50% 50%, #1a0a2e 0%, #0d0d1a 70%, #0a0a14 100%)", paddingTop: "100px" }}>
      
      {/* 3D Animated "Stickers" */}
      <div className="absolute top-[20%] left-[10%] opacity-20 md:opacity-100 animate-bounce pointer-events-none" style={{ animationDuration: '3s' }}>
        <div className="relative p-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-[0_20px_50px_rgba(168,85,247,0.4)] border-2 border-white/20 transform -rotate-12">
           <Rocket size={48} className="text-white drop-shadow-lg" />
           <div className="absolute -bottom-2 -right-2 bg-white text-purple-600 text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">SHIP IT!</div>
        </div>
      </div>

      <div className="absolute bottom-[10%] right-[10%] opacity-20 md:opacity-100 animate-pulse pointer-events-none" style={{ animationDuration: '4s' }}>
        <div className="relative p-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl shadow-[0_20px_50px_rgba(6,182,212,0.4)] border-2 border-white/20 transform rotate-6">
           <Laptop size={48} className="text-white drop-shadow-lg" />
           <div className="absolute -top-2 -left-2 bg-white text-blue-600 text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">BUILDING...</div>
        </div>
      </div>

      <div className="absolute top-[60%] left-[5%] opacity-20 md:opacity-100 animate-bounce pointer-events-none" style={{ animationDuration: '5s' }}>
        <div className="relative p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-[0_15px_30px_rgba(16,185,129,0.3)] border-2 border-white/20 transform -rotate-6">
           <Code size={32} className="text-white drop-shadow-lg" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Have a project in mind or just want to chat? Drop a message below and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form Container */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          {/* Subtle glow behind form */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-pink-600/20 rounded-full blur-[80px] pointer-events-none" />

          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 flex items-center gap-2">
                  <User size={16} className="text-purple-400" /> FULL NAME
                </label>
                <input 
                  type="text" 
                  placeholder="Gaurav Sarkar"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10 transition-all placeholder:text-gray-600"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 flex items-center gap-2">
                  <Mail size={16} className="text-blue-400" /> EMAIL ADDRESS
                </label>
                <input 
                  type="email" 
                  placeholder="gaurav@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 flex items-center gap-2">
                <MessageCircle size={16} className="text-pink-400" /> SUBJECT
              </label>
              <input 
                type="text" 
                placeholder="Project Collaboration"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/10 transition-all placeholder:text-gray-600"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400">MESSAGE</label>
              <textarea 
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10 transition-all placeholder:text-gray-600 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-black text-lg rounded-2xl shadow-xl shadow-purple-900/20 transform transition-all active:scale-[0.98] flex items-center justify-center gap-3 overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                SEND MESSAGE <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </form>
        </div>

        {/* Footer info in contact */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Available for freelance projects
          </div>
          <a 
            href="mailto:gauravsarkar2002@gmail.com" 
            className="flex items-center gap-2 hover:text-purple-400 transition-colors"
          >
            <Mail size={14} />
            gauravsarkar2002@gmail.com
          </a>

        </div>
      </div>
    </div>
  );
};

export default Contact;
