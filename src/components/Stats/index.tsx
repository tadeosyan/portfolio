import { stats } from 'data/data';
import styled from './Stats.module.css';
import parse from 'html-react-parser';

export const Stats = () => {
  return (
    <>
      {stats.map(({ no, title, id }) => {
        return (
          <div className={styled.statsBox} key={id}>
            <h3 className={styled.statsNo}>{no}</h3>
            <p className={styled.statsTitle}>{parse(title)}</p>
          </div>
        );
      })}
    </>
  );
};
