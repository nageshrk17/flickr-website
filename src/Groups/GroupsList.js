import React, {Component} from 'react';
import { withRouter } from 'react-router';

import {
  ContainerDiv,
  ContentDiv,
  ItemDiv,
  MembersIcon,
  PhotosIcon,
  IconDiv,
} from './styles';



class GroupsList extends Component {
  constructor(props) {
    super(props);
    this.navigateToGalleryPage = this.navigateToGalleryPage.bind(this);
  }

  navigateToGalleryPage(id) {
    const { history } = this.props;
    history.push(`gallery/${id}`);
  }

  
  render() {
    let { collection } = this.props;
    return (
      <ContainerDiv>
        {collection && collection.map((item) => {
          return (
            <ContentDiv key={item.nsid} onClick={() => this.navigateToGalleryPage(item.nsid)}>
             { item.iconfarm === 0 ? 
                 <img src='https://www.noblehour.com/public/layouts/images/group-default-logo.png'  alt='Default Image' />
               :
                <img src={`http://farm${item.iconfarm}.staticflickr.com/${item.iconserver}/buddyicons/${item.nsid}.jpg`} alt={item.name} />
             }
              <div>
                <ItemDiv>
                   <h4>{item.name}</h4>
                </ItemDiv>
                <IconDiv>
                   <MembersIcon /> 
                   <span>{item.members}</span>
                </IconDiv>
                <IconDiv>
                   <PhotosIcon /> 
                   <span>{item.pool_count}</span>
                </IconDiv>
              </div>
            </ContentDiv>
          );
        })}
      </ContainerDiv>
    );
  }
}



export default withRouter(GroupsList);
