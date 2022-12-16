import Link from 'next/link';
import styles from './styles.module.scss'

export default function SkipToMain() {

  return (
    <div className={styles.SkipToMain}>
      <Link href="#main" tabIndex={1}>Skip To Main Content</Link>
    </div>
  )
}