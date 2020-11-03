import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import s from './App.module.scss';

const App: React.FunctionComponent = () => (
  <>
    <Header />
    <main className={s.main}>
      <div className={s.container}>Content</div>
    </main>
    <Footer />
  </>
);

export default App;
