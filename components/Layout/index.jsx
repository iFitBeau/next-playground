import Header from '../Header';
import Footer from '../Footer';
import SkipToMain from '../SkipToMain';
import styles from './styles.module.scss';

export default function Layout({something, children}) {

  return (
    <>
      <SkipToMain />
      <Header />
      <main id="main" className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}