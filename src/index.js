import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail/>
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