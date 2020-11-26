import React from 'react';

import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';
import EmptyPage from './pages/EmptyPage';
import PokemonPage, { PokemonProps } from './pages/Pokemon';

interface IGeneralMenu {
  title: string;
  link: LinkEnum;
  component: (props: React.PropsWithChildren<any>) => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id'
}

export const GENERAL_MENU: Array<IGeneralMenu> = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage/>,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <PokedexPage/>,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <EmptyPage title="Legendaries"/>,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <EmptyPage title="Documentation"/>,
  },
];

const SECOND_MENU: IGeneralMenu[] = [
  {
    title: 'Pokemon',
    link: LinkEnum.POKEMON,
    component: ({ id }: PokemonProps) => <PokemonPage id={id}/>
  }
]

interface IAccMenu {
  [n: string]: (props: React.PropsWithChildren<any>) => JSX.Element;
}

const routes = [...GENERAL_MENU, ...SECOND_MENU].reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
