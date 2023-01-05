import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';

import pageMenu from '../../data/page-menu.json' assert {type: 'json'};

export default function Header() {

  return (
    <header className={styles.MainHeader}>
      <Link href="/" legacyBehavior>
        <a title="Brand" >
          <Image src="https://iconfitness-res.cloudinary.com/image/upload/f_auto,q_auto/v1596821061/nordictrack.com/cdn/images/catalog/modules/iFit-Coach-Personalized-Training-NordicTrack-v2.svg"
            alt="iFIT logo"
            width={100}
            height={30}
          />
        </a>
      </Link>

      <ul className={styles.MainHeader__menu}>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
      </ul>
      
    </header>  
  
  )

}
