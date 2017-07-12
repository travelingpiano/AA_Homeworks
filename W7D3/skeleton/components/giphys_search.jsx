import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {searchTerm: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({searchTerm: event.target.value});
  }

  handleSubmit(event){
    this.props.fetchSearchGiphys(this.state.searchTerm);
  }

  render() {
    return (
      <div>
        <input value={this.state.searchTerm} onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}>Search Giphys</button>
        <GiphysIndex giphys={this.props.giphys} />
      </div>

    );
  }
}

export default GiphysSearch;
