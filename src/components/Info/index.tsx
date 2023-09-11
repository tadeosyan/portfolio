import { personalInfo } from 'data/data';
import styled from './Info.module.css';

export const Info = () => {
  return (
    <>
      {personalInfo.map(({ title, description, id }) => {
        return (
          <li className={styled.infoItem} key={id}>
            <span className={styled.infoTitle}>{title}</span>
            <span className={styled.infoDescription}>
              {description}
            </span>
          </li>
        );
      })}
    </>
  );
};
