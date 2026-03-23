import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, Download } from 'lucide-react';

const About = () => {
    return (
        <div className="w-full py-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-20"
            >
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight font-display drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">About <span className="text-gradient">Me</span></h1>
                <div className="w-24 h-1.5 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-card rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group"
                >
                    <div className="absolute -inset-20 bg-gradient-to-br from-brand-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <div className="flex items-center space-x-4 mb-10 relative z-10">
                        <div className="p-4 rounded-2xl bg-brand-500/10 text-brand-400 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                            <Briefcase size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-white font-display">Professional Bio</h2>
                    </div>
                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light relative z-10">
                        <p>
                            I am a driven Computer Science student with a strong passion for backend development and software engineering. I find joy in designing robust server-side architectures, building scalable APIs, and optimizing database queries.
                        </p>
                        <p>
                            My technical journey has equipped me with a diverse skill set spanning Java, Node.js, PHP, and databases like MySQL and MongoDB. I thrive in challenging environments where problem-solving and adaptability are key.
                        </p>
                        <div className="relative mt-8">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-500 to-accent-500 rounded-full"></div>
                            <p className="pl-6 py-2 text-gray-300 font-medium italic">
                                Currently, I am actively seeking backend development internship opportunities. I am eager to apply my academic knowledge to real-world applications and contribute meaningfully to an engineering team.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-10"
                        >
                            <a
                                href="/Cv_Aman.pdf"
                                download="Cv_Aman.pdf"
                                className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-xl text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-500 transition-all overflow-hidden w-full sm:w-auto"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-500/20 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                                <Download className="mr-2 relative z-10 text-brand-400 group-hover:text-white transition-colors" size={18} />
                                <span className="relative z-10 tracking-wider uppercase">Download Full CV</span>
                            </a>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="glass-card rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group"
                >
                    <div className="absolute -inset-20 bg-gradient-to-bl from-accent-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <div className="flex items-center space-x-4 mb-10 relative z-10">
                        <div className="p-4 rounded-2xl bg-accent-500/10 text-accent-400 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                            <GraduationCap size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-white font-display">Education</h2>
                    </div>

                    <div className="relative border-l-2 border-white/10 pl-8 pb-4 ml-4 relative z-10 group-hover:border-white/20 transition-colors">
                        <span className="absolute -left-[11px] top-1 px-1.5 py-1.5 rounded-full bg-black border-2 border-accent-500 shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                            <span className="block w-2 h-2 rounded-full bg-accent-400"></span>
                        </span>
                        <div className="mb-3 flex items-center text-xs font-bold tracking-[0.15em] text-accent-400 uppercase">
                            <Calendar size={14} className="mr-2" />
                            Present
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 font-display">Bachelor of Technology <br /><span className="text-gray-400 text-xl font-medium">Computer Science</span></h3>
                        <p className="text-lg font-medium text-brand-400 mb-6 flex items-center">
                            Lovely Professional University
                        </p>
                        <p className="text-gray-400 font-light leading-relaxed p-5 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                            Focusing on advanced algorithms, data structures, and software engineering principles. Engaging in academic projects to build a solid foundation in both frontend and backend development.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
