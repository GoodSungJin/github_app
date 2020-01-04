import React from 'react';
import { LiRepository, SectionRepository } from './Repositories-styled';

const Repositories = ({ repository, onClickSelectRepo }: any) => {
  return (
    <SectionRepository>
      <ul className="repo-list">
        {repository.length > 0 && repository.map((item: any) => {
          return (
            <LiRepository onClick={() => onClickSelectRepo(item.name)}>
              <span>{item.name}</span>
            </LiRepository>
          )
        })}
      </ul>
    </SectionRepository>
  )
};

export default Repositories;