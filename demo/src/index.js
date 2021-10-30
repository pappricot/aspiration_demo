import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import "font-awesome/css/font-awesome.css";
import { InMemoryCache, ApolloClient, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers:{
    // for usual workflow the token is stored in .env file and gets accessed as shown on line 14, for now i'll just be passing it straight for demo
    // authorization:  `Bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}`
    authorization:  `Bearer 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`
  }
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <React.StrictMode><App /></React.StrictMode>    
    </ApolloProvider>, 
  document.getElementById('root')
);