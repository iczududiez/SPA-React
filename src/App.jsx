import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'react-router-redux';
import ReduxToastr from 'react-redux-toastr';
import 'styles/global.scss';
// import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import getRoutes from './containers/Routes';
import store from './redux-flow';

import Layout from './containers/Common/Layout';
import Header from './components/Common/Header';
import Content from './components/Common/Content';
import Logo from './components/Common/Logo';

const history = createBrowserHistory();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HashRouter>
        <Layout>
          <ReduxToastr
            timeOut={2000}
            newestOnTop={false}
            preventDuplicates
            position="top-left"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick
          />
          <Header>
            <Logo />
          </Header>
          <Content>
            {getRoutes(store)}
          </Content>
        </Layout>
      </HashRouter>
    </ConnectedRouter>
  </Provider>
);

export default hot(module)(App);
