import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/albums-actions';

class Home extends Component {

  componentWillMount() {
    this.props.fetchAlbums();
  }

  renderAlbums(album) {
    return (
      <li key={album.id}>
        <h2>{album.title}</h2>
      </li>
    );
  }

  render() {
    return (
      <ul className="home">
        {this.props.albums.map(this.renderAlbums)}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  };
}

export default connect(mapStateToProps, actions)(Home);