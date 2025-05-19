import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/categories/index.module.scss';

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
    <div className={styles.filter_container}>
      {/* Фільтрація як кнопки для великих екранів */}
      <div className={styles.filter_buttons}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.filter_button} ${selectedCategory === category ? `${styles.active}` : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Випадаючий список для мобільних пристроїв */}
      <div className={styles.filter_dropdown}>
        <button className={styles.dropdown_toggle} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {selectedCategory} <Image width={16} height={16} src="/img/arrow-down.svg" alt="" />
        </button>
        {isDropdownOpen && (
          <div className={styles.dropdown_menu}>
            <nav className={styles.dropdown_list}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.dropdown_item} ${selectedCategory === category ? `${styles.active}` : ''}`}
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
