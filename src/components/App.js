import React from 'react';
import PostList from './PostList';

const App = () => {
  return (
    <section className="section">
      <div className="section-center">
        <div className="title">
          <h4>Blog</h4>
          <div className="underline"></div>
        </div>
        <PostList />
      </div>
    </section>
  );
};

export default App;
