import { Users, MapPin, Package, Calendar } from 'lucide-react';

const CardsGrid = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        {/* People Card */}
        <div className="border rounded-lg shadow-lg p-6 flex flex-col items-start justify-between">
          <div className="flex items-center mb-4">
            <Users className="text-purple-600 w-6 h-6 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">People</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.
          </p>
          <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-md hover:bg-purple-50">
            Connect
          </button>
        </div>

        {/* Place Card */}
        <div className="border rounded-lg shadow-lg p-6 flex flex-col items-start justify-between">
          <div className="flex items-center mb-4">
            <MapPin className="text-green-600 w-6 h-6 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">Place</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Find a class, school, playground, auditorium, studio, shop, or an event venue. Book a slot at venues that allow booking through here.
          </p>
          <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-md hover:bg-purple-50">
            Meet up
          </button>
        </div>

        {/* Product Card */}
        <div className="border rounded-lg shadow-lg p-6 flex flex-col items-start justify-between">
          <div className="flex items-center mb-4">
            <Package className="text-red-600 w-6 h-6 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">Product</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.
          </p>
          <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-md hover:bg-purple-50">
            Get it
          </button>
        </div>

        {/* Program Card */}
        <div className="border rounded-lg shadow-lg p-6 flex flex-col items-start justify-between">
          <div className="flex items-center mb-4">
            <Calendar className="text-blue-600 w-6 h-6 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">Program</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Find events, meetups and workshops related to your hobby. Register or buy tickets online.
          </p>
          <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-md hover:bg-purple-50">
            Attend
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardsGrid;
