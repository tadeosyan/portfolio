import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import styled from './Contact.module.css';

const Contact = () => {
  return (
    <section className={`${styled.contact} section`}>
      <h2 className="sectionTitle">
        Get In <span>Touch</span>
      </h2>

      <div className={`${styled.contactContainer} container grid`}>
        <div className={styled.contactData}>
          <h3 className={styled.contactTitle}>Don't be Shy !</h3>
          <p className={styled.contactDescription}>
            Feel free to get in touch with me. I am always open to
            discussing new projects, creative ideas or opportunities
            to be part of your visions.
          </p>
          <div className={styled.contactInfo}>
            <div className={styled.infoItem}>
              <FaEnvelopeOpen className={styled.infoIcon} />
              <div>
                <span className={styled.infoTitle}>Mail me</span>
                <h4 className={styled.infoDesc}>
                  raz.tadeosyan@gmail.com
                </h4>
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
        </div>

        <form className={styled.contactForm}>
          <div className={styled.formInputGroup}>
            <div className={styled.formInputDiv}>
              <input
                type="text"
                placeholder="Your Name"
                className={styled.formControl}
              />
            </div>

            <div className={styled.formInputDiv}>
              <input
                type="email"
                placeholder="Your Email"
                className={styled.formControl}
              />
            </div>

            <div className={styled.formInputDiv}>
              <input
                type="text"
                placeholder="Your Subject"
                className={styled.formControl}
              />
            </div>
          </div>

          <div className={styled.formInputDiv}>
            <textarea
              placeholder="Your Massage"
              className={`${styled.formControl} textarea`}
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span
              className={`buttonIcon ${styled.contactButtonIcon}`}
            >
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
