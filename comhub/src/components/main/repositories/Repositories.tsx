import React from 'react';
import { LiRepository, SectionRepository } from './Repositories-styled';

const Repositories = ({ repository }: any) => {
  return (
    <SectionRepository>
      <ul className="repo-list">
        {repository.length > 0 && repository.map((item: any) => {
          return (
            <LiRepository>
              <span>{item.name}</span>
            </LiRepository>
          )
        })}
      </ul>
    </SectionRepository>
  )
};

export default Repositories;