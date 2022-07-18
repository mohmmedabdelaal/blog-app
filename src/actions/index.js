import _ from 'lodash';
import jsonpalceholder from '../api/jsonpalceholder';
import { FETCH_POSTS, FETCH_USER } from '../types';

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonpalceholder.get('/posts');
  dispatch({ type: FETCH_POSTS, payload: response.data });
};

// export const fetchUser = (id) => async (dispatch) => {
//   const response = await jsonpalceholder.get(`/users/${id}`);
//   dispatch({ type: FETCH_USER, payload: response.data });
// };

export const fetchUser = _.memoize(function (id) {
  return async function (dispatch) {
    const response = await jsonpalceholder.get(`/users/${id}`);
    dispatch({ type: FETCH_USER, payload: response.data });
  };
});
