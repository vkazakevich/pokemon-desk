import React from 'react';

import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';

interface IGeneralMenu {
  title: string,
  link: string,
  component: () => JSX.Element
}

export const GENERAL_MENU: Array<IGeneralMenu> = [
  {
    title: 'Home',
    link: '/',
    component: () => <HomePage/>
  },
  {
    title: 'Pokédex',
    link: '/pokedex',
    component: () => <PokedexPage/>
  },
  {
    title: 'Legendaries',
    link: '/legendaries',
    component: () => <PokedexPage/>
  },
  {
    title: 'Documentation',
    link: '/documentation',
    component: () => <PokedexPage/>
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {})

export default routes;
