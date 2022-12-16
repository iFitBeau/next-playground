import Header from '../Header';
import Footer from '../Footer'
import styles from './styles.module.scss'

export default function Layout({something, children}) {
console.log("Layout",something);
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}