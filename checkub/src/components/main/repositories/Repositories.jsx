import React from 'react';
import { LiRepository, SectionRepository } from './Repositories-styled';
import CommitModal from './commit-modal/Commit-modal';

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
      <CommitModal commit={commit} onClickCloseModal={onClickCloseModal} />
    </SectionRepository>
  )
};

export default Repositories;