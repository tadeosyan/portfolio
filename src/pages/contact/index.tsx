import { ContactForm, ContactSocials, ContactInfo } from 'components';
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
          <ContactInfo />
          <ContactSocials />
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
