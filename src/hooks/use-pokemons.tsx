import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://zar.hosthot.ru/api/v1/pokemons';

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

interface IData {
  total: number;
  pokemons: IPokemon[];
}

interface IUsePokemons {
  data: IData | null;
  isLoading: boolean;
  isError: boolean;
}

export const usePokemons = (): IUsePokemons => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(API_URL);
        setData(data);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};
