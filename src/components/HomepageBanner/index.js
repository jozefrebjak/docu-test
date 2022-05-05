import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageBanner() {
  return (
    <section className={clsx(styles.section, styles.sectionDark)}>
      <div className='container padding-vert--md'>
        <div className='row'>
          <div className='col col--8 col--offset-2'>
            <div className='margin-vert--lg text--center'>
              <h2 className={styles.sectionDarkTitle}>
                AdminControl is not yet ready for production use and is being
                developed.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
