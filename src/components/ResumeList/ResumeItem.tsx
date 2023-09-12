import parse from 'html-react-parser';
import { ResumeEntry } from 'data';
import styled from './Resume.module.css';

export const ResumeItem = ({
  icon,
  year,
  title,
  desc,
}: ResumeEntry) => {
  return (
    <div className={styled.resumeItem}>
      <div className={styled.resumeIcon}>{icon}</div>

      <span className={styled.resumeDate}>{year}</span>
      <h3 className={styled.resumeSubtitle}>{parse(title)}</h3>
      <p className={styled.resumeDescription}>{parse(desc)}</p>
    </div>
  );
};
