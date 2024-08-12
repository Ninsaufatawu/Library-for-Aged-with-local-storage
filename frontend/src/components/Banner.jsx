import { Link } from "react-router-dom";
import profileImage from "../assets/IMG-20240508-WA0030-removebg-preview.png"

const Banner = () => {
  return (
    <div className="relative bg-blue-500 flex  rounded-2xl text-white p-1 ">
      <img 
        src={profileImage}
        alt="background" 
        className="absolute inset-0 w-full h-full object-contain opacity-50 z-1"
      />
      <div className="relative z-10 items-start  pl-6">
        <h1 className="text-2xl font-bold  mb-2">TRENDING BOOKS & NEWS <br /> THIS MONTHS</h1>
        <p className="mb-4">Listen and read to trending books and news this month</p>
        <div className="space-x-4 bottom-2 relative">
          <Link>
          <button className="px-4  py-1 pb-1 bg-white text-black rounded-lg font-semibold">View More</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
