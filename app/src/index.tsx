import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap');

body {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
  background: black;
  font-family: 'Noto Serif', serif;
}

p,
h1,
h2,
h3,
a,
ul {
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: white;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
