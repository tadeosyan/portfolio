import styled from './Resume.module.css';
import { resume } from 'data/data';
import { ResumeItem } from './ResumeItem';

export const ResumeList = () => {
  return (
    <>
      <div className={styled.resumeData}>
        {resume.map((val) => {
          if (val.category === 'experience') {
            return <ResumeItem key={val.id} {...val} />;
          }
        })}
      </div>
      <div className={styled.resumeData}>
        {resume.map((val) => {
          if (val.category === 'education') {
            return <ResumeItem key={val.id} {...val} />;
          }
        })}
      </div>
    </>
  );
};
