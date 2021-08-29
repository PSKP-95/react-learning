import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => {
//       console.log(position);
//     },
//     (err) => console.log(err)
//   );
//   return (
//     <div>hi There: </div>
//   );
// }

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (err) => console.log(err)
    );
    
    return (
      <div>hi There: </div>
    );
  }
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