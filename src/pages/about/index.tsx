import { Info, Skills, Stats, ResumeList } from 'components';
import { FaDownload } from 'react-icons/fa';
import styled from './About.module.css';
import CV from 'assets/Razmik Tadevosyan(CV).pdf';

const About = () => {
  return (
    <main className="section container">
      <section className={styled.about}>
        <h2 className="sectionTitle">
          About <span>Me</span>
        </h2>

        <div className={`${styled.aboutContainer} grid`}>
          <div className={styled.aboutInfo}>
            <h3 className={styled.sectionSubTitle}>Personal Infos</h3>
            <ul className={`${styled.infoList} grid`}>
              <Info />
            </ul>

            <a href={CV} download="" className="button">
              Downlaod Cv
              <span className="buttonIcon">
                <FaDownload />
              </span>
            </a>
          </div>

          <div className={`${styled.stats} grid`}>
            <Stats />
          </div>
        </div>
      </section>

      <div className={styled.separator}></div>

      <section className={styled.skills}>
        <h3
          className={`${styled.sectionSubTitle} ${styled.subTitleCenter}`}
        >
          My Skills
        </h3>

        <div className={`${styled.skillsContainer} grid`}>
          <Skills />
        </div>
      </section>

      <div className={styled.separator}></div>

      <section className={styled.resume}>
        <h3
          className={`${styled.sectionSubTitle} ${styled.subTitleCenter}`}
        >
          Experience & Education
        </h3>

        <div className={`${styled.resumeContainer} grid`}>
          <ResumeList />
        </div>
      </section>
    </main>
  );
};

export default About;
