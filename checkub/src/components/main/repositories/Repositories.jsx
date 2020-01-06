import React from 'react';
import { LiRepository, SectionRepository, DivModalContainer } from './Repositories-styled';

const Repositories = ({ repository, onClickSelectRepo, commit, onClickCloseModal }) => {
  return (
    <SectionRepository className="contain">
      <ul className="repo-list">
        {repository.length > 0 && repository.map(item => {
          return (
            <LiRepository onClick={() => onClickSelectRepo(item.name)}>
              <span>{item.name}</span>
            </LiRepository>
          )
        })}
      </ul>
      {
        commit.length > 0 && 
        <DivModalContainer onClick={onClickCloseModal} className="modal-wrapper">
          <div className="modal">
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
        </DivModalContainer>
      }
    </SectionRepository>
  )
};

export default Repositories;