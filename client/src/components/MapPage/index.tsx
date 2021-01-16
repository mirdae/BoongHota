import React, { useRef, useEffect } from 'react';
import useShopList from '../../hooks/useShopList';
import useShop from '../../hooks/useShop';
import { Link } from 'react-router-dom';
import { Type } from '../../types';
import * as S from './MapPageStyle';

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
    if (Object.keys(map).length > 1) {
      drawMap();
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
    <S.MapContainer>
      <S.MapBox id="map" ref={mapRef}></S.MapBox>
      <S.MapButtonBox>
        <li>
          <Link to="/">
            <S.StyledHomeFilled />
          </Link>
        </li>
        <S.IconImage2>
          <S.IconImage
            src="https://media.vlpt.us/images/dolarge/post/aa3ea81d-4b5a-431a-9f22-090bdbea1a71/all.png"
            onClick={() => changeType('')}
            alt="select-all-button"
          />
        </S.IconImage2>
        <S.IconImage3>
          <S.IconImage
            src="https://media.vlpt.us/images/dolarge/post/9df7aa9c-5827-4928-8711-25763612cc5f/%EB%B6%95%EC%96%B4.png"
            onClick={() => changeType('boong')}
            alt="boong-button"
          />
        </S.IconImage3>

        <S.IconImage4>
          <S.IconImage
            src="https://media.vlpt.us/images/dolarge/post/18a0d072-1987-44e6-a8dc-74fb5d40a337/%ED%98%B8%EB%96%A1.png"
            onClick={() => changeType('ho')}
            alt="ho-button"
          />
        </S.IconImage4>
        <S.IconImage5>
          <S.IconImage
            src="https://media.vlpt.us/images/dolarge/post/9afdecdf-2a14-4079-9c06-487d657c6c7e/%ED%83%80%EC%BD%94.png"
            onClick={() => changeType('ta')}
            alt="ta-button"
          />
        </S.IconImage5>
      </S.MapButtonBox>
    </S.MapContainer>
  );
};

export default MapPage;
