import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen relative text-white selection:bg-brand-500/30 selection:text-brand-100">

            {/* Global Ambient Background */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-600/20 blur-[120px] rounded-full animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-accent-600/10 blur-[150px] rounded-full animate-blob" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-brand-900/40 blur-[150px] rounded-full animate-blob" style={{ animationDelay: '4s' }}></div>
                {/* Subtle noise overlay for texture */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }}></div>
            </div>

            <Navbar />
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 z-10">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
