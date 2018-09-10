import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './graphql/apolloClient';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>, 
  document.getElementById('root')
);
registerServiceWorker();