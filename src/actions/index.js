import jsonpalceholder from '../api/jsonpalceholder';
import { FETCH_POSTS } from '../types';

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonpalceholder.get('/posts');
  dispatch({ type: FETCH_POSTS, payload: response });
};
