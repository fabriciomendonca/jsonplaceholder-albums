import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/albums-actions';

class Home extends Component {
  constructor(props) {
    super(props);

    this.onClickAlbum = this.onClickAlbum.bind(this);
  }

  componentWillMount() {
    this.props.fetchAlbums();
  }

  onClickAlbum(id) {
    this.props.fetchAlbumPhotos(id);
  }

  render() {
    return (
      <div className="home list-group pt-40">
        {this.props.albums.map(album => {
          const photos = album.photos || [];
          return (
            <div className="list-group-item" key={album.id}>
              <a onClick={() => this.onClickAlbum(album.id)}>
                {album.title}
              </a>
              <div className="row">
                {photos.map(photo => {
                  return (
                    <div className="col-xs-6 col-md-3 col-lg-2" key={photo.id}>
                      <img src={photo.thumbnailUrl} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  };
}

export default connect(mapStateToProps, actions)(Home);