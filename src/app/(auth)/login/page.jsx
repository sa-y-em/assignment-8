
'use client'
import { authClient } from '@/lib/auth-client';
import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Loginpage = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const handler = async (data)=>{
        const { data:res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.pass, // required
            rememberMe: true,
            callbackURL: "/",
        });
        if(error){
           toast.error(error.message)
        }else{
            toast.success("Login successful!")
        }
       
      

    }
    
        const signInHandler = async () => {
            const data = await authClient.signIn.social({
                provider: "google",
            });
        };
    
    const [showPassword, SetShowPassword] = useState(true)
    return (
        <div className='flex justify-center items-center my-auto  pt-35 relative'>
            <form onSubmit={handleSubmit(handler)}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend font-bold text-3xl mx-auto">Login</legend>

                <label className="label">Email</label>
                    <input type="email" className="input text-green-500" placeholder="Email" name='email' 
                    {...register("email", {required:true})}
                    />
                    {errors.email && <p className='text-red-600 font-semibold text-lg mx-auto'>enter email</p>}

                <label className="label">Password</label>
                <input type={showPassword ? "text" : "password"} className="input text-green-500" placeholder="Password" name='pass'
                 {...register("pass",
                    {required:true}
                 )

                }
               
                />
                    <span onClick={() => SetShowPassword(!showPassword)} className="absolute right-157 top-79 cursor-pointer">
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
                    
                    {errors.pass && <p className='text-red-600 font-semibold text-lg mx-auto'>enter pass</p>}

                    <button className="btn btn-neutral mt-4 hover:bg-gray-200 hover:text-black">Login</button>
                    <button className="btn btn-info mt-4 hover:bg-blue-200 hover:text-black" onClick={()=>signInHandler()}><FaGoogle /> Login with Google</button>

                <p className="text-center mt-4 text-lg">Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a></p>
            </fieldset>     
            </form>
            
        </div>
    );
};

export default Loginpage;