import styled from 'styled-components';
import FolderImg from '../image/folder.png'

export const SectionHome = styled.section`
  width: 1250px;
  margin: 0 auto;
  border: 1px solid black;

  .repo-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const LiRepository = styled.li`
  margin-right: 50px;
  margin-bottom: 50px;
  width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;

  &::before {
    content: '';
    display: block;
    background-image: url(${FolderImg});
    background-size: contain;
    width: 80px;
    height: 75px;
  }
  
  span {
    font-size: 1.3rem;
    text-align: center;
  }
`;