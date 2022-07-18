import React, { useEffect } from 'react';
import { connect } from 'react-redux';

function UserList({ user }) {
  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="tour-price">
      <h4>{user.name}</h4>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps)(UserList);
