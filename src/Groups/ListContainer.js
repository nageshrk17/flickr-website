import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Navbar, Form, FormControl } from 'react-bootstrap';
import { fetchGroups } from '../actions/groups';
import List from './GroupsList';


class ListGroupsContainer extends Component {
  constructor(props) {
    super(props);
    this.onTextChange = this.onTextChange.bind(this);
  }

 
  async onTextChange(e) {
    const { value } = e.target;
    let { requestGroups } = this.props;
    requestGroups(value);
  }

  render() {
    let { collection } = this.props;
    console.log(collection);
    return (
      <div>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand>Flickr</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Form>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.onTextChange} />
          </Form>
        </Navbar.Collapse>
       </Navbar>
       <List
         collection={collection}
       />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  collection: state.groups.items,
});

const mapDispatchToProps = (dispatch) => ({
  requestGroups(value) {
    dispatch(fetchGroups(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListGroupsContainer);
