import React from 'react';

import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';

import { usePokemons } from '../../hooks/use-pokemons';

import s from './Pokedex.module.scss';

const PokedexPage = () => {
  const { data, isError, isLoading } = usePokemons();

  if (isLoading) {
    return <b>Loading...</b>;
  }

  if (isError) {
    return <b>Error :(</b>;
  }

  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <Heading type="h2" className={s.heading}>
          {data.total} <strong>Pokemons</strong> for you to choose your favorite
        </Heading>
        <div className={s.grid}>
          {data.pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default PokedexPage;
