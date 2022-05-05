import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { Formik } from 'formik';

export default function HomepageSubscribe() {
  return (
    <section className={styles.subscribeSection}>
      <div className='container'>
        <div class='row'>
          <div class='col col--6'>
            <h2>Subscribe for product updates</h2>
            <p>
              By subscribing, you agree with Revue’s{' '}
              <a target='_blank' href='https://www.getrevue.co/terms'>
                Terms of Service
              </a>{' '}
              and{' '}
              <a target='_blank' href='https://www.getrevue.co/privacy'>
                Privacy Policy
              </a>
              .
            </p>
          </div>
          <div className={clsx('col col--6', styles.subscribe)}>
            <Formik
              initialValues={{ email: '' }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    className={clsx('button', styles.input)}
                    placeholder='Email address'
                    name='member[email]'
                    type='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <input
                    type='submit'
                    name='member[subscribe]'
                    class='button button--primary button--lg'
                    value='Subscribe'
                  ></input>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
