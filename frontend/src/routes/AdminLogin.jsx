import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { IoEyeOutline,IoEyeOffOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <>
        <Navbar/>
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center border-2 border-gray-600"
            style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology')" }}
        >
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full animate-fade-in">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Admin Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full px-4 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your email"
                                required
                            />
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                <AiOutlineMail/>
                            </span>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full px-4 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your password"
                                required
                            />
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                <RiLockPasswordLine/>
                            </span>
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 focus:outline-none"
                            >
                                {showPassword ? (
                                    <IoEyeOutline/>
                                ) : (
                                    <IoEyeOffOutline/>
                                )}
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
        </>
    );
};

export default AdminLogin;