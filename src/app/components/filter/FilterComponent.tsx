import React, { useState } from 'react';

import Image from 'next/image';

type Category = 'All' | 'Branding' | 'UX/UI Design' | 'App Development' | 'Web Development' | 'Digital Transformation';

interface FilterComponentProps {
  onFilterChange: (category: Category) => void;
  categories: Category[];
}

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilterChange, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    onFilterChange(category);
    setIsDropdownOpen(false);
  };

  return (
    <div className="filter-container">
      {/* Фільтрація як кнопки для великих екранів */}
      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Випадаючий список для мобільних пристроїв */}
      <div className="filter-dropdown">
        <button className="dropdown-toggle" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {selectedCategory} <Image width={16} height={16} src="/img/arrow-down.svg" alt="" />
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <nav className="dropdown-list">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`dropdown-item ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterComponent;
