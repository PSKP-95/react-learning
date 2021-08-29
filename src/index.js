import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = { lat: null, errorMessage: '' }; // babel create constructor for us
  // not required
  // get called first
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null, errorMessage: '' };
  // }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState( {lat: position.coords.latitude} );
        console.log(position);
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("Component updated")
  }

  // required function
  render() {
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>
    } else if(!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    } else {
      return <div>Loading</div>
    }
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