import { Link } from 'react-router-dom';

const SettingsNavbar = () => {
  return (
    <div className="w-1/4 bg-white dark:bg-gray-900 p-6 space-y-4">
      <Link to="/settings/font-size" className="w-full text-left font-semibold text-gray-800 dark:text-gray-200">
        Font Size
      </Link>
      <Link to="/settings/profile-image" className="w-full text-left font-semibold text-gray-800 dark:text-gray-200">
        Profile Image
      </Link>
      <Link to="/settings/language" className="w-full text-left font-semibold text-gray-800 dark:text-gray-200">
        Language
      </Link>
      <Link to="/settings/notifications" className="w-full text-left font-semibold text-gray-800 dark:text-gray-200">
        Notifications
      </Link>
    </div>
  );
};

export default SettingsNavbar;
