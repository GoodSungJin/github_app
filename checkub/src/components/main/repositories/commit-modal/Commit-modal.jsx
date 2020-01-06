import React from 'react';
import { DivModalContainer } from './Commit-modal-styled';

const CommitModal = ({ commit, onClickCloseModal }) => {
  return (
    <>
    {commit.length > 0 && 
    <DivModalContainer onClick={onClickCloseModal} className="modal-wrapper">
      <div className="modal">
        <h1>Commit List</h1>
        <table>
          <thead>
            <tr>
              <th>Commit</th>
              <th>Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {commit.map(item => (
              <tr>
                <td>{item.message}</td>
                <td>{item.committer.name}</td>
                <td>{item.committer.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DivModalContainer>}
    </>
  )
};

export default CommitModal;