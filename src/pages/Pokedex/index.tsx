import React from 'react';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';

import s from './Pokedex.module.scss';

const PokedexPage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <Heading type="h1">Pokedex page</Heading>
      </Layout>
      <Footer />
    </div>
  );
};

export default PokedexPage;
