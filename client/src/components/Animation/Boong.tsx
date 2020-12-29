import React from 'react';
import { useSpring, animated } from 'react-spring';
import './styles.scss';

const calc = (x: number, y: number): number[] => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.3,
];
const trans = (x: number, y: number, s: number) =>
  `perspective(400px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Boong = () => {
  const [props, set]: any = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 700, friction: 40 },
  }));

  return (
    <animated.div
      className="boong"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    ></animated.div>
  );
};

export default Boong;
