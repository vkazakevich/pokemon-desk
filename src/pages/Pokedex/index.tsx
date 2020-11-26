import React, { useState } from 'react';

import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
import Loader from '../../components/Loader';

import useData from '../../hooks/useData';

import s from './Pokedex.module.scss';

import { IPokemons, PokemonsRequest } from '../../interfaces/pokemons';
import useDebounce from '../../hooks/useDebounce';

interface IPokemonCards {
  pokemons: PokemonsRequest[];
}

const Pokemons: React.FC<IPokemonCards> = ({ pokemons }) => (
  <div className={s.grid}>
    {pokemons.map((pokemon) => (
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
    ))}
  </div>
);

interface IQuery {
  name?: string;
}

const PokedexPage = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState<IQuery>({});

  const debouncedSearch = useDebounce(search, 500);

  const { data, isError, isLoading } = useData<IPokemons>('getPokemons', query, [debouncedSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: search,
    }));
  };

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
          <input
            type="text"
            placeholder="Encuentra tu pokémon..."
            className={s.search}
            value={search}
            onChange={handleSearchChange}
          />
        </div>

        {isLoading ? <Loader /> : <Pokemons pokemons={data.pokemons} />}
      </Layout>
      <Footer />
    </div>
  );
};

export default PokedexPage;
