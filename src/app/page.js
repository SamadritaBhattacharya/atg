import CardsGrid from "@/components/CardsGrid";
import SignIn from "@/components/SignIn";
import Image from "next/image";

export default function Home() {
  return (

    <div>

    <div className=" bg-stone-300 h-[90vh] w-full p-4 flex justify-between ">
      <div className=" w-[66%] mx-auto">
       
        <div className="  h-full  py-2">
          <div className="  p-4 lg:text-6xl text-xl md:text-2xl font-bold w-[98%] mx-auto">
            Explore your <span className=" text-sky-500">hobby</span> or <span className=" text-purple-700">passion</span>
          </div>

          <div className="  w-[96%] mx-auto p-4 lg:text-xl text-sm text-zinc-800 font-normal">
            <p className=" p-2">Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>

            <p className="  py-2 lg:text-lg text-sm text-neutral-700">
            If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.
            </p>
          </div>

          <div className="  w-[96%] mx-auto px-2 h-[36%] flex items-center justify-center">
            <div className=" h-full w-full flex items-center justify-center">
              <Image src={"/Group 27.png"} height={400} width={660} /> 
            </div>
            
          </div>
      </div>
      </div>
     <div className=" bg-green-400 hidden lg:block  h-full w-[30%] mx-auto p-2">
      <SignIn />
     </div>
      
      
    </div>

    <CardsGrid />
  </div>

  );
}
