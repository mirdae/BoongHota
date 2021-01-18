import React, { useRef, useEffect } from 'react';
import useShopList from '../../hooks/useShopList';
import useShop from '../../hooks/useShop';
import { Link } from 'react-router-dom';
import { Type } from '../../types';
import * as S from './MapPageStyle';
import { ALL_IMG, BOONG_IMG, HO_IMG, TA_IMG } from '../../styles/img';

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
            <S.HomeFilled />
          </Link>
        </li>
        <S.IconImage id="all">
          <img
            src={`${ALL_IMG}`}
            onClick={() => changeType('')}
            alt="select-all-button"
          />
        </S.IconImage>
        <S.IconImage id="boong">
          <img
            src={`${BOONG_IMG}`}
            onClick={() => changeType('boong')}
            alt="boong-button"
          />
        </S.IconImage>
        <S.IconImage id="ho">
          <img
            src={`${HO_IMG}`}
            onClick={() => changeType('ho')}
            alt="ho-button"
          />
        </S.IconImage>
        <S.IconImage id="ta">
          <img
            src={`${TA_IMG}`}
            onClick={() => changeType('ta')}
            alt="ta-button"
          />
        </S.IconImage>
      </S.MapButtonBox>
    </S.MapContainer>
  );
};

export default MapPage;
