"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';


const UserProfileDetails = () => {

    const {
        data: session,
        isPending, // loading state
        
    } = authClient.useSession()
    if (isPending) return <div>Loading...</div>
    return (
        <div className="max-w-md mx-auto my-10 px-4">
            <div className="card bg-base-100 shadow-lg border border-slate-200">
                <div className="bg-blue-950 text-gray-200 rounded-t-2xl p-8 flex flex-col items-center gap-3">
                    <Image
                        src={session.user.image}
                        alt="User Image"
                        width={96}
                        height={96}
                        className="rounded-full border-2 border-yellow-500 object-cover"
                    />
                    <h2 className="text-2xl font-bold">{session.user.name}</h2>
                </div>

                <div className="card-body">
                    <div className="flex flex-col gap-4">
                        <div>
                            <span className="text-sm text-gray-400">Full Name</span>
                            <p className="font-medium">{session.user.name}</p>
                        </div>

                        <div className="divider my-1"></div>

                        <div>
                            <span className="text-sm text-gray-400">Email</span>
                            <p className="font-medium">{session.user.email}</p>
                        </div>

                        <div className="divider my-1"></div>

                        <div>
                            <span className="text-sm text-gray-400">Photo URL</span>
                            <p className="font-medium break-all">{session.user.image || "Not set"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
    );
};

export default UserProfileDetails;