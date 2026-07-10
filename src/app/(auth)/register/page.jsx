"use client"
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const Registerpage =  () => {
    
    
const router = useRouter();
    
    const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm()
    
    
        const handler = async(data)=>{
            const { data: res, error } = await authClient.signUp.email({
                name: data.name, // required
                email: data.email, // required
                password: data.pass, // required
                image: data.photo,
                callbackURL: "/",
            });
            if(error){
                alert(error.message)
            }else{
                alert("Registration successful!")
                router.push("/")
            }

            
          
    
        }
    const [showPassword, SetShowPassword] = useState(false)
    const signInHandler = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div>
            <div className='flex justify-center items-center my-auto  pt-35'>
                <form onSubmit={handleSubmit(handler)}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend font-bold text-3xl mx-auto">Register</legend>

                        {/* name */}
                        <label className="label">Name</label>
                        <input type="text" className="input text-green-500" placeholder="Enter name" name='name'
                            {...register("name", { required: true })}
                        />
                        {errors.name && <p className='text-red-600 font-semibold text-lg mx-auto'>enter your name</p>}
                        {/* email */}

                        <label className="label">Email</label>
                        <input type="email" className="input text-green-500" placeholder="Email" name='email'
                            {...register("email", { required: true })}
                        />
                        {errors.email && <p className='text-red-600 font-semibold text-lg mx-auto'>enter email</p>}

                        {/* photo */}
                        <label className="label">Enter photo url</label>
                        <input type="text" className="input text-green-500" placeholder="photo url" name='photo'
                            {...register("photo", { required: true })}
                        />
                        {errors.photo && <p className='text-red-600 font-semibold text-lg mx-auto'>enter photo url</p>} 


                        <label className="label">Password</label>
                        <input type={showPassword ? "text" : "password"} className="input text-green-500" placeholder="Password" name='pass'
                            {...register("pass",
                                { required: true }
                            )

                            }

                        />
                         <span onClick={() => SetShowPassword(!showPassword)} className="absolute right-157 top-134 cursor-pointer">
                                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                                        </span>

                        {errors.pass && <p className='text-red-600 font-semibold text-lg mx-auto'>enter pass</p>}

                        <button className="btn btn-secondary mt-4  hover:bg-gray-200 hover:text-black">Register</button>
                        <button className="btn btn-info mt-4 hover:bg-blue-200 hover:text-black" onClick ={ ()=> signInHandler()} ><FaGoogle /> Register with Google</button>

                        <p className="text-center mt-4 text-lg "> have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
                       
                    </fieldset>
                </form>

            </div>
        </div>
    );
};

export default Registerpage;