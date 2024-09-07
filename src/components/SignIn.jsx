"use client"
import { Eye, Facebook, Google } from 'lucide-react';
import { useState } from 'react';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className=" flex items-center justify-center ">
      <div className="bg-slate-200 shadow-md rounded-xl px-4 py-2 max-w-md w-full">
        
        <div className="text-center  p-2">
          <h2 className="text-gray-500 inline-block mr-4 cursor-pointer">Sign In</h2>
          <h2 className="text-purple-600 font-bold border-b-2 border-purple-600 inline-block cursor-pointer">
            Join In
          </h2>
        </div>

        
        <div className="flex flex-col gap-4 mb-6">
          <button className="border border-gray-300 rounded-lg flex items-center justify-center py-2 gap-2 hover:bg-gray-100">
            
            <img src='./Google.png' />
            Continue with Google
          </button>
          <button className="border border-gray-300 rounded-lg flex items-center justify-center py-2 gap-2 hover:bg-gray-100">
          <img src='./Facebook.png' />
            
            Continue with Facebook
          </button>
        </div>

       
        <div className="flex items-center justify-center my-4">
          <span className="border-t border-gray-300 w-1/4"></span>
          <span className="mx-2 text-gray-500">Or connect with</span>
          <span className="border-t border-gray-300 w-1/4"></span>
        </div>

       
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600"
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
              className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Password"
              required
            />
            <Eye
              className="absolute right-3 top-10 cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

         
          <p className="text-right text-[12px] text-gray-500 mt-1">Password strength</p>

          <p className="text-gray-500 text-sm mt-2">
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
      </div>
    </div>
  );
};

export default SignIn;
