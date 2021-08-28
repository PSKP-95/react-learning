import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author={faker.name.firstName()} time={faker.date.past().toString()} comment={faker.lorem.sentence()}/>
      <CommentDetail author={faker.name.firstName()} time={faker.date.past().toString()} comment={faker.lorem.sentence()}/>
      <CommentDetail author={faker.name.firstName()} time={faker.date.past().toString()} comment={faker.lorem.sentence()}/>
      <CommentDetail author={faker.name.firstName()} time={faker.date.past().toString()} comment={faker.lorem.sentence()}/>
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