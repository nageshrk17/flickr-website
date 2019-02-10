import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchGroups } from '../actions/groups';
import List from './GroupsList';


class ListGroupsContainer extends Component {
  componentDidMount() {
    let { requestGroups } = this.props;
    requestGroups();
  }

  render() {
    let { collection } = this.props;
    console.log(collection);
    return (
      <List
        collection={collection}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  collection: state.groups.items,
});

const mapDispatchToProps = (dispatch) => ({
  requestGroups() {
    dispatch(fetchGroups());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListGroupsContainer);
