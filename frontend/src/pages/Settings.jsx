import { useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';
import SideBar from '../components/SideBar';

export const Settings = () => {
    const { fontSize, setFontSize, language, setLanguage, notifications, setNotifications, profileImage, setProfileImage } = useContext(SettingsContext);

    const handleFontSizeChange = (e) => {
        setFontSize(e.target.value);
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
        alert(`Language changed to: ${e.target.value.toUpperCase()}`);
    };

    const handleNotificationsToggle = () => {
        setNotifications(!notifications);
        alert(`Notifications ${!notifications ? 'enabled' : 'disabled'}`);
    };

    const handleProfileImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setProfileImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="dark:bg-gray-900 flex h-screen">
            <SideBar />
            <div className="flex flex-col w-full p-6 space-y-6">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">Settings</h2>

                {/* Font Size Setting */}
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
                    <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Font Size</label>
                    <select
                        value={fontSize}
                        onChange={handleFontSizeChange}
                        className="block w-full mt-1 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>

                {/* Profile Image Setting */}
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
                    <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Profile Image</label>
                    <input
                        type="file"
                        onChange={handleProfileImageChange}
                        className="block w-full mt-1 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md cursor-pointer focus:outline-none"
                    />
                    {profileImage && (
                        <div className="mt-4">
                            <img src={profileImage} alt="Profile" className="h-24 w-24 rounded-full shadow-lg mx-auto" />
                        </div>
                    )}
                </div>

                {/* Language Setting */}
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
                    <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Language</label>
                    <select
                        value={language}
                        onChange={handleLanguageChange}
                        className="block w-full mt-1 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                    >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        {/* Add more languages as needed */}
                    </select>
                </div>

                {/* Notification Settings */}
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
                    <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Notifications</label>
                    <button
                        onClick={handleNotificationsToggle}
                        className="w-full bg-blue-600 text-white p-2 rounded-md mt-2 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                    >
                        {notifications ? 'Disable Notifications' : 'Enable Notifications'}
                    </button>
                </div>
            </div>
        </div>
    );
};
