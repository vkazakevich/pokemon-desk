import React from 'react';
import s from './Loader.module.scss';

const Loader = () => (
  <div className={s.root}>
    <div className={s.pokeball} />
    <p>Loading...</p>
  </div>
);

export default Loader;
