import { Facebook, Github, Instagram, Linkedin,  Twitter } from 'lucide-react'; 
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-6">
          
         
          <div>
            <h5 className="font-bold text-lg mb-4">Hobbycue</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Our Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Work with Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
            </ul>
          </div>
          
          
          <div>
            <h5 className="font-bold text-lg mb-4">How Do I</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Sign Up</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Add a Listing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Claim Listing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Post a Query</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Add a Blog Post</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Other Queries</a></li>
            </ul>
          </div>
          
          
          <div>
            <h5 className="font-bold text-lg mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Listings</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog Posts</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Shop / Store</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Community</a></li>
            </ul>
          </div>
          
          
          <div className="flex flex-col space-y-6">
            <div>
            <h5 className="font-bold text-lg mb-4">Social Media</h5>
            {/* <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-gray-900"><Facebook /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><Twitter /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><Instagram /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><Linkedin /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><Github /></a>
              
            </div> */}

          <Image src={'/Group 64.png'} width={400} height={300} className='h-[24px] w-[90%] mx-auto lg:mx-0 lg:w-[360] mb' />
          </div>
         

            <div className=' '>
            <h5 className="font-bold text-lg mb-4">Invite Friends</h5>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email ID" 
                className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <button className="bg-purple-600 text-white px-4 rounded-r-md">Invite</button>
            </div></div>
          </div>
        </div>
        
       
        <div className="mt-8 text-center text-gray-500 text-sm">
          © Purple Cues Private Limited
        </div>
      </div>
    </footer>
  );
};

export default Footer;
