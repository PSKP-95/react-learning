import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      {/* 
        background-color => backgroundColor 
        wrap style in {javascript object}
      */}
      <button style={{backgroundColor: "blue", color: "white"}}>This is button</button>
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