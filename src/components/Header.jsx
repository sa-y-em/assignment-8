"use client"
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import { authClient } from "@/lib/auth-client"
import Image from 'next/image';




const Header = () => {
    const { data: session ,isPending} = authClient.useSession()
            console.log(isPending);
            const handleLogout = async () => {
                await authClient.signOut();
                router.push("/login");
            }


    return (
        <div className='bg-blue-950  text-gray-200'>
           <div className='header-container flex justify-between items-center p-5 mx-auto'>
            <div className="header-logo">
                <Link href="/">
                <h3 className='text-3xl font-bold'>Skill<span className='text-yellow-500'>Sphere</span></h3>
                </Link>
               
            </div>
            <div className='right-part gap-4 flex items-center'>
                
                    {isPending ? <span className="loading loading-spinner loading-xl"></span>:  session ? <span className=' gap-4 flex items-center'> <NavLink href="/">Home</NavLink>
                <NavLink href="/courses">Courses</NavLink>
                <NavLink href = "/profile" className=''> 
                            <span className="flex items-center gap-2">
                     <Image src={session.user.image} alt="User Image" width={40} height={40} className="rounded-full" />
               
                

                <span>{session.user.name}</span>
                </span>
               
                    

                </NavLink>

              
                
                <Button variant = "secondary" className="rounded-lg bg-blue-900 " onClick={()=> handleLogout()}> <Link href="/login" className='text-green-500' >Logout</Link></Button>  
                
                    </span> : <span className='logout-state  gap-4 flex items-center'>

                        <NavLink href="/">Home</NavLink>
                <NavLink href="/courses">Courses</NavLink>
                {/* <NavLink href="/profile">My Profile</NavLink> */}
                <Button variant = "secondary" className="rounded-lg bg-blue-900 "> <Link href="/login" className='text-green-500' >Login</Link></Button>
                <Button variant = "primary" className="rounded-lg text-gray-200"><Link href="/register" className='text-gray-100'>Register</Link></Button>
                        </span>}
                
                   
                
                
            </div>
           </div>
        </div>
    );
};

export default Header;