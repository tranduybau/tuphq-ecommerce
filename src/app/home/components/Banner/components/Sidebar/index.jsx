'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import classNames from 'classnames';

import DropdownRight from '@/svgs/DropDown-right.svg';

import './Sidebar.scss';

export default function SidebarBanner() {
  const [isBarsOpen, setIsBarsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://gmen-admin.wii.camp/api/v1.0/product-categories'
        );
        setCategories(response.data);
      } catch (error) {
        return null;
      }
    };
    fetchData();
  }, []);

  const toggleBars = () => {
    setIsBarsOpen(!isBarsOpen);
  };

  const handleOutsideClick = useCallback((event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsBarsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const handleCategoryClick = (category) => {
    if (category.childCategories && category.childCategories.length > 0) {
      if (activeCategory && activeCategory._id === category._id) {
        setActiveCategory(null);
      } else {
        setActiveCategory(category);
      }
    }
  };

  return (
    <div className="xl:border-solid xl:border-r-[1px]">
      <div
        ref={sidebarRef}
        className={classNames('sidebar', 'flex-auto', { showBars: isBarsOpen })}
      >
        {isBarsOpen && (
          <button
            aria-label="close"
            type="button"
            onClick={toggleBars}
            className={classNames(
              'flex',
              'justify-end',
              'pr-[12px]',
              'mb-[12px]'
            )}
          >
            <FontAwesomeIcon icon={faClose} className="close-icon" />
          </button>
        )}
        <ul className="sidebar__menu">
          {categories &&
            categories.body &&
            categories.body.map((category) => (
              <div key={category._id}>
                <button
                  type="button"
                  aria-label="btn item category"
                  className={classNames(
                    'sidebar-item sp-bw',
                    'w-full',
                    'flex',
                    'justify-between',
                    { 'mb-0': activeCategory }
                  )}
                  onClick={() => handleCategoryClick(category)}
                >
                  <span
                    className={classNames(
                      'font-poppins',
                      'self-start',
                      'text-start'
                    )}
                  >
                    {category.name}
                  </span>
                  {category.isMainCategory && (
                    <DropdownRight className="dropdown-right-icon" />
                  )}
                </button>
                {activeCategory &&
                  activeCategory._id === category._id &&
                  category.childCategories && (
                    <ul className="sub-menu ml-[20px] list-disc">
                      {category.childCategories.map((childCategory) => (
                        <li key={childCategory._id}>{childCategory.name}</li>
                      ))}
                    </ul>
                  )}
              </div>
            ))}
        </ul>
      </div>
      <button
        aria-label="sidebar"
        type="button"
        onClick={toggleBars}
        className="fa-bars-icon"
      >
        <FontAwesomeIcon icon={faBars} className="w-[24px] h-[24px]" />
      </button>
    </div>
  );
}
