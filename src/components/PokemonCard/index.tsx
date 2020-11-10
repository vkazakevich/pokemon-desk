import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface IPokemon {
  name: string,
  stats: {
    attack: number,
    defense: number
  },
  img: string,
  types: Array<string>
}

interface IPokemonCardProps {
  pokemon: IPokemon
}

const PokemonCard: React.FC<IPokemonCardProps> = ({pokemon}) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading type='h1' className={s.titleName}>
          {pokemon.name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>
              {pokemon.stats.attack}
            </div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>
              {pokemon.stats.defense}
            </div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {pokemon.types.map((type) => <span key={type} className={s.label}>{type}</span>)}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img
          src={pokemon.img}
          alt={pokemon.name}
        />
      </div>
    </div>
  );
};

export default PokemonCard;
