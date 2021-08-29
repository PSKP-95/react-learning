import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: []}

  // onSearchSubmit(term) {
  //   axios.get('https://api.unsplash.com/search/photos', {
  //     params: {
  //       query: term
  //     },
  //     headers: {
  //       Authorization: 'Client-ID SKcUu9Ch5MBKVLMPe3bFIUEQc-nGe-CUly3JKn5UvIM'
  //     }
  //   }).then((response) => {
  //     console.log(response.data.results)
  //   });
  // }

  // or
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term
      },
    });

    this.setState({images: response.data.results});
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: "10px"}}>
        {/* onSubmit can be anything but onSubmit cant be used on DOM elements */}
        <SearchBar onSubmit={this.onSearchSubmit}/> 
        Found: {this.state.images.length}
      </div>
    );
  }
};

export default App;