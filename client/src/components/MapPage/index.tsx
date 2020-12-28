import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useFullMap from '../../hooks/useFullMap';
import useSnackInfo from '../../hooks/useSnackInfo';
import { Link } from 'react-router-dom';
import { HomeFilled } from '@ant-design/icons';
import { RootState } from '../../modules';

import './styles.scss';

const Presenter = () => {
  const ref = useRef();
  const { drawMap } = useFullMap(window, ref);
  const { getAllSnacks, getSelectedSnacks } = useSnackInfo();
  const { snacks } = useSelector((state: RootState) => state.snacks);
  useEffect(() => {
    drawMap();
    console.log(snacks);
  }, [drawMap, snacks]);

  return (
    <div className="map-container">
      <div id="map" className="map-box" ref={ref}></div>
      <ul className="button-box">
        <li>
          <Link to="/">
            <HomeFilled className="home-icon" />
          </Link>
        </li>
        <li>
          <img
            src="https://media.vlpt.us/images/dolarge/post/aa3ea81d-4b5a-431a-9f22-090bdbea1a71/all.png"
            onClick={getAllSnacks}
          />
        </li>
        <li>
          <img
            src="https://media.vlpt.us/images/dolarge/post/9df7aa9c-5827-4928-8711-25763612cc5f/%EB%B6%95%EC%96%B4.png"
            onClick={() => getSelectedSnacks('boong')}
          />
        </li>
        <li>
          <img
            src="https://media.vlpt.us/images/dolarge/post/18a0d072-1987-44e6-a8dc-74fb5d40a337/%ED%98%B8%EB%96%A1.png"
            onClick={() => getSelectedSnacks('ho')}
          />
        </li>
        <li>
          <img
            src="https://media.vlpt.us/images/dolarge/post/9afdecdf-2a14-4079-9c06-487d657c6c7e/%ED%83%80%EC%BD%94.png"
            onClick={() => getSelectedSnacks('ta')}
          />
        </li>
      </ul>
    </div>
  );
};

export default Presenter;
