import React from 'react';
import { navigate } from 'hookrouter';

import { LinkEnum } from '../../routes';
import Button from '../../components/Button';
import TeamRocket from './assets/TeamRocket.png';

import s from './NotFound.module.scss';

const NotFoundPage = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.text}>404</div>
        <div className={s.content}>
          <img src={TeamRocket} alt="" />
          <div className={s.subTitle}>
            <span>The rocket team</span> has won this time.
          </div>
          <Button theme="yellow" onClick={() => navigate(LinkEnum.HOME)}>
            Return
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
