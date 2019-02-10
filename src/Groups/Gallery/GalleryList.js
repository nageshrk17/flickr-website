import React, {Component} from 'react';
import {
  ContainerDiv,
  Cards,
  CardItem,
  CardImg,
  CardContent,
} from '../styles';



class GalleryList extends Component {
  constructor(props) {
    super(props);
    
  }

  
  render() {
    let { collection, groupId } = this.props;
      return (
        <ContainerDiv>
          {collection && collection.map((item) => {
            return (
              <Cards key={item.id}>
                <CardItem>
                  <div>
                    

                    { item.farm === 0 ? 
                      <CardImg src='https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='Default Image' />
                    :
                     <CardImg src={`http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${groupId}.jpg`} alt={item.name} />
                  }
                    <CardContent>
                      <h4>{item.title}</h4>
                      <p>{item.ownername}</p>
                    </CardContent>
                  </div>
                </CardItem>
              </Cards>
           );
        })}
      </ContainerDiv>
      );
    }
}



export default GalleryList;
