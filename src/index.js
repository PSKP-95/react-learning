import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return "Hello World";
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


if(module.hot) {
  module.hot.accept();
}