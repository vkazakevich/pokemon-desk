import React from 'react';

import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import useData from '../../hooks/useData';

import s from './Pokemon.module.scss';

import { PokemonsRequest } from '../../interfaces/pokemons';
import Loader from "../../components/Loader";

export interface PokemonProps {
  id: string | number
}

const PokemonPage: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<PokemonsRequest>('getPokemon', { id });

  return (
    <div className={s.root}>
      <Layout>
        {isLoading ? <Loader /> : data.name}
      </Layout>
      <Footer/>
    </div>
  );
};

export default PokemonPage;
