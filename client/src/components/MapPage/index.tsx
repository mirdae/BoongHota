import React, { useRef, useEffect } from 'react';
import useShopList from '../../hooks/useShopList';
import useShop from '../../hooks/useShop';
import { Link } from 'react-router-dom';
import { HomeFilled } from '@ant-design/icons';
import { Type } from '../../types';
import './styles.scss';

const MapPage = ({
  match: {
    params: { id },
  },
}: any) => {
  const mapRef: any = useRef();
  const { map, shopList, drawMap, drawMarkers } = useShopList(window, mapRef);
  const { showAllShop, showSelectedShop } = useShop();
  let markerArr: any[] = [];

  useEffect(() => {
    drawMap();
    if (Object.keys(map).length > 1) {
      showSelectedShop(id);
    }
  }, [map, id, drawMap, showSelectedShop]);

  useEffect(() => {
    if (markerArr.length === 0) {
      markerArr = drawMarkers(shopList);
    }
  }, [shopList]);

  const changeType = (type?: Type) => {
    markerArr.map((marker) => marker.setMap(null));
    if (!type) {
      showAllShop();
    } else {
      showSelectedShop(type);
    }
  };

  return (
    <div className="map-container">
      <div id="map" className="map-box" ref={mapRef}></div>
      <ul className="button-box">
        <li>
          <Link to="/">
            <HomeFilled className="home-icon" />
          </Link>
        </li>
        <li>
          <img
            src="https://media.vlpt.us/images/dolarge/post/aa3ea81d-4b5a-431a-9f22-090bdbea1a71/all.png"
            onClick={() => changeType('')}
            alt="select-all-button"
          />
        </li>
        <li>
          <img
            src="https://media.vlpt.us/images/dolarge/post/9df7aa9c-5827-4928-8711-25763612cc5f/%EB%B6%95%EC%96%B4.png"
            onClick={() => changeType('boong')}
            alt="boong-button"
          />
        </li>
        <li>
          <img
            src="https://media.vlpt.us/images/dolarge/post/18a0d072-1987-44e6-a8dc-74fb5d40a337/%ED%98%B8%EB%96%A1.png"
            onClick={() => changeType('ho')}
            alt="ho-button"
          />
        </li>
        <li>
          <img
            src="https://media.vlpt.us/images/dolarge/post/9afdecdf-2a14-4079-9c06-487d657c6c7e/%ED%83%80%EC%BD%94.png"
            onClick={() => changeType('ta')}
            alt="ta-button"
          />
        </li>
      </ul>
    </div>
  );
};

export default MapPage;
