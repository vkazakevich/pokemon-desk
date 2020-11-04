import React from 'react';
import s from './Menu.module.scss';

interface Props {
  items: Array<string>;
}

const Menu: React.FC<Props> = ({ items = [] }) => {
  return (
    <ul className={s.menu__list}>
      {items.map((item: string) => (
        <li key={item} className={s.menu__list_item}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
