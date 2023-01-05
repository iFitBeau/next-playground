import Header from '../Header';
import Footer from '../Footer';
import SkipToMain from '../SkipToMain';
import styles from './styles.module.scss';
import Head from 'next/head';

export default function Layout({something, children}) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <SkipToMain />
      <Header />
      <main id="main" className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}