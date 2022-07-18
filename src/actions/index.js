import _ from 'lodash';
import jsonpalceholder from '../api/jsonpalceholder';
import { FETCH_POSTS, FETCH_USER } from '../types';

export const fetchUserAndPosts = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonpalceholder.get('/posts');
  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonpalceholder.get(`/users/${id}`);
  dispatch({ type: FETCH_USER, payload: response.data });
};

// export const fetchUser = function (id) {
//   return _.memoize(async function (dispatch) {
//     const response = await jsonpalceholder.get(`/users/${id}`);
//     dispatch({ type: FETCH_USER, payload: response.data });
//   });
// };
