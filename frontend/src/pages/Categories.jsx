// Categories.js
import { useState, useEffect } from 'react';
import axios from 'axios';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState({});

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8000/upload/category');
      setCategories(response.data.categories || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const addCategory = async () => {
    if (!newCategory.trim()) {
      alert('Category name cannot be empty.');
      return;
    }

    try {
      await axios.post(`http://localhost:8000/upload/category/${newCategory}`);
      setNewCategory('');
      fetchCategories();
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const handleCheckboxChange = (category) => {
    setSelectedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const deleteCategory = async (category) => {
    if (!selectedCategories[category]) {
      alert('You must check the checkbox to delete this category.');
      return;
    }

    if (window.confirm(`Are you sure you want to delete the category "${category}"?`)) {
      try {
        await axios.delete(`http://localhost:8000/upload/category/${category}`);
        setSelectedCategories(prev => {
          const { [category]: _, ...rest } = prev;
          return rest;
        });
        fetchCategories(); // Refresh categories list
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCategories = categories.filter(category =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search Categories"
        className="border p-2 mb-4 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
      />

      <input
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        placeholder="New Category"
        className="border p-2 mb-4 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
      />
      <button onClick={addCategory} className="bg-blue-600 text-white p-2 mb-4 dark:bg-blue-700">Add Category</button>

      <ul>
        {filteredCategories.length > 0 ? (
          filteredCategories.map(category => (
            <li key={category} className="border p-2 mb-2 flex items-center dark:border-gray-700">
              <input
                type="checkbox"
                checked={!!selectedCategories[category]}
                onChange={() => handleCheckboxChange(category)}
                className="mr-2"
              />
              {category}
              <button 
                onClick={() => deleteCategory(category)} 
                className="bg-red-600 text-white p-1 ml-4 dark:bg-red-700"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <li>No categories available</li>
        )}
      </ul>
    </div>
  );
}

export default Categories;
