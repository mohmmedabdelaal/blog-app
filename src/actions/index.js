import jsonpalceholder from '../api/jsonpalceholder';
import { FETCH_POSTS } from '../types';

export const fetchPosts = () => {
  return function (dispatch, getState) {
    const promise = jsonpalceholder.get('/posts');
    return {
      type: FETCH_POSTS,
      payload: promise,
    };
  };
};
