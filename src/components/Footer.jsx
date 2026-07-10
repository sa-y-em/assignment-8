"use client"
import React from 'react';
import Link from 'next/link';
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

const Footer = () => {
    const year = new Date().getFullYear();

    const socialLinks = [
        { icon: FaTwitter, label: 'Twitter' },
        { icon: FaLinkedin, label: 'LinkedIn' },
        { icon: FaGithub,  label: 'GitHub' },
        { icon: FaYoutube,  label: 'YouTube' },
    ];

    return (
        <footer className="bg-blue-950 text-gray-300 pt-14 pb-6">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6">

                    {/* Brand + socials */}
                    <div className="max-w-sm">
                        <h3 className="text-2xl font-bold text-white">
                            Skill<span className="text-yellow-500">Sphere</span>
                        </h3>
                        <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                            The modern platform to learn in-demand skills from industry experts.
                            Build, grow, and get hired.
                        </p>
                        <div className="flex gap-4 mt-5">
                            {socialLinks.map(({ icon: Icon, label }) => (
                                
                                <span key={label}

                                className = "text-gray-400 hover:text-yellow-500 transition-colors" >

                               <Icon size={20} />
                               </span>
                               

                            
                        
              ))}
                    </div>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="text-sm font-semibold tracking-wide text-gray-100 mb-4">
                        LEGAL
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/terms" className="text-gray-400 hover:text-yellow-500 transition-colors">
                                Terms &amp; Conditions
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy" className="text-gray-400 hover:text-yellow-500 transition-colors">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-sm font-semibold tracking-wide text-gray-100 mb-4">
                        CONTACT
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2 text-gray-400">
                            <HiOutlineMail size={16} />
                            <p className="hover:text-yellow-500 transition-colors">
                                hello@skillsphere.io
                            </p>
                        </li>
                        <li className="flex items-center gap-2 text-gray-400">
                            <HiOutlinePhone size={16} />
                            <p className="hover:text-yellow-500 transition-colors">
                                +1 (800) 555-SKILL
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800 mt-10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
                <p>© {year} SkillSphere. All rights reserved.</p>
                
            </div>
        </div>
    </footer >
  );
};

export default Footer;