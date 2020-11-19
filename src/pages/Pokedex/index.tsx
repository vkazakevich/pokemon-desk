import React, { useState } from 'react';

import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
import Loader from '../../components/Loader';

import getData from '../../hooks/getData';

import s from './Pokedex.module.scss';

interface IPokemon {
  name: string;
  stats: {
    attack: number;
    defense: number;
  };
  img: string;
  types: Array<string>;
  id: number;
}

interface IPokemons {
  pokemons: IPokemon[]
}

const Pokemons: React.FC<IPokemons> = ({ pokemons }) => (
  <div className={s.grid}>
    {pokemons.map((pokemon) => (
      <PokemonCard key={pokemon.id} pokemon={pokemon}/>
    ))}
  </div>
)

const PokedexPage = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState({});

  const { data, isError, isLoading } = getData('getPokemons', query, [
    search
  ]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setQuery((s) => ({
      ...s,
      name: search
    }))
  }

  if (isError) {
    return <b>Error :(</b>;
  }

  return (
    <div className={s.root}>
      <Layout>
        <Heading type="h2" className={s.heading}>
          {data && data.total} <strong>Pokemons</strong> for you to choose your favorite
        </Heading>
        <div>
          <input type="text" placeholder="Encuentra tu pokémon..." className={s.search} value={search} onChange={handleSearchChange}/>
        </div>

        {isLoading ? <Loader/> : <Pokemons pokemons={data.pokemons}/>}
      </Layout>
      <Footer/>
    </div>
  );
};

export default PokedexPage;
