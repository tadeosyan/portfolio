import { portfolio } from 'data/data';
import { PortfolioItem } from 'components';
import styled from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <section className={`${styled.portfolio} section`}>
      <h2 className="sectionTitle">
        My <span>Portfolio</span>
      </h2>

      <div className={`${styled.portfolioContainer} container grid`}>
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
