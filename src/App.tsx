import React from 'react';
import { useRoutes } from 'hookrouter';

import routes from './routes';
import Header from './components/Header';
import NotFoundPage from './pages/NotFound';

const App: React.FunctionComponent = () => {
  const match = useRoutes(routes);
  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFoundPage />
  );
};

export default App;
