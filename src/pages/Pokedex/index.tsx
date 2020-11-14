import React, { useEffect, useState } from 'react';

import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
import Loader from '../../components/Loader';

import { usePokemons } from '../../hooks/use-pokemons';

import s from './Pokedex.module.scss';

const POKEMONS_PER_PAGE = 24
const SCROLL_OFFSET = 100

const PokedexPage = () => {
  const { data, isError, isLoading } = usePokemons();
  const [showCount, setShowCount] = useState(POKEMONS_PER_PAGE)

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + SCROLL_OFFSET > document.documentElement.offsetHeight) {
        if (data && data.total > showCount) {
          setShowCount((count) => count + POKEMONS_PER_PAGE)
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data]);

  if (isLoading) {
    return <Loader/>;
  }
  if (isError || data === null) {
    return <b>Error :(</b>;
  }

  return (
    <div className={s.root}>
      <Layout>
        <Heading type="h2" className={s.heading}>
          {data.total} <strong>Pokemons</strong> for you to choose your favorite
        </Heading>
        <div className={s.grid}>
          {data.pokemons.slice(0, showCount).map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          ))}
        </div>
      </Layout>
      <Footer/>
    </div>
  );
};

export default PokedexPage;
