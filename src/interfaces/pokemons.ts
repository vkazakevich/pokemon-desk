export interface IPokemons {
  total: number;
  pokemons: PokemonsRequest[];
}

export interface PokemonsRequest {
  name: string;
  stats: {
    attack: number;
    defense: number;
  };
  img: string;
  types: Array<string>;
  id: number;
}
