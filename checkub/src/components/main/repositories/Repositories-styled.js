import styled from 'styled-components';
import FolderImg from '../../../image/folder.png'

export const SectionRepository = styled.section`
  height: 85%;
  width: 99%;
  border: 1px solid #aaa;
  border-radius: 3px;

  .repo-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 45px;
  }
`;

export const LiRepository = styled.li`
  margin-right: 3%;
  margin-bottom: 4%;
  width: 7%;
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
    line-height: 2rem;
    text-align: center;
  }
`;