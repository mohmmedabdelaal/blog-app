import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

const PostList = ({ fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);
  return <div>Post List</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return { state };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
