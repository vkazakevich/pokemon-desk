import React from 'react';
import {useRoutes} from 'hookrouter';
import routes from './routes';
import NotFoundPage from './pages/NotFound';

const App: React.FunctionComponent = () => {
  const match = useRoutes(routes);
  return match || <NotFoundPage/>;
};

export default App;
