import { Users, MapPin, Package, Calendar } from 'lucide-react';

const CardsGrid = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full ">
        {/* People Card */}
        <div className="group border rounded-lg shadow-lg p-10 flex flex-col items-start justify-between w-[98%] lg:w-[90%] mx-auto hover:transform-gpu transition-all hover:scale-110 hover:bg-purple-800 hover:opacity-80">
          <div className="flex items-center mb-4">
            <Users className="text-purple-600 group-hover:text-white w-6 h-6 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">People</h3>
          </div>
          <p className="text-gray-600 mb-4 group-hover:text-white">
            Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.
          </p>
          <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-md hover:bg-purple-400 group-hover:text-white">
            Connect
          </button>
        </div>

        {/* Place Card */}
        <div className="group border rounded-lg shadow-lg p-10 flex flex-col items-start justify-between w-[98%] lg:w-[90%] mx-auto hover:transform-gpu transition-all hover:scale-110 hover:bg-green-700 hover:opacity-80">
          <div className="flex items-center mb-4">
            <MapPin className="text-green-600 group-hover:text-white w-6 h-6 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">Place</h3>
          </div>
          <p className="text-gray-600 mb-4 group-hover:text-white">
            Find a class, school, playground, auditorium, studio, shop, or an event venue. Book a slot at venues that allow booking through here.
          </p>
          <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-md hover:bg-green-500 group-hover:text-white">
            Meet up
          </button>
        </div>

        {/* Product Card */}
        <div className="group border rounded-lg shadow-lg p-10 flex flex-col items-start justify-between w-[98%] lg:w-[90%] mx-auto hover:transform-gpu transition-all hover:scale-110 hover:bg-rose-700 hover:opacity-80">
          <div className="flex items-center mb-4">
            <Package className="text-red-600 group-hover:text-white w-6 h-6 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">Product</h3>
          </div>
          <p className="text-gray-600 mb-4 group-hover:text-white">
            Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.
          </p>
          <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-md hover:bg-rose-400 group-hover:text-white">
            Get it
          </button>
        </div>

        {/* Program Card */}
        <div className="group border rounded-lg shadow-lg p-10 flex flex-col items-start justify-between w-[98%] lg:w-[90%] mx-auto hover:transform-gpu transition-all  hover:scale-110 hover:bg-sky-600 hover:opacity-80">
          <div className="flex items-center mb-4">
            <Calendar className="text-blue-600 group-hover:text-white w-6 h-6 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">Program</h3>
          </div>
          <p className="text-gray-600 mb-4 group-hover:text-white">
            Find events, meetups and workshops related to your hobby. Register or buy tickets online.
          </p>
          <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-md hover:bg-sky-400 group-hover:text-white">
            Attend
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardsGrid;
