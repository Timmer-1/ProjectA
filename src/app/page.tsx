'use client'

import React from 'react';
import { Shield, Zap, Globe } from 'lucide-react';
import SpotlightCard from './ui/spotlightcard';

export default function Home() {
    return (
        <div className="min-h-screen text-white relative overflow-hidden">
            {/* Complex Background */}
            <div className="fixed inset-0 bg-[#0A1921]"> {/* Dark teal base color */}
                {/* Primary grid - larger squares */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
                  linear-gradient(to right, rgb(22, 78, 99) 1px, transparent 1px),
                  linear-gradient(to bottom, rgb(22, 78, 99) 1px, transparent 1px)
                `,
                        backgroundSize: '100px 100px'
                    }}
                />

                {/* Secondary grid - smaller squares */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
                  linear-gradient(to right, rgb(22, 78, 99) 1px, transparent 1px),
                  linear-gradient(to bottom, rgb(22, 78, 99) 1px, transparent 1px)
                `,
                        backgroundSize: '20px 20px'
                    }}
                />

                {/* Radial gradient overlay */}
                <div
                    className="absolute inset-0 opacity-80"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(10, 25, 33, 0) 0%, rgba(10, 25, 33, 0.8) 50%, #0A1921 100%)'
                    }}
                />
            </div>

            {/* Content Container */}
            <div className="relative">
                {/* Navigation */}
                <nav className="flex justify-between items-center p-6">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
                        ProjectA
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                        <a href="#products" className="hover:text-blue-400 transition-colors">Products</a>
                        <a href="#resources" className="hover:text-blue-400 transition-colors">Resources</a>
                        <a href="#support" className="hover:text-blue-400 transition-colors">Support</a>
                    </div>
                    <div className="space-x-4">
                        <button className="px-4 py-2 hover:text-blue-400 transition-colors">Sign In</button>
                        <button className="bg-gradient-to-r from-blue-500 to-teal-400 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                            Sign Up
                        </button>
                    </div>
                </nav>

                {/* Hero Section */}
                <main className="max-w-6xl mx-auto px-4 py-20 text-center">
                    <div className="bg-gradient-to-r from-blue-500/20 to-teal-500/20 text-sm px-6 py-2 rounded-full mb-8 inline-block backdrop-blur-sm">
                        🚀 Trusted by Over 1 Million Users Worldwide
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="text-white">Smart Planning</span>
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-blue-500 text-transparent bg-clip-text">
                            Made Simple
                        </span>
                    </h1>

                    <p className="text-slate-300 max-w-2xl mx-auto mb-12 text-lg">
                        Stay organized and connected with ease. Share tasks, set reminders, track locations, and split expenses—all in one seamless app for families, friends, and roommates.
                    </p>

                    <div className="flex justify-center gap-4">
                        <button className="bg-gradient-to-r from-blue-500 to-teal-400 px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium">
                            Start Now
                        </button>
                        <button className="border border-slate-600 px-6 py-3 rounded-lg hover:border-slate-400 font-medium backdrop-blur-sm bg-slate-800/30">
                            Explore Zenly
                        </button>
                    </div>
                </main>

                {/* Features Grid */}
                <div className="max-w-6xl mx-auto px-2 py-20 grid md:grid-cols-3 gap-8">
                    <SpotlightCard className="p-6 rounded-xl " custom-spotlight-card spotlightColor="rgba(0, 229, 255, 0.2)">
                        <Shield className="w-12 h-12 text-blue-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Secure Transfer</h3>
                        <p className="text-slate-300">
                            Ensure your funds reach their destination instantly, with top-notch security
                            and real-time tracking.
                        </p>
                    </SpotlightCard>

                    <SpotlightCard className="p-6 rounded-xl " custom-spotlight-card spotlightColor="rgba(0, 229, 255, 0.2)">
                        <Zap className="w-12 h-12 text-blue-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                        <p className="text-slate-300">
                            Enjoy a streamlined financial experience, from business transactions
                            to personal finance management.
                        </p>
                    </SpotlightCard>

                    <SpotlightCard className="p-6 rounded-xl " custom-spotlight-card spotlightColor="rgba(0, 229, 255, 0.2)">
                        <Globe className="w-12 h-12 text-blue-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Multi-Currency Support</h3>
                        <p className="text-slate-300">
                            Effortlessly transact in multiple currencies. Simplified international
                            payments for global reach.
                        </p>
                    </SpotlightCard>


                </div>
            </div>
        </div>
    );
};