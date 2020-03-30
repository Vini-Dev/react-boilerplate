import React from 'react';
import { useSelector } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';
import light from '~/styles/theme/light';
import dark from '~/styles/theme/dark';

import Routes from './routes/index';
import GlobalStyle from './styles/global';

const history = createBrowserHistory();

const App = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
