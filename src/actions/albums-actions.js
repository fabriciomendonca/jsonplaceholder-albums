import axios from 'axios';
import { FETCH_ALBUMS, FETCH_ALBUM_PHOTOS } from './action-types';

const API_URL = 'https://jsonplaceholder.typicode.com';

export function fetchAlbums() {
  const request = axios.get(`${API_URL}/albums`);

  return (dispatch) => {
    request.then(response => {
      dispatch({
        type: FETCH_ALBUMS,
        payload: response.data
      });
    });
  };
}

export function fetchAlbumPhotos(id) {
  const request = axios.get(`${API_URL}/albums/${id}/photos`);

  return (dispatch) => {
    request.then(response => {
      dispatch({
        type: FETCH_ALBUM_PHOTOS,
        payload: {
          id,
          data: response.data,
        }
      });
    });
  };
}
