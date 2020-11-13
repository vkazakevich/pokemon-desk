import React from 'react';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';

import PokemonCard from '../../components/PokemonCard';

import pokemons from '../../../data/pokemons.json';
import s from './Pokedex.module.scss';


const PokedexPage = () => {
  return (
    <div className={s.root}>
      <Header/>
      <Layout className={s.contentWrap}>
        <Heading type="h2" className={s.heading}>
          {pokemons.length} <strong>Pokemons</strong> for you to choose your favorite
        </Heading>
        <div className={s.grid}>
          {pokemons.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)}
        </div>
      </Layout>
      <Footer/>
    </div>
  );
};

export default PokedexPage;
