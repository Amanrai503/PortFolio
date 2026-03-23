import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ui/ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: "StrideSide – Fitness App",
            description: "An Android fitness tracking app that helps users monitor daily activity, track calories, and find walking partners with built-in safety features.",
            features: [
                "Firebase for authentication and cloud storage",
                "DataStore for local user preference management",
                "Built with Kotlin and Jetpack Compose for modern UI",
                "Interactive onboarding and seamless navigation"
            ],
            techStack: ["Kotlin", "Jetpack Compose", "Firebase", "Android Studio"],
            githubLink: "https://github.com/Amanrai503"
        },
        {
            title: "FortiFile – Secure File Manager",
            description: "A desktop application for secure file encryption, decryption, and intelligent file organization.",
            features: [
                "AES encryption using the Cryptography library",
                "Two-factor authentication (2FA) with TOTP",
                "Designed using scalable MVC architecture",
                "Modern dark-themed UI built with Python PyQt5"
            ],
            techStack: ["Python", "PyQt5", "AES Cryptography", "OOP"],
            githubLink: "https://github.com/Amanrai503"
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
                <div className="w-24 h-1.5 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] mb-8"></div>
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
