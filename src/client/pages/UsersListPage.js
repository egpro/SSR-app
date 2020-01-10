import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        Ha ha:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapState = state => ({
  users: state.users
});

export function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  component: connect(mapState, { fetchUsers })(UserList),
  loadData
};
