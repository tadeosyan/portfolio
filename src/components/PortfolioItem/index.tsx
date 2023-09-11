import { useState } from 'react';
import { PortfolioItemTypes } from 'data/data';
import { PortfolioModal } from './PortfolioModal';

import styled from './PortfolioItem.module.css';

export const PortfolioItem = ({
  img,
  title,
  details,
}: PortfolioItemTypes) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className={styled.portfolioItem}>
      <img
        src={img}
        alt="Portfolio image"
        className={styled.portfolioImg}
      />

      <div className={styled.portfolioHover} onClick={toggleModal}>
        <h3 className={styled.portfolioTitle}>{title}</h3>
      </div>

      {modal && (
        <PortfolioModal
          modalDetails={details}
          modalTitle={title}
          modalImg={img}
          close={toggleModal}
        />
      )}
    </div>
  );
};
