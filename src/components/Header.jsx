import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className='bg-blue-950  text-gray-200'>
           <div className='header-container flex justify-between items-center p-5 mx-auto'>
            <div className="header-logo">
               <h3 className='text-3xl font-bold'>Skill<span className='text-yellow-500'>Sphere</span></h3>
            </div>
            <div className='right-part gap-4 flex items-center'>
                <Link href="/">Home</Link>
                <Link href="/courses">Courses</Link>
                <Link href="/">My Profile</Link>
                <Button variant = "secondary" className="rounded-lg bg-blue-900 text-yellow-200">Login</Button>
                <Button variant = "primary" className="rounded-lg text-gray-200">Register</Button>
                
            </div>
           </div>
        </div>
    );
};

export default Header;