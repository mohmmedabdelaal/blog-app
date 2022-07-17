import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserList from './UserList';

const PostList = ({ fetchPosts, posts }) => {
  const [readMore, setReadMore] = useState(false);

  console.log(posts);
  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {posts.map((post) => {
        const { id, body, title, userId } = post;
        return (
          <article className="single-tour" key={id}>
            <footer>
              <div className="tour-info">
                <h3>{title}</h3>
              </div>
              <UserList userId={userId}></UserList>
              <p>
                {readMore ? body : `${body.substring(0, 120)}...`}
                <button onClick={() => setReadMore(!readMore)}>
                  {readMore ? 'show less' : '  read more'}
                </button>
              </p>
            </footer>
          </article>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
