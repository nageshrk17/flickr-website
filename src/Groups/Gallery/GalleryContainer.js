import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import { fetchGallery } from '../../actions/groups';
import GalleryList from './GalleryList';

class GalleryContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { requestGallery, match } = this.props;
    requestGallery(match.params.id);
  }

  render() {
    let { collection, match } = this.props;
    console.log(collection);
    return (
      <GalleryList
         collection={collection}
         groupId={match.params.id}
       />
    );
  }
}

const mapStateToProps = (state) => ({
  collection: state.gallery.items,
});

const mapDispatchToProps = (dispatch) => ({
  requestGallery(id) {
    dispatch(fetchGallery(id));
  },
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryContainer));
