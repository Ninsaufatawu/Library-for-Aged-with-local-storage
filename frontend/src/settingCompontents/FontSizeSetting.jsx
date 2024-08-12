import { useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';

const FontSizeSetting = () => {
  const { fontSize, setFontSize } = useContext(SettingsContext);

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
      <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Font Size</label>
      <select
        value={fontSize}
        onChange={handleFontSizeChange}
        className="block w-full mt-1 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2"
      >
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
    </div>
  );
};

export default FontSizeSetting;
