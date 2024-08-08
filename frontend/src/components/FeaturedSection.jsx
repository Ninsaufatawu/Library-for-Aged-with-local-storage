import ProfileSection from "./ProfileSection";
import profileImage from "../assets/IMG-20240508-WA0030-removebg-preview.png"


const activities = [
  { id: 1, name: 'Uzachi #4390', from: 'Ragnarok Meta', eth: 2.15, img: 'ProfileSection' },
  { id: 2, name: 'Doodles #3486', from: 'Doodles', eth: 4.42, img: 'ProfileSection' },
  { id: 3, name: 'Murakami #2766', from: 'Murakami', eth: 1.08, img: 'path-to-image.jpg' },
  { id: 4, name: 'Doodles #2761', from: 'Murakami', eth: 4.4, img: 'path-to-image.jpg' },

];

const FeaturedSection = () => {
  return (
    <div className="flex justify-end p-4 h-screen flex-col bg-slate-50 dark:bg-gray-700">
      <div className=" bottom-10 relative ">
        <ProfileSection/>
      </div>
      <div className=" w-72 reative pb-5 ">
        <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-800 dark:text-white ">
          <h2 className="text-xl font-semibold mb-4 dark:bg-gray-800">Featured Creators</h2>
          <div className="flex items-center mb-4 dark:bg-gray-800 dark:text-white">
            <img 
              src={profileImage}
              alt="Murakami Flowers" 
              className="w-16 h-16 rounded-full mr-4"
            />
            <div className="dark:text-white">
              <h3 className="text-lg font-semibold">Murakami Flowers</h3>
              <p className="text-gray-500">@mftmkus</p>
              <p className="text-gray-600">Murakami Flowers is a work in which artist Takashi Murakami's representative artwork...</p>
              <button className="mt-2 text-blue-500">Follow</button>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md mt-4 dark:bg-gray-800 relative top-4">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Recent Books Read</h2>
          {activities.map(activity => (
            <div key={activity.id} className="flex items-center mb-4 dark:text-white">
              <img 
                src={activity.img} 
                alt={activity.name} 
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-1 dark:text-white">
                <h3 className="text-lg font-semibold">{activity.name}</h3>
                <p className="text-gray-500">From {activity.from}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
   );
};

export default FeaturedSection;
