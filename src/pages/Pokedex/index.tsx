import React from 'react';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';

import s from './Pokedex.module.scss';

const PokedexPage = () => {
  return (
    <div className={s.root}>
      <Header/>
      <Layout className={s.contentWrap}>
        Pokedex page
      </Layout>
      <Footer/>
    </div>
  );
};

export default PokedexPage;
