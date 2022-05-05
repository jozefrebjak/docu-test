import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageBanner from '@site/src/components/HomepageBanner';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageSubscribe from '@site/src/components/HomepageSubscribe';
import ImageUrl from '@site/static/img/screenshot.png';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className='container'>
        <div class='row'>
          <div class='col col--6'>
            <p className='hero__subtitle'>{siteConfig.title}</p>
            <h1 className='hero__title'>{siteConfig.tagline}</h1>
            <p className='hero__subtitle'>
              Network control panel based on Docker
            </p>
            <div className={styles.buttons}>
              <Link
                className='button button--primary button--lg'
                to='/docs/intro'
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className={clsx('col col--6', styles.panelImage)}>
            <a
              href='https://www.youtube.com/watch?v=XJPYeTeq7q0'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={ImageUrl} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description='AdminControl <head />'
    >
      <HomepageHeader />
      <main>
        <HomepageBanner />
        <HomepageFeatures />
        <HomepageSubscribe />
      </main>
    </Layout>
  );
}
