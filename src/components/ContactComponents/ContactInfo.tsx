import { FaEnvelopeOpen, FaPhoneSquareAlt } from 'react-icons/fa';
import styled from './ContactComponents.module.css';

export const ContactInfo = () => {
  return (
    <div className={styled.contactInfo}>
      <div className={styled.infoItem}>
        <FaEnvelopeOpen className={styled.infoIcon} />
        <div>
          <span className={styled.infoTitle}>Mail me</span>
          <h4 className={styled.infoDesc}>raz.tadeosyan@gmail.com</h4>
        </div>
      </div>

      <div className={styled.infoItem}>
        <FaPhoneSquareAlt className={styled.infoIcon} />
        <div>
          <span className={styled.infoTitle}>Call me</span>
          <h4 className={styled.infoDesc}>+374 77 58 11 47</h4>
        </div>
      </div>
    </div>
  );
};
