import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import pageMenu from '../../data/page-menu.json' assert {type: 'json'};

export default function Footer() {

  return (
    <footer className={styles.MainFooter}>
      <div>
        <Link href="/" legacyBehavior >
          <a title="Brand" >
            <Image src="https://iconfitness-res.cloudinary.com/image/upload/f_auto,q_auto/v1596821061/nordictrack.com/cdn/images/catalog/modules/iFit-Coach-Personalized-Training-NordicTrack-v2.svg"
              alt="iFIT logo"
              width={100}
              height={30}
            />
          </a>
        </Link>
      </div>

      <ul className={styles.MainFooter__menu}>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
      </ul>
      
    </footer>  
  
  )

}
