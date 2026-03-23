import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ui/ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: "Event Dashboard",
            description: "A backend-driven web application for managing tasks and events with real-time deadline tracking and status management.",
            features: [
                "Task prioritization and assignment",
                "Visual deadline tracking",
                "Robust authentication and session system",
                "Secure database queries using prepared statements"
            ],
            techStack: ["PHP", "JavaScript", "Tailwind CSS", "MySQL"],
            githubLink: "https://github.com/Amanrai503/Event-Planing-Website"
        },
        {
            title: "Car Rental Website",
            description: "An interactive online car rental platform allowing users to browse available vehicles, apply dynamic filters, and seamlessly book their selection.",
            features: [
                "Dynamic real-time car listing presentation",
                "Secure booking and reservation functionality",
                "Advanced filtering system by make, model, and price",
                "Relational database integration for inventory management"
            ],
            techStack: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
            githubLink: "https://github.com/Amanrai503/CAR-RENTAL-"
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
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight font-display drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">Featured <span className="text-gradient">Projects</span></h1>
                <div className="w-24 h-1.5 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)] mb-8"></div>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                    A selection of my recent engineering work showcasing backend architecture, frontend integration, and structured database design.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                        delay={index * 0.2}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
