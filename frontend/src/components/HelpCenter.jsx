
import { FaHome, FaUserGraduate, FaChalkboardTeacher, FaBookOpen, FaVideo, FaClipboardList, FaMoneyCheckAlt, FaRegChartBar, FaArrowRight } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white shadow-lg flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-center mt-6">
          <div className="flex items-center">
            <FaHome className="h-8 w-8 text-blue-600" />
            <span className="text-gray-800 text-2xl mx-2 font-semibold">SkillSet</span>
          </div>
        </div>
        <nav className="mt-10">
          <a className="flex items-center mt-4 py-2 px-6 bg-gray-200 text-gray-700" href="#">
            <FaHome className="h-6 w-6 text-gray-500" />
            <span className="mx-3">Home</span>
          </a>
          <a className="flex items-center mt-4 py-2 px-6 text-gray-700 hover:bg-gray-200" href="#">
            <FaUserGraduate className="h-6 w-6 text-gray-500" />
            <span className="mx-3">Students</span>
          </a>
          <a className="flex items-center mt-4 py-2 px-6 text-gray-700 hover:bg-gray-200" href="#">
            <FaChalkboardTeacher className="h-6 w-6 text-gray-500" />
            <span className="mx-3">Teachers</span>
          </a>
          <a className="flex items-center mt-4 py-2 px-6 text-gray-700 hover:bg-gray-200" href="#">
            <FaBookOpen className="h-6 w-6 text-gray-500" />
            <span className="mx-3">Courses</span>
          </a>
          <a className="flex items-center mt-4 py-2 px-6 text-gray-700 hover:bg-gray-200" href="#">
            <FaVideo className="h-6 w-6 text-gray-500" />
            <span className="mx-3">Live Class</span>
          </a>
          <a className="flex items-center mt-4 py-2 px-6 text-gray-700 hover:bg-gray-200" href="#">
            <FaClipboardList className="h-6 w-6 text-gray-500" />
            <span className="mx-3">Attendance</span>
          </a>
          <a className="flex items-center mt-4 py-2 px-6 text-gray-700 hover:bg-gray-200" href="#">
            <FaMoneyCheckAlt className="h-6 w-6 text-gray-500" />
            <span className="mx-3">Payments</span>
          </a>
          <a className="flex items-center mt-4 py-2 px-6 text-gray-700 hover:bg-gray-200" href="#">
            <FaBookOpen className="h-6 w-6 text-gray-500" />
            <span className="mx-3">Library</span>
          </a>
          <a className="flex items-center mt-4 py-2 px-6 text-gray-700 hover:bg-gray-200" href="#">
            <FaRegChartBar className="h-6 w-6 text-gray-500" />
            <span className="mx-3">Reports</span>
          </a>
        </nav>
      </div>
      <div className="flex items-center justify-center my-4">
        <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded">
          <span>Upgrade</span>
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
