import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import styled from './Skills.module.css';
import { skills } from 'data/data';

export const Skills = () => {
  return (
    <>
      {skills.map(({ title, percentage, id }) => {
        return (
          <div className={styled.progressBox} key={id}>
            <div className={styled.progressCircle}>
              <CircularProgressbar
                strokeWidth={5.5}
                text={`${percentage}%`}
                value={percentage}
                styles={{
                  path: {
                    stroke: `var(--first-color)`,
                    strokeLinecap: 'butt',
                  },
                  trail: {
                    stroke: `var(--container-color)`,
                  },
                  text: {
                    fill: `var(--title-color)`,
                    fontFamily: `var(--second-font)`,
                    fontSize: `var(--large-font-size)`,
                  },
                }}
              />
            </div>
            <h3 className={styled.skillsTitle}>{title}</h3>
          </div>
        );
      })}
    </>
  );
};
