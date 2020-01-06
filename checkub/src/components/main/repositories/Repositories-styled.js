import styled from 'styled-components';
import FolderImg from '../../../image/folder.png'

export const SectionRepository = styled.section`
  .repo-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 45px;
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

export const DivModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    border: 1px solid black;
    border-radius: 3px;
    background-color: #fff;

  }
`;