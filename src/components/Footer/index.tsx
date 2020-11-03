import React from 'react';
import s from './Footer.module.scss';

const Footer: React.FC = () => (
  <footer className={s.footer}>
    <div className={s.container}>
      <div className={s.footer__content}>
        Make with
        <span role="img" aria-label="Heart">
          ❤️
        </span>
      </div>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#">Ours Team</a>
    </div>
  </footer>
);

export default Footer;
