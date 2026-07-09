"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const NavLink = ({href,children,classNames}) => {
    const pathName = usePathname();
    const active = href === pathName;
    return (
        <div className=''>
            <Link href={href} className={`${active?"text-yellow-400  border rounded-2xl p-2 ":""} ${classNames}`}>{children}  </Link>
        </div>
    );
};

export default NavLink;