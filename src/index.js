import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  return (
    <div>
      {/* 
        Below approach will work but to avoid collision with `class`
        keyword from js we will use `className`
      */}
      <button class="blue-button">This is button</button>
      <button className="blue-button">Another button with className</button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// This code for live reloading
if(module.hot) {
  module.hot.accept();
}