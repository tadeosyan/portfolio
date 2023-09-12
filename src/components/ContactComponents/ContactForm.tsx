import { useState, useEffect, useRef } from 'react';
import { FiSend } from 'react-icons/fi';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers,
} from 'formik';
import emailjs from '@emailjs/browser';
import styled from './ContactComponents.module.css';
import {
  basicSchema,
  initialValues,
  initialValuesTypes,
} from './utils';

export const ContactForm = () => {
  const [showForm, setShowForm] = useState(true);
  const [err, setErr] = useState('');
  const form = useRef(null);

  const handleSubmit = async (
    _values: initialValuesTypes,
    actions: FormikHelpers<initialValuesTypes>
  ) => {
    const currentForm = form.current;
    if (currentForm == null) return;

    await emailjs
      .sendForm(
        'service_akaklxd',
        'template_qqde4zt',
        currentForm,
        '-HUJp6pszLLfYfz-F'
      )
      .then((result) => {
        console.log(result.text);
        setShowForm(!showForm);
      })
      .catch((error) => {
        console.log(error.text);
        setErr(error.text);
      });

    actions.resetForm();
    actions.setSubmitting(false);
  };

  useEffect(() => {
    if (!showForm) {
      const resetForm = setTimeout(() => {
        setShowForm(!showForm);
      }, 4000);
      return () => clearTimeout(resetForm);
    }
  }, [showForm]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={basicSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <>
          {showForm ? (
            <Form
              noValidate
              ref={form}
              className={`${styled.contactForm} ${
                showForm ? styled.fadeIn : ''
              }`}
            >
              {err && (
                <div className={styled.formError}>
                  Something went wrong, please try again
                </div>
              )}

              <div className={styled.formInputGroup}>
                <div className={styled.formInputDiv}>
                  <Field
                    type="text"
                    placeholder="Your Name"
                    className={`${
                      errors.name && touched.name
                        ? `${styled.formControl} ${styled.inputError}`
                        : styled.formControl
                    }`}
                    name="name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={styled.inputErrorMessage}
                  />
                </div>

                <div className={styled.formInputDiv}>
                  <Field
                    type="email"
                    placeholder="Your Email"
                    className={
                      errors.email && touched.email
                        ? `${styled.formControl} ${styled.inputError}`
                        : styled.formControl
                    }
                    name="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={styled.inputErrorMessage}
                  />
                </div>

                <div className={styled.formInputDiv}>
                  <Field
                    type="text"
                    placeholder="Your Subject"
                    className={
                      errors.subject && touched.subject
                        ? `${styled.formControl} ${styled.inputError}`
                        : styled.formControl
                    }
                    name="subject"
                  />
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className={styled.inputErrorMessage}
                  />
                </div>
              </div>

              <div className={styled.formInputDiv}>
                <Field
                  placeholder="Your Message"
                  name="message"
                  as="textarea"
                  className={`${
                    errors.message && touched.message
                      ? `${styled.formControl} ${styled.inputError}`
                      : styled.formControl
                  } textarea`}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className={styled.inputErrorMessage}
                />
              </div>

              <button type="submit" className="button">
                {isSubmitting ? 'Submitting...' : 'Send Message'}
                <span
                  className={`buttonIcon ${styled.contactButtonIcon}`}
                >
                  <FiSend />
                </span>
              </button>
            </Form>
          ) : (
            <div
              className={`${styled.successMessage}  ${
                !showForm ? styled.fadeIn : ''
              }`}
            >
              Thank you for your <br /> message!
            </div>
          )}
        </>
      )}
    </Formik>
  );
};
