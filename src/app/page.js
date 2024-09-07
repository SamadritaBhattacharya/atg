import AddOwn from "@/components/AddOwn";
import CardsGrid from "@/components/CardsGrid";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import SignIn from "@/components/SignIn";
import Testimonials from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (

    <div>

    <div className=" bg-stone-300 lg:h-[90vh] h-full w-full p-2 lg:p-4 flex justify-between ">
      <div className=" w-[96%] lg:w-[66%] mx-auto">
       
        <div className="  h-full   py-2">
          <div className=" flex items-center px-4  lg:text-4xl text-wrap text-xl h-[10%] md:text-2xl  font-bold w-[98%] mx-auto">
            <p>Explore your <span className=" text-sky-500">hobby </span>or <span className=" text-purple-700"> passion</span></p>
          </div>

          <div className=" w-full  lg:w-[96%] mx-auto p-4 lg:text-lg text-sm text-zinc-800 font-normal">
            <p className=" p-2">Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>

            {/* <div className=" block lg:hidden w-full">
              <SignIn />
            </div> */}

            <p className=" hidden lg:block pt-2 lg:text-base text-sm text-neutral-700">
            If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.
            </p>
          </div>

          <div className=" block lg:hidden w-full">
              <SignIn />
              <div className=" flex items-center justify-center pt-6 mb-6">
                <Image src={"/Group 27.png"} height={300} width={300} /> 
              </div>
              
            </div>

          <div className=" hidden  w-[96%] mx-auto px-2 h-full lg:h-[36%] lg:flex items-center justify-center">
            <div className=" h-full w-full flex items-center pt-8 justify-center">
              <Image src={"/Group 27.png"} height={400} width={660} /> 
            </div>
            
          </div>
      </div>
      </div>
     <div className="  hidden lg:block  h-full w-[30%] mx-auto p-1">
      <SignIn />
     </div>
      
      
    </div>

    <CardsGrid />
    <AddOwn />
    <Testimonials />
    <Community />
    <Footer />
  </div>

  );
}
