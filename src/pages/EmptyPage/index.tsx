import React from 'react';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';

import s from './Empty.module.scss';

interface EmptyPageProps {
  title?: string
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <div className={s.root}>
      <Header/>
      <Layout className={s.contentWrap}>
        This is the empty page for {title}
      </Layout>
      <Footer/>
    </div>
  );
};

export default EmptyPage;
