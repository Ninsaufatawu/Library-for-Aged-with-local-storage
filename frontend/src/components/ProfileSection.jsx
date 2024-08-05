import  { useState } from 'react';
import { FaBell, FaSun, FaMoon } from 'react-icons/fa';
import profileImage from "../assets/IMG-20240508-WA0030-removebg-preview.png"
 // Replace with the actual path to your profile picture

const ProfileSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Logic to apply dark mode to the entire app can be added here
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="flex items-center space-x-4">
      <button className="relative bg-white p-2 rounded-full shadow-md">
        <FaBell className="text-red-500" size={24} />
        <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
      </button>
      <button onClick={toggleTheme} className="bg-white  p-2 rounded-full shadow-md">
        {isDarkMode ? <FaSun className="text-yellow-500" size={24} /> : <FaMoon className="text-gray-500" size={24} />}
      </button>
      <div className="flex items-center bg-white p-2 rounded-full shadow-md">
        <img src={profileImage}  alt="Profile" className="w-10 h-10 rounded-full mr-2" />
        <span className="text-black  font-semibold">Thanh Pham</span>
        <span className="ml-2 text-black ">▼</span>
      </div>
      
    </div>
  );
};

export default ProfileSection;
