import React from 'react';
import { ReactComponent as PokemonLogoSvg } from '../../assets/logo.svg';

import s from './Header.module.scss';

interface IMenu {
  id: number;
  label: string;
  link: string;
}

const MENU_ITEMS: IMenu[] = [
  {
    id: 1,
    label: 'Home',
    link: '#',
  },
  {
    id: 2,
    label: 'Pokédex',
    link: '#',
  },
  {
    id: 3,
    label: 'Legendaries',
    link: '#',
  },
  {
    id: 4,
    label: 'Documentation',
    link: '#',
  },
];

const Header = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={s.menuWrap}>
          {MENU_ITEMS.map(({ label, link, id }) => (
            <a key={id} href={link} className={s.menuLink}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
