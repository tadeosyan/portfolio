import { PortfolioDetails } from 'data/data';
import styled from './PortfolioItem.module.css';
import Close from 'assets/close.svg';

interface PortfolioModalTypes {
  modalDetails: PortfolioDetails[];
  modalTitle: string;
  modalImg: string;
  close: () => void;
}

export const PortfolioModal = ({
  modalDetails,
  modalTitle,
  modalImg,
  close,
}: PortfolioModalTypes) => {
  return (
    <div className={styled.portfolioModal}>
      <div className={styled.portfolioModalContent}>
        <img
          src={Close}
          alt="Close Modal"
          className={styled.modalClose}
          onClick={close}
        />
        <h3 className={styled.modalTitle}>{modalTitle}</h3>
        <ul className={`${styled.modalList} grid`}>
          {modalDetails.map(({ icon, title, desc, id }) => {
            return (
              <li className={styled.modalItem} key={id}>
                <span className={styled.itemIcon}>{icon}</span>

                <div>
                  <span className={styled.itemTitle}>{title}</span>
                  <span className={styled.itemDetails}>{desc}</span>
                </div>
              </li>
            );
          })}
        </ul>

        <img
          src={modalImg}
          alt="Modal Image"
          className={styled.modalImg}
        />
      </div>
    </div>
  );
};
