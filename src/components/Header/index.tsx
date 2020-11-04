import React from 'react';
import Logo from '../../assets/logo.svg';
import Menu from '../Menu';
import s from './Header.module.scss';

const MENU_ITEMS = ['Home', 'Pokédex', 'Legendaries', 'Documentation'];

const Header: React.FC = () => (
  <header className={s.header}>
    <div className={s.container}>
      <Logo className={s.logo} />
      <nav>
        <Menu items={MENU_ITEMS} />
      </nav>
    </div>
  </header>
);

export default Header;
