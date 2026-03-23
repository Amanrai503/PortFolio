import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="mt-auto relative z-10 border-t border-white/10 glass py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="flex space-x-8 mb-6">
                    <a href="https://github.com/Amanrai503" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-brand-500/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-110 transition-all duration-300 border border-white/5">
                        <span className="sr-only">GitHub</span>
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/amanrai503" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-[#0A66C2]/40 hover:shadow-[0_0_20px_rgba(10,102,194,0.4)] hover:scale-110 transition-all duration-300 border border-white/5">
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:amanrai9436@gmail.com" className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-accent-500/20 hover:shadow-[0_0_20px_rgba(192,38,211,0.3)] hover:scale-110 transition-all duration-300 border border-white/5">
                        <span className="sr-only">Email</span>
                        <Mail size={20} />
                    </a>
                </div>
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>
                <p className="text-center text-sm text-gray-500 font-light tracking-wide">
                    &copy; {new Date().getFullYear()} AMAN RAI.
                    <span className="block sm:inline sm:ml-2 mt-1 sm:mt-0 opacity-70">Engineered with React & Tailwind</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
