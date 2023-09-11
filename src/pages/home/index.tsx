import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Profile from 'assets/home.jpg';
import styled from './Home.module.css';

const Home = () => {
  return (
    <section className={`${styled.home} section grid`}>
      <img
        src={Profile}
        alt="Profile photo"
        className={styled.homeImg}
      />

      <div className={styled.homeContent}>
        <div className={styled.homeData}>
          <h1 className={styled.homeTitle}>
            <span>I'm Razmik Tadevosyan.</span> <br /> React Developer
          </h1>

          <p className={styled.homeDescription}>
            I'm a Armenian based React Developer focused on crafting
            clean & user-friendly experiences, I am passionate about
            building excellent software that improves the lives of
            those around me.
          </p>

          <Link to="/about" className="button">
            More about me
            <span className="buttonIcon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className={styled.colorBlock}></div>
    </section>
  );
};

export default Home;
