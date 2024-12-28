"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import '../auth.css';
import Link from 'next/link';
import { toast } from 'react-toastify';
import logo from '@/assets/LC-WBG.png';

interface FormData {
    email: string;
    password: string;
}

const Signin = () => {

    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors: Record<string, string> = {};
        if (!formData.email) {
            validationErrors.email = 'Email is required';
        }
        if (!formData.password) {
            validationErrors.password = 'Password is required';
        }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
            credentials: 'include'
        })
            .then((res) => res.json())
            .then(async (response) => {
                //console.log('login res ', response)
                if (response.ok) {
                    toast(response.message, {
                        type: 'success',
                        position: 'top-right',
                        autoClose: 2000
                    })
                    checkLogin()
                } else {
                    toast(response.message, {
                        type: 'error',
                        position: 'top-right',
                        autoClose: 2000
                    });
                }
            })
            .catch((error) => {
                toast(error.message, {
                    type: 'error',
                    position: 'top-right',
                    autoClose: 2000
                });
            })
    };

    const checkLogin = async () => {
        // let authToken = await getCookie('authToken')
        // let refreshToken = await getCookie('refreshToken')
        // console.log(authToken, refreshToken)
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/checklogin`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((response) => {
                //console.log('check login res ', response)
                if (response.ok) {
                    // toast(response.message, {
                    //     type: 'success',
                    //     position: 'top-right',
                    //     autoClose: 2000
                    // })
                    window.location.href = "/"
                } else {
                    // toast(response.message, {
                    //     type: 'error',
                    //     position: 'top-right',
                    //     autoClose: 2000
                    // });
                }
            })
            .catch((error) => {
                window.location.href = "/"
            })
    };
    const handleGoogleLogin = async () => {
        window.open(
            `${process.env.NEXT_PUBLIC_BACKEND_API}/auth/google`,
            "_self"
          );
    }

    return (
        <div>
            <div className='authout'>
                <div className='authin'>
                    <div className="left">
                        <Image src={logo} alt="" className='img' />
                    </div>
                    <div className='right'>
                        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
                            <div className="forminput_cont">
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <span className="formerror">{errors.email}</span>}
                            </div>
                            <div className="forminput_cont">
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter Your Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <span className="formerror">{errors.password}</span>}
                            </div>
                            <button type="submit" className="main_button">Login</button>
                            <p className="authlink">
                                Don&apos;t have an account? <Link href="/auth/signup">Register</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center my-4'>
                <button onClick={handleGoogleLogin} className="flex items-center justify-center w-1/5 bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6 mr-2 text-indigo-500 fill-current">
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                    <span>Login with Google</span>
                </button>
            </div>
        </div>
    )
}

export default Signin 