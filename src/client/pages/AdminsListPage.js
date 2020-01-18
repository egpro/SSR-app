import React from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";

class AdminsListPage extends React.Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(admin => <li key={admin.id}>{admin.name}</li>);
  }

  render() {
    return (
      <div>
        <h3>Protected list of admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

const mapState = ({ admins }) => ({
  admins
});

export default {
  component: connect(mapState, { fetchAdmins })(AdminsListPage),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
