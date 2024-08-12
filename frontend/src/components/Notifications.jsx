import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const notificationsList = [
    { 
        id: 1, 
        type: 'Health', 
        message: 'Stay active and maintain your health with these expert tips...', 
        details: 'Detailed health information and tips...' 
    },
    { 
        id: 2, 
        type: 'Books', 
        message: 'Our library has just been updated with the latest bestsellers...', 
        details: 'Check out the latest bestsellers in our library and enjoy reading!' 
    },
    { 
        id: 3, 
        type: 'App Usage', 
        message: 'Unlock the full potential of our app with these simple tips...', 
        details: 'Explore various features of our app to make the most of it.' 
    },
    { 
        id: 4, 
        type: 'Phone Tips', 
        message: 'Are you getting the most out of your smartphone? Discover tips and hacks...', 
        details: 'Smartphone tips, tricks, and hacks to optimize your experience.' },
    {        
        id: 5, 
        type: 'Politics', 
        message: 'Get informed on the latest political events happening around the world...', 
        details: 'Stay up to date with the latest political events and analyses.' },
    {        
        id: 6, 
        type: 'Technology', 
        message: 'The tech world is evolving rapidly, and we\'re here to keep you informed...', 
        details: 'Latest updates and trends in the world of technology.' },
    {        
        id: 7, 
        type: 'Entertainment', 
        message: 'Catch up on the latest in entertainment! From blockbuster movies to trending TV shows...', 
        details: 'Latest updates in movies, TV shows, and more.' },
    {       
        id: 8, 
        type: 'Safety', 
        message: 'Safety first! Discover essential tips to protect yourself both online and offline...', 
        details: 'Safety tips to keep you secure in the digital and physical world.' },
    {       
        id: 9, 
        type: 'Finance', 
        message: 'Managing your finances doesn\'t have to be daunting. Get expert advice...', 
        details: 'Financial advice to help you manage your money better.' },
    { 
        id: 10, 
        type: 'Travel', 
        message: 'Dreaming of your next getaway? Explore top travel destinations...', 
        details: 'Top travel destinations and tips for your next adventure.' },
    { 
        id: 11, 
        type: 'Food', 
        message: 'Delicious recipes and healthy eating tips are just a click away...', 
        details: 'Explore new recipes and healthy eating habits.' },
    { 
        id: 12, 
        type: 'Events', 
        message: 'Don\'t miss out on upcoming local and community events...', 
        details: 'Details about upcoming events in your community.' },
    { 
        id: 13, 
        type: 'Education', 
        message: 'Expand your knowledge with new educational resources and opportunities...', 
        details: 'Resources to help you learn and grow in various fields.' },
    { 
        id: 14, 
        type: 'Environment', 
        message: 'Stay informed about the latest environmental issues and what you can do...', 
        details: 'Updates on environmental issues and how you can make a difference.' },
    { 
        id: 15, 
        type: 'Wellness', 
        message: 'Your mental and physical well-being are crucial to a happy life...', 
        details: 'Wellness tips to improve your overall health and happiness.' },
    { 
        id: 16, 
        type: 'Social', 
        message: 'Looking to connect with others? Discover social groups and activities in your area...', 
        details: 'Find social groups and activities to join and make new connections.' },
];

export const Notifications = ({ onClose }) => {
  const [showNotifications, setShowNotifications] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setShowNotifications(false);
    if (onClose) onClose();
  };

  const handleNotificationClick = (notification) => {
    navigate('/notifications', { state: { notification } });
  };

  return (
    <div className={`fixed top-10 right-4 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 transition-transform ${showNotifications ? 'transform translate-x-0' : 'transform translate-x-full'} duration-300`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Notifications</h3>
        <button onClick={handleClose} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
          <FaTimes size={20} />
        </button>
      </div>
     
      <div className="space-y-5 max-h-96 overflow-y-auto " style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style>
          {`
            .overflow-y-scroll::-webkit-scrollbar {
              display: none;
            }
            .overflow-y-scroll {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}
        </style>
        {notificationsList.map(notification => (
          <div
            key={notification.id}
            className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
            onClick={() => handleNotificationClick(notification)}
          >
            <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">{notification.type}</h4>
            <p className="text-gray-600 dark:text-gray-400">{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
