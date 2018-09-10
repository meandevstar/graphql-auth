import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Dashboard from '../../components/Dashboard'
import getMeQuery from '../../graphql/queries/me.gql';

class DashboardContainer extends Component {
  constructor(props) {
    super(props)
  }

  logout = () => {
    localStorage.clear();
    this.props.history.push('login');
  }

  render() {
    const { me, refetch } = this.props;

    refetch();

    return (
      <Dashboard
        me={me}
        logout={this.logout}
      />
    );
  }
}

const DashboardWithQuery = graphql(getMeQuery, {
  props: ({ ownProps, data: { loading, me, refetch }}) => ({
    me,
    loading,
    refetch
  })
})(DashboardContainer)

export default DashboardWithQuery;
