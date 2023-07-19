/* eslint-disable react/forbid-prop-types */

'use client';

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Sidebar.scss';

const DropdownRight = React.lazy(() => import('@/svgs/DropDown-right.svg'));

function SidebarBanner({ data }) {
  const [isBarsOpen, setIsBarsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const sidebarRef = useRef(null);

  const toggleBars = useCallback(() => {
    setIsBarsOpen((prevIsBarsOpen) => !prevIsBarsOpen);
  }, []);

  const handleOutsideClick = useCallback((event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsBarsOpen(false);
    }
  }, []);

  useEffect(() => {
    setCategories(data);
  }, [data]);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const handleCategoryClick = useCallback((category) => {
    setActiveCategory((prevActiveCategory) =>
      prevActiveCategory && prevActiveCategory._id === category._id
        ? null
        : category
    );
  }, []);

  const categoryElements = useMemo(
    () =>
      categories.body?.map((category) => {
        const isActiveCategory =
          activeCategory && activeCategory._id === category._id;
        const categoryItemClassNames = classNames(
          'sidebar-item',
          'xs:p-[8px]',
          'xl:p-0',
          'xs:mb-[16px]',
          'xl:mb-0',
          'w-full',
          'flex',
          'justify-between',
          { 'mb-0': isActiveCategory }
        );
        const categoryNameClassNames = classNames(
          'not-italic',
          'font-normal',
          'font-poppins',
          'self-start',
          'text-start',
          'xl:text-[#000]',
          'xs:text-[#fff]',
          'text-[16px]',
          'leading-[24px]',
          'min-w-[52px]'
        );

        return (
          <li key={category._id}>
            <button
              type="button"
              aria-label="btn item category"
              className={categoryItemClassNames}
              onClick={() => handleCategoryClick(category)}
            >
              <span className={categoryNameClassNames}>{category.name}</span>
              {category?.isMainCategory && (
                <React.Suspense fallback={null}>
                  <DropdownRight className="w-[24px] h-[24px] fill-[#fff] stroke-[#fff]" />
                </React.Suspense>
              )}
            </button>
            {isActiveCategory && category.childCategories && (
              <ul className="sub-menu ml-[20px] list-disc">
                {category.childCategories.map((childCategory) => (
                  <li key={childCategory._id}>{childCategory.name}</li>
                ))}
              </ul>
            )}
          </li>
        );
      }),
    [categories?.body, activeCategory, handleCategoryClick]
  );

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
        <ul className="my-0 mr-[16px] list-none flex flex-col gap-[16px] min-w-[217px] xs:text-[#fafafa] xl:text-[#000]">
          {categoryElements}
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

SidebarBanner.propTypes = {
  data: PropTypes.object.isRequired,
};

export default React.memo(SidebarBanner);
