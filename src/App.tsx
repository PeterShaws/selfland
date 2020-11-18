import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';
import GlobalStyles from './styles/global.styles';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Routes />
    <GlobalStyles />
  </BrowserRouter>
);

export default App;
