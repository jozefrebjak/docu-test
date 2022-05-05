import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageBanner() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
        <div className='container'>
          <h2 className={clsx('margin-bottom--lg', 'text--center')}>Altered</h2>
        </div>
    </section>
  );
}
