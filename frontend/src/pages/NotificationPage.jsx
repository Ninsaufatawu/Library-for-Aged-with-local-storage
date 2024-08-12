import { useLocation } from 'react-router-dom';

const NotificationPage = () => {
  const location = useLocation();
  const { notification } = location.state || {};

  if (!notification) {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Notification Details</h2>
        <p>No notification details available.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{notification.type}</h2>
      <p className="text-lg mb-4">{notification.message}</p>
      <p className="text-base text-gray-700 dark:text-gray-300">{notification.details}</p>
    </div>
  );
};

export default NotificationPage;
