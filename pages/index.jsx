import styles from '../styles/Home.module.scss'
import { supabase } from '../utils/supabase';
import Head from 'next/head'
import Image from 'next/image'
import ProductCard from '../components/ProductCard';

export default function Home({ products }) {

  return (
    <>
      <Head>
        <title>Mega-Awesome eCommerce Store! Get your drip on!</title>
        <meta name="description" content="You can't go out in public unless you look fly." />
      </Head>
      
      <section className={styles.section}>
        <h1>Super Awesome eCommerce Store!  Buy our stuff!</h1>
        <div className={styles.imgcontainer}>
          <Image src="https://iconfitness-res.cloudinary.com/image/upload/v1670952818/nordictrack.com/cdn/images/catalog/modules/12-06-22-slide_hero_lg-v2.jpg" alt="placeholder" fill />
        </div>
      </section>

      <section className={styles.product_container}>
        
        {products.length && 
          products.map( (product, index) => (
            <ProductCard key={index} {...product} />
          ) )
        }

      </section>

    </>
  )
}

export const getStaticProps = async () => {
  const { data: products } = await supabase.from('products').select('*');

  return {
    props: {
      products,
    }
  }
}
