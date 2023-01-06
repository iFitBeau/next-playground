import { supabase } from '../utils/supabase';
import Head from 'next/head'
import Image from 'next/image'
import { formatter } from '../utils/ultilities';

export default function Home({ products }) {

  return ( 
    <>
      <Head>
        <title>Mega-Awesome eCommerce Store! Get your drip on!</title>
        <meta name="description" content="You can't go out in public unless you look fly." />
      </Head>
      
      <section className='section'>
        <h1>Super Awesome eCommerce Store!  Buy our stuff!</h1>
        <div className='imgcontainer'>
          <Image src="https://iconfitness-res.cloudinary.com/image/upload/v1670952818/nordictrack.com/cdn/images/catalog/modules/12-06-22-slide_hero_lg-v2.jpg" alt="placeholder" fill />
        </div>
      </section>

      <section className='product_container'>
        
        {products.length && 
          products.map( (product, index) => (
            <a href={`/product/${product.id}`} key={index} className='ProductCard'>
              <picture>
                <img src={product.image_url} className='ProductCard__image' alt="" />
              </picture>
              <div className='ProductCard__copy'>
                <h3>{product.name}</h3>
                <div className='ProductCard__price_container'>
                  {product.sales_price && (
                    <p className='ProductCard__salesPrice'>{ formatter.format( product.sales_price ) }</p>
                  )}
                  <p className='ProductCard__msrp'>{ formatter.format( product.msrp ) }</p>
                </div>
              </div>
            </a>
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
