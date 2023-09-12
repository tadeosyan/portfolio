import { FaFacebookF, FaLinkedin, FaGithub } from 'react-icons/fa';
import styled from './ContactComponents.module.css';

export const ContactSocials = () => {
  return (
    <div className={styled.contactSocials}>
      <a
        target="blank"
        href="facebook.com"
        className={styled.contactSocialLink}
      >
        <FaFacebookF />
      </a>

      <a
        target="blank"
        href="https://www.linkedin.com/in/tadeosyan"
        className={styled.contactSocialLink}
      >
        <FaLinkedin />
      </a>

      <a
        target="blank"
        href="https://github.com/tadeosyan"
        className={styled.contactSocialLink}
      >
        <FaGithub />
      </a>
    </div>
  );
};
