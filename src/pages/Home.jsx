import React from 'react';

import { motion } from 'framer-motion';
import { ArrowRight, Server, TerminalSquare, Download } from 'lucide-react';

const Home = () => {
    return (
        <div className="w-full flex-grow flex flex-col justify-center min-h-[70vh] relative">
            <div className="max-w-4xl relative z-10 mx-auto text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium text-sm mb-10 shadow-[0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-md"
                >
                    <span className="relative flex h-3 w-3 mr-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500 shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
                    </span>
                    <span className="tracking-wide">Actively Looking for Internships</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-[1.05] font-display"
                >
                    Hi, I'm <br className="hidden md:block" />
                    <span className="text-gradient drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">Aman Rai</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col md:flex-row md:items-center justify-center md:justify-start text-xl md:text-2xl font-medium text-gray-400 mb-10 gap-4 md:gap-6"
                >
                    <div className="flex items-center justify-center md:justify-start group">
                        <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-400 mr-3 group-hover:bg-brand-500 group-hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                            <Server size={24} />
                        </div>
                        Software Developer
                    </div>
                    <span className="hidden md:inline text-white/20">|</span>
                    <div className="flex items-center justify-center md:justify-start group">
                        <div className="p-2.5 rounded-xl bg-accent-500/10 text-accent-400 mr-3 group-hover:bg-accent-500 group-hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                            <TerminalSquare size={24} />
                        </div>
                        Computer Science Student
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 mb-14 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light"
                >
                    I am a Computer Science student at <strong className="text-gray-200 font-medium">Lovely Professional University</strong> passionate about Android App Development, Python, and Machine Learning. I enjoy engineering innovative solutions and developing scalable systems.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-wrap justify-center md:justify-start gap-6"
                >
                    <a
                        href="#projects"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl text-white bg-brand-600 hover:bg-brand-500 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                        <span className="relative z-10">View Projects</span>
                        <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform relative z-10" size={20} />
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl text-white glass hover:bg-white/10 border border-white/20 hover:border-brand-500 transition-all"
                    >
                        Contact Me
                    </a>
                    <a
                        href="/Cv_Aman.pdf"
                        download="Cv_Aman.pdf"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-500 transition-all overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-500/20 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                        <span className="relative z-10">Resume</span>
                        <Download className="ml-3 relative z-10" size={20} />
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
