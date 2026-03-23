import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database as DatabaseIcon, LayoutTemplate, BrainCircuit } from 'lucide-react';
import SkillCard from '../components/ui/SkillCard';

const Skills = () => {
    const categories = [
        {
            title: "Languages",
            icon: Code2,
            skills: ["Java", "Python", "C++", "JavaScript", "C", "PHP"]
        },
        {
            title: "Backend",
            icon: Server,
            skills: ["NodeJS", "PHP", "Express.js", "REST APIs"]
        },
        {
            title: "Frontend",
            icon: LayoutTemplate,
            skills: ["HTML", "CSS", "Tailwind CSS", "React"]
        },
        {
            title: "Databases",
            icon: DatabaseIcon,
            skills: ["MySQL", "MongoDB", "SQL Design"]
        },
        {
            title: "Soft Skills",
            icon: BrainCircuit,
            skills: ["Problem Solving", "Teamwork", "Leadership", "Adaptability"]
        }
    ];

    return (
        <div className="w-full py-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-20"
            >
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight font-display drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">Technical <span className="text-gradient">Arsenal</span></h1>
                <div className="w-24 h-1.5 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)] mb-8"></div>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                    A comprehensive overview of my technical capabilities and engineering stack, combining solid foundations with modern tools.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                    <SkillCard
                        key={index}
                        title={category.title}
                        skills={category.skills}
                        icon={category.icon}
                        delay={index * 0.15}
                    />
                ))}
            </div>
        </div>
    );
};

export default Skills;
