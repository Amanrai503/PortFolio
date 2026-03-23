import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database as DatabaseIcon, LayoutTemplate, BrainCircuit } from 'lucide-react';
import SkillCard from '../components/ui/SkillCard';

const Skills = () => {
    const categories = [
        {
            title: "Languages",
            icon: Code2,
            skills: ["C++", "Java", "Kotlin", "C", "Python", "JavaScript"]
        },
        {
            title: "Frameworks",
            icon: LayoutTemplate,
            skills: ["HTML", "CSS", "Android Framework", "PyQt5"]
        },
        {
            title: "Tools & Platforms",
            icon: Server,
            skills: ["MySQL", "MongoDB", "Firebase", "Android Studio", "Power BI", "Git"]
        },
        {
            title: "Soft Skills",
            icon: BrainCircuit,
            skills: ["Analytical Problem-Solving", "Task Planning", "Rapid Learning"]
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

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto"
            >
                {categories.map((category, index) => (
                    <SkillCard
                        key={index}
                        title={category.title}
                        skills={category.skills}
                        icon={category.icon}
                        index={index}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
