import { Quote } from 'lucide-react';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row items-center justify-center p-6">
      <div className="bg-slate-100 rounded-lg lg:p-12  shadow-md p-8 w-4xl lg:w-[90%] mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Quote className="w-6 h-6 text-purple-600 mr-2" />
          <h3 className="text-xl lg:text-3xl font-semibold text-gray-800">Testimonials</h3>
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-600 text-base lg:text-xl mb-6 lg:mb-10">
          In a fast-growing and ever-changing city like Bangalore, it sometimes becomes very difficult to find or connect with like-minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
        </p>

        {/* Audio Player */}
        <div className="mb-6 flex flex-col-reverse lg:flex-row gap-4 justify-between w-full ">
          <div className="flex items-center justify-between bg-purple-100 p-4 w-full lg:w-[60%] mx-auto rounded-lg">
            <button className="mr-4 bg-white p-2 rounded-full shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-4.61-2.664A1 1 0 009 9.632v4.736a1 1 0 001.142.994l4.61-2.664a1 1 0 000-1.736z" />
              </svg>
            </button>
            <div className="flex-grow">
              <input type="range" className="w-[90%] mx-auto h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer" />
              <span className="ml-1 text-gray-600 text-sm">0:00</span>
            </div>
            
            <div>
              <Image src={"/dance.png"} height={50} width={50} className=' bg-cover' />
            </div>
          </div>

          <div className=' w-full lg:w-[30%] mx-auto bg-white rounded-lg block'>
          <div className="flex items-center justify-center p-2 ">
         
          <Image src={'/dance.png'} height={50} width={50} className=' bg-cover mr-2' />
          <div>
            <p className="font-semibold text-base lg:text-lg text-gray-800">Shubha Nagarajan</p>
            <p className="text-sm text-purple-600">Classical Dancer</p>
          </div>
        </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Testimonial;
