import React, { useEffect, useState, useCallback, useRef } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import {
  SERVER,
  HEADERS,
  DB_GET_CITIES,
  DB_GET_POINTS,
  YMAPS_API_KEY,
} from '../../../components/App/api';

import './style.scss';

export default function LocationStep(props) {
  const {
    cityData,
    setCityData,
    pointData,
    setPointData,
    cities,
    setCities,
    points,
    setPoints,
    pointsCoords,
    setPointsCoords,
  } = props;

  const [isLoaded, setIsLoaded] = useState(false);
  const [ymaps, setYmaps] = useState(null);
  const [error, setError] = useState('');

  const getCoords = useCallback(
    async (address) => {
      if (ymaps) {
        const geocodeResponce = await ymaps.geocode(address);
        const firstGeoObject = geocodeResponce.geoObjects.get(0);
        return firstGeoObject.geometry.getCoordinates();
      }
    },
    [ymaps]
  );

  const onMapLoad = (ymaps) => {
    setYmaps(ymaps);
  };

  const map = useRef(null);
  const mapState = {
    center: [53.91, 27.56],
    zoom: 13,
  };

  const onCityDataChange = async (event, value) => {
    setCityData(value);
    if (value) {
      const cityCoords = await getCoords(value.name);
      map.current.setCenter(cityCoords, 12, { duration: 300 });
    }
  };

  const onPointDataChange = (event, value) => {
    setPointData(value);
  };

  useEffect(() => {
    if (pointData && isLoaded) {
      const pointWithCoords = pointsCoords.find(
        (pointCoordsItem) => pointCoordsItem.point.id === pointData.id
      );
      map.current.setCenter(pointWithCoords.coords, map.current.zoom, {
        duration: 300,
      });
    }
  }, [pointData, pointsCoords, isLoaded]);

  useEffect(() => {
    let cleanupFunction = false;
    const headers = HEADERS;

    const getCities = async () => {
      const url = new URL(`${SERVER}${DB_GET_CITIES}`);
      const response = await fetch(url, { headers });
      const data = await response.json();

      if (!cleanupFunction) {
        if (!response.ok) {
          setError(data.message);
          console.log(error);
        } else {
          const citiesData = data.data.filter((cityData) => cityData.name);
          setCities(citiesData);
        }
      }
    };

    const getPoints = async () => {
      const url = new URL(`${SERVER}${DB_GET_POINTS}`);
      const response = await fetch(url, { headers });
      const data = await response.json();

      if (!cleanupFunction) {
        if (!response.ok) {
          setError(data.message);
          console.log(error);
        } else {
          const pointsData = data.data;
          setPoints(pointsData);
        }
      }
    };

    setIsLoaded(false);
    !cities.length && getCities();
    !cities.length && getPoints();

    return () => (cleanupFunction = true);
  }, [setCities, setPoints, error]);

  useEffect(() => {
    let cleanupFunction = false;

    const getPointsCoords = async (points) => {
      let pointsCoordsGot = [];
      for (const point of points) {
        if (point.cityId) {
          const fullAddress = `${point.cityId.name}, ${point.address}`;
          const coords = await getCoords(fullAddress);
          if (coords) pointsCoordsGot.push({ coords: coords, point: point });
        }
      }
      if (!cleanupFunction) {
        !pointsCoords.length && setPointsCoords(pointsCoordsGot);
      }
      return pointsCoordsGot.length !== 0;
    };

    const loadPointsCoords = async () => {
      const loaded = await getPointsCoords(points);

      if (!cleanupFunction) {
        setIsLoaded(loaded);
      }
    };

    loadPointsCoords();

    return () => (cleanupFunction = true);
  }, [points, getCoords]);

  return (
    <div className='order-process-content__step location-step'>
      <form className='location-step__form-container'>
        <label className='location-step__form'>
          <span className='location-step__label'>Город</span>

          <Autocomplete
            options={cities}
            getOptionLabel={(option) => option.name || ''}
            getOptionSelected={(option, value) => option.id === value.id}
            forcePopupIcon={false}
            value={cityData}
            onChange={onCityDataChange}
            renderInput={(params) => (
              <TextField {...params} placeholder='Начните вводить город...' />
            )}
          />
        </label>

        <label className='location-step__form'>
          <span className='location-step__label'>Пункт выдачи</span>

          <Autocomplete
            options={points?.filter(
              (point) => point.cityId && point.cityId.name === cityData?.name
            )}
            getOptionLabel={(option) => option.address || ''}
            getOptionSelected={(option, value) => option.id === value.id}
            forcePopupIcon={false}
            value={pointData}
            onChange={onPointDataChange}
            renderInput={(params) => (
              <TextField {...params} placeholder='Начните вводить пункт...' />
            )}
          />
        </label>
      </form>

      <div className='location-step__map-container'>
        <p className='location-step__map-text'>Выбрать на карте:</p>

        <YMaps
          query={{
            ns: 'use-load-option',
            apikey: YMAPS_API_KEY,
            load: 'geocode',
          }}
        >
          <Map
            className={'location-step__map'}
            defaultState={mapState}
            instanceRef={map}
            onLoad={(ymaps) => onMapLoad(ymaps)}
          >
            {pointsCoords.map((coordsItem, index) => (
              <Placemark
                key={index}
                geometry={coordsItem.coords}
                modules={['geoObject.addon.hint']}
                properties={{
                  hintContent: coordsItem.point.name,
                }}
                options={{
                  preset: 'islands#darkGreenCircleDotIcon',
                }}
                onClick={() => {
                  setCityData(coordsItem.point.cityId);
                  setPointData(coordsItem.point);
                }}
              />
            ))}
          </Map>
        </YMaps>
      </div>
    </div>
  );
}
