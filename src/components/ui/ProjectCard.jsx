import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const ProjectCard = ({ title, description, features, techStack, githubLink, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay, type: "spring", bounce: 0.2 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="glass-card rounded-[2rem] overflow-hidden flex flex-col h-full group relative"
        >
            {/* Animated glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Subtle border gradient */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-500/30 rounded-[2rem] transition-colors duration-500 pointer-events-none"></div>

            <div className="p-8 sm:p-10 flex flex-col flex-grow relative z-10">
                <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-400 group-hover:to-accent-400 transition-all duration-300">
                    {title}
                </h3>
                <p className="text-gray-400 text-lg mb-8 flex-grow leading-relaxed font-light">{description}</p>

                <div className="mb-8">
                    <h4 className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-[0.2em]">Key Features</h4>
                    <ul className="space-y-3">
                        {features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 mr-3 flex-shrink-0 shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
                                <span className="leading-relaxed">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-auto pt-8 border-t border-white/10">
                    <div className="flex flex-wrap gap-2 mb-8">
                        {techStack.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/10 group-hover:border-brand-500/30 transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex">
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn relative inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all overflow-hidden border border-white/10 hover:border-brand-500/50 w-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-500/20 to-accent-500/20 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                            <Github size={18} className="mr-2 relative z-10" />
                            <span className="font-semibold relative z-10">View Source</span>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
