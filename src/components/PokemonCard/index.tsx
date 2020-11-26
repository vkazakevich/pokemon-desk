import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

import { PokemonsRequest } from '../../interfaces/pokemons';

interface IPokemonCardProps {
  pokemon: PokemonsRequest;
}

const PokemonCard: React.FC<IPokemonCardProps> = ({ pokemon }) => {
  const { name, stats, types, img } = pokemon;

  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading type="h1" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type: string) => (
            <span key={type} className={s.label}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
