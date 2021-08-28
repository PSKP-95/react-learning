import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const getButtonText = () => {
  return "this is button text"
}

const App = () => {
  const buttonText = "Click Me!";
  return (
    <div>
      {/* 
        you can use {} for accessing JS variables in JSX
      */}
      <button className="blue-button">{buttonText}</button>
      {/* 
        can call function also
      */}
      <button className="blue-button">{getButtonText()}</button>
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