import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ title, skills, icon: Icon, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay, type: "spring", bounce: 0.2 }}
            whileHover={{ y: -5 }}
            className="glass-card rounded-[2rem] p-8 h-full relative group overflow-hidden border border-white/5 hover:border-brand-500/30 transition-colors duration-500"
        >
            {/* Background glow effect on hover */}
            <div className="absolute -inset-20 bg-gradient-to-r from-brand-500/20 to-accent-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div className="flex items-center space-x-5 mb-8 relative z-10">
                <div className="p-4 bg-white/5 rounded-2xl text-brand-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-accent-500 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0)] group-hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]">
                    <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-display font-semibold text-white tracking-wide">{title}</h3>
            </div>

            <div className="flex flex-wrap gap-2.5 relative z-10">
                {skills.map((skill, idx) => (
                    <span
                        key={idx}
                        className="px-4 py-2 text-sm font-medium rounded-full bg-black/40 text-gray-300 border border-white/5 hover:border-brand-400 hover:text-white hover:bg-brand-500/10 transition-colors cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillCard;
