import React, { useState, useEffect } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Radio from '../../../components/Radio';
import { normalizeImageLink } from '../../../utils/normalizeImageLink';

import {
  SERVER,
  HEADERS,
  DB_GET_CATEGORIES,
  DB_GET_CARS,
  DB_GET_CARS_BY_CATEGORY,
} from '../../../components/App/api';

import './style.scss';

export default function ModelStep(props) {
  const {
    categoryData,
    setCategoryData,
    carData,
    setCarData,
    categories,
    setCategories,
    carsByCategory,
    setCarsByCategory,
  } = props;

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let cleanupFunction = false;

    const getCategories = async () => {
      const url = new URL(`${SERVER}${DB_GET_CATEGORIES}`);
      const headers = HEADERS;
      const response = await fetch(url, { headers });
      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
      } else {
        const categoriesData = data.data;
        const allCategoriesObject = {
          name: 'Все модели',
          id: '',
        };
        categoriesData.unshift(allCategoriesObject);
        if (!cleanupFunction) {
          setCategoryData(allCategoriesObject);
          setCategories(categoriesData);
        }
      }
    };

    !categories.length && getCategories();

    return () => (cleanupFunction = true);
  }, []);

  useEffect(() => {
    let cleanupFunction = false;

    const getCarsByCategory = async () => {
      const url = categoryData?.id
        ? `${SERVER}${DB_GET_CARS_BY_CATEGORY}${categoryData.id}`
        : `${SERVER}${DB_GET_CARS}`;
      const headers = HEADERS;
      const response = await fetch(url, { headers });
      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
      } else {
        const carsByCategoryData = data.data;
        if (!cleanupFunction) {
          setCarsByCategory(carsByCategoryData);
          return carsByCategoryData.length;
        }
      }
    };

    const loadCarsByCategory = async () => {
      const carsLoadedLength = await getCarsByCategory();
      if (carsLoadedLength !== undefined) setIsLoaded(true);
    };

    setIsLoaded(false);
    loadCarsByCategory();

    return () => (cleanupFunction = true);
  }, [categoryData]);

  const onCategoryChange = (event) => {
    const id = event.target.value;
    const category = categories.find((categoryItem) => categoryItem.id === id);
    setCarsByCategory([]);
    setCategoryData(category);
  };

  return (
    <div className='order-process-content__step model-step'>
      <ul className='model-step__category-list'>
        {categories.map((categoryItem, index) => (
          <li key={index} className='model-step__category-item'>
            <Radio
              name='category'
              id={categoryItem.name}
              value={categoryItem.id}
              text={categoryItem.name}
              checked={categoryData?.id === categoryItem.id}
              onChange={onCategoryChange}
            />
          </li>
        ))}
      </ul>

      <Select
        value={categoryData?.id || ''}
        onChange={onCategoryChange}
        displayEmpty
        className='model-step__select'
        inputProps={{ 'aria-label': 'Without label' }}
      >
        {categories.map((categoryItem, index) => (
          <MenuItem key={index} value={categoryItem.id}>
            {categoryItem.name}
          </MenuItem>
        ))}
      </Select>

      {isLoaded && carsByCategory.length === 0 && <div>No results found.</div>}

      <div className='model-step__car-list-container'>
        <div className='model-step__car-list'>
          {carsByCategory.map((carItem, index) => (
            <div
              key={index}
              className={
                carData?.id === carItem.id
                  ? 'model-step__car-item model-step__car-item_active'
                  : 'model-step__car-item'
              }
              onClick={() => {
                setCarData(carItem);
              }}
            >
              <div className='model-step__car-info'>
                <h3 className='model-step__car-name'>{carItem.name}</h3>
                <p className='model-step__car-price'>{`${carItem.priceMin} - ${carItem.priceMax} ₽`}</p>
              </div>
              <img
                className='model-step__car-image'
                src={`${normalizeImageLink(carItem.thumbnail.path)}`}
                alt=''
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
