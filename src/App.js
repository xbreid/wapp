import React, { Component } from 'react';
import SearchBar from '../src/components/SearchBar';

const STATIC_TOKEN = 'WorkingWithSyntxWouldBeAGreatOpportunity';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {searchInput: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const endpoint = '/api/search/latlong/36.96,-122.02';
    const bearer = `Bearer ${ STATIC_TOKEN}`;

    fetch(endpoint, {
      method: 'GET',
      withCredentials: true,
      credentials: 'include',
      headers: {
        'Authorization': bearer,
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));

  }

  handleChange(event) {
    this.setState({searchInput: event.target.value});
  }

  handleSubmit(event) {
    alert(`A name was submitted: ${  this.state.searchInput}`);
    event.preventDefault();
  }

  render() {
    const { searchInput } = this.state;

    return (
      <div className="app__wrapper">
        <SearchBar
          handleChange={(e) => this.handleChange(e)}
          handleSubmit={(e) => this.handleSubmit(e)}
          value={searchInput}
        />
      </div>
    );
  }
}

export default App;
