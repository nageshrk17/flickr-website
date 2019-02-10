import styled from 'styled-components';
import { IoIosPerson } from "react-icons/io"; 
import { FaThLarge } from "react-icons/fa";

export const ContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
`;

export const ContentDiv = styled.div`
  background-color: #f1f1f1;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
  width: 380px;
  height: 105px;
  display: flex;
  flex-direction: row;
  cursor: pointer;

  & img {
    width: 70px;
    height: 70px;
    border-radius: 100%;
  }
`;

export const ItemDiv = styled.div`
  padding-left: 20px;
  padding-top: 8px;

  & h4 {
    margin: 0;
    width: 270px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 16px;
  }
`;

export const IconDiv = styled.div`
  padding: 20px;
  display: inline-block;
  & span {
    position: relative;
    padding-left: 10px;
    font-size: 14px;
  }
`;

export const MembersIcon = styled(IoIosPerson)`
  font-size: 26px;
`;

export const PhotosIcon = styled(FaThLarge)`
  font-size: 26px;
`;


export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`;

export const CardItem = styled.div`
  width: 380px;
  height: 420px;
  margin: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
`;

export const CardImg = styled.img`
  max-width: 100%;
`;

export const CardContent = styled.div`
  padding: 0 20px 20px;
  & h4 {
    text-align: center;
  }
`;

