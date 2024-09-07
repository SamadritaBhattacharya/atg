"use client"
import { Eye, EyeOff, Facebook, Google } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const SignIn = () => {
  const [activeTab, setActiveTab] = useState('join'); // Default to "Join In"
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center py-2 ">
      <div className="shadow-md rounded-xl px-4 py-2 max-w-md w-full">
        
        {/* Toggle between Sign In and Join In */}
        <div className="text-center p-2">
          <h2 
            className={`inline-block mr-4 cursor-pointer ${
              activeTab === 'sign' ? 'text-purple-600 font-bold border-b-2 border-purple-600' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('sign')}
          >
            Sign In
          </h2>
          <h2 
            className={`inline-block cursor-pointer ${
              activeTab === 'join' ? 'text-purple-600 font-bold border-b-2 border-purple-600' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('join')}
          >
            Join In
          </h2>
        </div>

        {activeTab === 'sign' ? (
          // Sign In form layout
          <>
            <div className="flex flex-col gap-4 mb-6">
              <button className="border border-gray-300 rounded-lg flex items-center justify-center py-2 gap-2 hover:bg-gray-100 ring-purple-600 ring-1 w-[96%] mx-auto">
              <Image src={'/Google.png'} height={300} width={300} alt="Google Logo" className=' h-4 w-4' />
                Continue with Google
              </button>
              <button className="border border-gray-300 rounded-lg flex items-center justify-center py-2 gap-2 hover:bg-gray-100 ring-purple-600 ring-1 w-[96%] mx-auto">
              <Image src={'/Facebook.png'} height={300} width={300} alt="Facebook Logo" className=' h-4 w-4' />
                Continue with Facebook
              </button>
            </div>

            <div className="flex items-center justify-center my-4">
              <span className="border-t bg-gray-800 w-1/4 " />
              <span className="mx-2 text-gray-500">Or connect with</span>
              <span className="border-t bg-gray-800 w-1/4 " />
            </div>

            {/* Sign In form */}
            <form className="space-y-4 mb-0 lg:mb-2">
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-1 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="relative ">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="w-full p-1 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 "
                  placeholder="Password"
                  required
                />
                {/* Toggle between open and closed eye icons */}
                {showPassword ? (
                  <Eye
                    className="absolute right-3 top-9 cursor-pointer text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <EyeOff
                    className="absolute right-3 top-9 cursor-pointer text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>

              <div className="flex items-center justify-between text-gray-700">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-purple-600 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm">Remember me</span>
                </label>
                <a href="#" className="text-sm text-gray-500 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-1 rounded-lg hover:bg-purple-700 text-base focus:ring-4 focus:ring-purple-300"
              >
                Continue
              </button>
            </form>
          </>
        ) : (
          // Join In form layout (same as the provided Join In layout)
          <>
            <div className="flex flex-col gap-4 mb-6">
              <button className="border border-gray-300 rounded-lg flex items-center justify-center py-2 gap-2 hover:bg-gray-100 ring-purple-600 ring-1 w-[96%] mx-auto">
               <Image src={'/Google.png'} height={300} width={300} alt="Google Logo" className=' h-4 w-4' />
                Continue with Google
              </button>
              <button className="border border-gray-300 rounded-lg flex items-center justify-center py-2 gap-2 hover:bg-gray-100 ring-purple-600 ring-1 w-[96%] mx-auto">
              <Image src={'/Facebook.png'} height={300} width={300} alt="Facebook Logo" className=' h-4 w-4' />
                Continue with Facebook
              </button>
            </div>

            <div className="flex items-center justify-center my-4">
              <span className="border-t bg-gray-800 w-1/4 " />
              <span className="mx-2 text-gray-500">Or connect with</span>
              <span className="border-t bg-gray-800 w-1/4 " />
            </div>

            {/* Join In form */}
            <form className="space-y-4 mb-0 lg:mb-2">
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-1 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="relative">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="w-full p-1 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Password"
                  required
                />
                {/* Toggle between open and closed eye icons */}
                {showPassword ? (
                  <Eye
                    className="absolute right-3 top-9 cursor-pointer text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <EyeOff
                    className="absolute right-3 top-9 cursor-pointer text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>

              <p className="text-right text-[12px] text-gray-500 mt-1">Password strength</p>

              <p className="text-gray-500 text-sm mt-1">
                By continuing, you agree to our{' '}
                <a href="#" className="text-purple-600 underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-purple-600 underline">
                  Privacy Policy
                </a>.
              </p>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-1 rounded-lg hover:bg-purple-700 text-base focus:ring-4 focus:ring-purple-300"
              >
                Agree and Continue
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SignIn;
